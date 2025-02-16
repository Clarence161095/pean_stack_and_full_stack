import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { TextDecoder } from 'util';

const s3Client = new S3Client();

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

        // TODO: Process CSV file and push data to DynamoDB

        return {
            statusCode: 200,
            body: 'File read successfully!'
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
