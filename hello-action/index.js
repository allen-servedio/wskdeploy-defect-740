function main(params) {
  return {
    payload: 'Hello, with ' + params.someData
  };
}

exports.main = main;
