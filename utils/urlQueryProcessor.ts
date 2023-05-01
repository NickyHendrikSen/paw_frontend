import { ParsedUrlQuery } from "querystring";

const urlQueryProcessor = (
  type: "add" | "remove" | "change",
  paramName: string,
  value: string,
  query: ParsedUrlQuery,
) => {
  if(type == "change") {
    query[paramName] = value.toString();
  }
  else if(type == "add") {
    const list = query[paramName]?.toString().split(",");
    if(!list?.find(x => x == value)) {
      list?.push(value)
      query[paramName] = list?.join(',')
    }
  }
  else if(type == "remove") {
    const list = query[paramName]?.toString().split(",");
    if(list?.find(x => x == value)) {
      list?.splice(list.findIndex(x => x == value), 1);
      query[paramName] = list?.join(',')
    }
  }
  return query;
};

export default urlQueryProcessor;