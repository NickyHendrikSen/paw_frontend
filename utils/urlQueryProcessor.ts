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
    if(list && !list?.find(x => x == value) && list[0].toString() !== "") {
      list?.push(value)
      query[paramName] = list?.join(',')
    }
    else {
      query[paramName] = value
    }
  }
  else if(type == "remove") {
    const list = query[paramName]?.toString().split(",");
    if(list?.find(x => x == value)) {
      list?.splice(list.findIndex(x => x == value), 1);
      if(list.length == 0) {
        delete query[paramName];
      }
      else {
        query[paramName] = list?.join(',')
      }
      console.log(query);
    }
  }
  return query;
};

export default urlQueryProcessor;