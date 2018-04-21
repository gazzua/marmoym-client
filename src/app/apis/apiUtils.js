export function getData(res) {
  return res.data;
}

export function createPayloadSelector(ErrorObj) {
  return (res) => {
    if (res.data.code !== 200000) {
      // throw new ErrorObj({
      //   code: res.data.code,
      //   msg: res.data.msg,
      // });
    }
    return res.data.payload;
  };
}
