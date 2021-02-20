const messageBigQuerySchema = () => {

  return [
    {
      "name": "uuid",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "messageType",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "messageId",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "createdDateTime",
      "type": "TIMESTAMP",
      "mode": "NULLABLE"
    },
    {
      "name": "origin",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "from",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "phone",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "updatedAt",
      "type": "TIMESTAMP",
      "mode": "NULLABLE"
    },
    {
      "name": "createdAt",
      "type": "TIMESTAMP",
      "mode": "NULLABLE"
    },
    {
      "name": "status",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "platform",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "updatedDateTime",
      "type": "TIMESTAMP",
      "mode": "NULLABLE"
    },
    {
      "name": "content",
      "type": "RECORD",
      "mode": "NULLABLE",
      "fields": [
        {
          "name": "hsm",
          "type": "RECORD",
          "mode": "NULLABLE",
          "fields": [
            {
              "name": "language",
              "type": "RECORD",
              "mode": "NULLABLE",
              "fields": [
                {
                  "name": "code",
                  "type": "STRING",
                  "mode": "NULLABLE"
                },
                {
                  "name": "policy",
                  "type": "STRING",
                  "mode": "NULLABLE"
                }
              ]
            },
            {
              "name": "namespace",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "params",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "templateName",
              "type": "STRING",
              "mode": "NULLABLE"
            }
          ]
        }
      ]
    },
    {
      "name": "msisdn",
      "type": "NUMERIC",
      "mode": "NULLABLE"
    },
    {
      "name": "typeMessage",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "sourceMessage",
      "type": "RECORD",
      "mode": "NULLABLE",
      "fields": [
        {
          "name": "agentId",
          "type": "STRING",
          "mode": "NULLABLE"
        },
        {
          "name": "changedByAgentId",
          "type": "STRING",
          "mode": "NULLABLE"
        },
        {
          "name": "changedByInboxAgent",
          "type": "STRING",
          "mode": "NULLABLE"
        },
        {
          "name": "inboxAgent",
          "type": "RECORD",
          "mode": "NULLABLE",
          "fields": [
            {
              "name": "avatarUrl",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "firstName",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "fullName",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "id",
              "type": "STRING",
              "mode": "NULLABLE"
            },
            {
              "name": "lastName",
              "type": "STRING",
              "mode": "NULLABLE"
            }
          ]
        },
      ]
    },
    {
      "name": "to",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "conversationId",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "channelId",
      "type": "STRING",
      "mode": "NULLABLE"
    },
    {
      "name": "direction",
      "type": "STRING",
      "mode": "NULLABLE"
    }
  ];
};

module.exports = {
  messageBigQuerySchema
}