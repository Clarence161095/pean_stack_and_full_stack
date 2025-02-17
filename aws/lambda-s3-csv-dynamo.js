import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { DynamoDBClient, BatchWriteItemCommand, CreateTableCommand, DescribeTableCommand } from '@aws-sdk/client-dynamodb';
import { TextDecoder } from 'util';

const s3Client = new S3Client();
const dynamoClient = new DynamoDBClient();

async function checkAndCreateTable() {
    const tableName = 'linhclass-users';
    try {
        await dynamoClient.send(new DescribeTableCommand({ TableName: tableName }));
        console.log(`Table ${tableName} already exists.`);
    } catch (error) {
        if (error.name === 'ResourceNotFoundException') {
            console.log(`Table ${tableName} not found. Creating now...`);
            const createParams = {
                TableName: tableName,
                KeySchema: [
                    { AttributeName: 'name', KeyType: 'HASH' } // Partition key
                ],
                AttributeDefinitions: [
                    { AttributeName: 'name', AttributeType: 'S' }
                ],
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5
                }
            };
            await dynamoClient.send(new CreateTableCommand(createParams));
            console.log(`Table ${tableName} created successfully.`);
        } else {
            throw error;
        }
    }
}

async function streamToString(stream) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    return new TextDecoder('utf-8').decode(buffer);
}

export async function handler(event) {
    try {
        console.log('1. Event:', JSON.stringify(event, null, 2));
        await checkAndCreateTable();

        const bucket = event.Records[0].s3.bucket.name;
        const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));

        console.log('2. Bucket:', bucket);
        console.log('3. Key:', key);

        const params = {
            Bucket: bucket,
            Key: key
        };

        const command = new GetObjectCommand(params);
        const data = await s3Client.send(command);

        const fileContent = await streamToString(data.Body);

        console.log('4. File content:', fileContent);

        const lines = fileContent.split('\n');
        const headers = lines[0].split(',');
        console.log('5. Headers:', headers);

        const records = lines.slice(1).filter(line => line.trim()).map(line => {
            const values = line.split(',');
            return headers.reduce((record, header, index) => {
                record[header.trim()] = values[index]?.trim();
                return record;
            }, {});
        });

        console.log('6. Records:', records);

        const putRequests = records.map(record => ({
            PutRequest: {
                Item: {
                    name: { S: record.name },
                    age: { N: record.age },
                    hobby: { S: record.hobby },
                    learning: { S: record.learning }
                }
            }
        }));

        const dynamoParams = {
            RequestItems: {
                'linhclass-users': putRequests
            }
        };

        if (putRequests.length > 0) {
            const dynamoCommand = new BatchWriteItemCommand(dynamoParams);
            await dynamoClient.send(dynamoCommand);
            console.log('7. Saved to DynamoDB successfully!');

            // TODO: Insert to table linhclass-batch-management

            // TODO: Send message to SQS

        } else {
            console.log('No valid records found to save.');
        }

        return {
            statusCode: 200,
            body: 'File processed successfully!'
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
