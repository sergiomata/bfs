
const messageSchema = () => {
  return {
    uuid: { type: "string", dbName: "" },
    messageType: { type: "string", dbName: "" },
    messageId: { type: "string", dbName: "" },
    createdDateTime: { type: "date", dbName: "" },
    origin: { type: "string", dbName: "" },
    from: { type: "string", dbName: "" },
    phone: { type: "string", dbName: "" },
    updatedAt: { type: "date", dbName: "" },
    createdAt: { type: "date", dbName: "" },
    status: { type: "string", dbName: "" },
    platform: { type: "string", dbName: "" },
    updatedDateTime: { type: "date", dbName: "" },
    content: { type: "object", dbName: "" },
    msisdn: { type: "number", dbName: "" },
    type: { type: "string", dbName: "typeMessage" },
    source: { type: "object", dbName: "sourceMessage" },
    to: { type: "string", dbName: "" },
    conversationId: { type: "string", dbName: "" },
    channelId: { type: "string", dbName: "" },
    direction: { type: "string", dbName: "" }
  };
}

module.exports = {
  messageSchema
}