const objectToUrlEncoded = (obj: {
  [key: string]: any;
}) => {
  const encodedString = Object.keys(obj)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    .join('&');
  return encodedString;
};

export default objectToUrlEncoded;