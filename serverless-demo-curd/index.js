import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { PutCommand, GetCommand, ScanCommand, DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDB({ region: "ap-northeast-1" });
const dynamo = DynamoDBDocumentClient.from(client);

const dynamoTableName = "chat-app-message";

const ROUTE = {
  health: "/health",
  message: "/message",
  messages: "/messages",
};

export const handler = async (event) => {
  try {
    console.log("event", event);
    const response = await route(event);
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal server error!",
        error: error,
      }),
    };
  }
};

async function route(event) {
  let response;

  switch (true) {
    case event.httpMethod === "GET" && event.path === ROUTE.health:
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: "Health check passed!",
        }),
      };
      break;
    case event.httpMethod === "GET" && event.path === ROUTE.message: {
      const messageId = event.queryStringParameters.messageId;
      response = await getMessage(messageId);
      break;
    }
    case event.httpMethod === "GET" && event.path === ROUTE.messages: {
      response = await getMessages();
      break;
    }
    case event.httpMethod === "POST" && event.path === ROUTE.message: {
      const message = JSON.parse(event.body);
      response = await createMessage(message);
      break;
    }
    case event.httpMethod === "PUT" && event.path === ROUTE.message: {
      const messageId = event.queryStringParameters.messageId || null;
      const message = JSON.parse(event.body);
      response = await updateMessage(messageId, message);
      break;
    }
    case event.httpMethod === "DELETE" && event.path === ROUTE.message: {
      const messageId = event.queryStringParameters.messageId;
      response = await deleteMessage(messageId);
      break;
    }
    default:
      response = {
        statusCode: 404,
        body: JSON.stringify({
          message: "Not found!",
        }),
      };
  }

  return response;
}

async function getMessage(messageId) {
  let response;
  const command = new GetCommand({
    TableName: dynamoTableName,
    Key: {
      messageId: messageId,
    },
  });

  try {
    const data = await dynamo.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to get message!",
      }),
    };
  }
  return response;
}

async function getMessages() {
  let response;
  const command = new ScanCommand({
    TableName: dynamoTableName,
  });

  try {
    const data = await dynamo.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to get messages!",
      }),
    };
  }
  return response;
}

async function createMessage(message) {
  let response;
  const command = new PutCommand({
    TableName: dynamoTableName,
    Item: message,
  });

  try {
    await dynamo.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message created!",
      }),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to create message!",
      }),
    };
  }
  return response;
}

async function updateMessage(messageId, message) {
  let response;
  const command = new PutCommand({
    TableName: dynamoTableName,
    Item: {
      messageId: messageId,
      ...message,
    },
  });

  try {
    await dynamo.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message updated!",
      }),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to update message!",
      }),
    };
  }
  return response;
}

async function deleteMessage(messageId) {
  let response;
  const command = new DeleteCommand({
    TableName: dynamoTableName,
    Key: {
      messageId: messageId,
    },
  });

  try {
    await dynamo.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message deleted!",
      }),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to delete message!",
      }),
    };
  }
  return response;
}
