export default (serverData) => {
  const localData = [];

  serverData.forEach((item) => {
    let question = {
      type: item.type,
      description: item.question,
      get params() {
        return [...item.answers].map((answer, index) => {
          return {
            type: answer.type,
            src: answer.image.url,
            index: index + 1
          };
        });
      }
    };
    localData.push(question);
  });
  return localData;
};
