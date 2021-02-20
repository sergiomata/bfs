
const { messageBigQuerySchema } = require ("./bdSchema")
const { messageSchema } = require("./inputSchema")

const bfs = (objField,fieldName, bigQuerySchema,recordFieldsSolved,keys) => {

  const schemaObj = bigQuerySchema.find(elem => {
    return elem.name === objField
  }); 
  // let query = "";
  console.log("schemaObj: ",objField)
   const schemaFields = schemaObj.fields
  const recordFields = []
  let tableName
  schemaFields.forEach(field => {
    if (field.type === 'RECORD' ){
      tableName = `${fieldName}.${field.name}`
      recordFields.push({name:field.name,tableName})
    }else{
      if (field.type === 'RECORD' ){
        tableName = `${fieldName}.${field.name}`
        recordFields.push({name:field.name,tableName})
      }else{
      tableName = `${fieldName}.${field.name}, `
      recordFieldsSolved.push({name:field.name,tableName})
      keys.push(tableName)
      }
    }
  });
    recordFields.forEach(field => {
      // 
      bfs(field.name,field.tableName, schemaFields,recordFieldsSolved,keys)// )
    });

  //console.log("recordFields: ", recordFields)
  return recordFieldsSolved
}


const begin = () => {
  
  const bigQuerySchema = messageBigQuerySchema()
  const schema = messageSchema()
  const schemafields = Object.keys(schema)
  let keys = []
  let values = ""
  let recordFields = []
  let recordFieldsSolved = []
  let recordFieldsSolvedComplete = []
  let fieldName
  for (const field of schemafields) {
    let fieldType = schema[field].type
    let name = schema[field].dbName ? schema[field].dbName : field
    if (fieldType === "object") {
      // values += createQueryObject(name, bigQuerySchema);
      fieldName = `SourceTable.${name}`
      recordFields.push({name,fieldName})
    } else {
      fieldName = `SourceTable.${name}, `
      keys.push(fieldName)
    }
  }
  recordFields.forEach(field => {
    console.log("field: ", field)
    bfs(field.name,field.fieldName,bigQuerySchema,recordFieldsSolved,keys)
  });

  // let stringFields = keys.join(",");
  // values = values.substring(0, values.length - 2);

  // let insertQuery = `INSERT (${stringFields}) VALUES(${values})`;
  //console.log("insertQuery: ", insertQuery);
  // return insertQuery;
  //console.log("recordFieldsSolved final : ",recordFieldsSolved)
  console.log("keys: ", keys)
  return recordFieldsSolved
}

begin()