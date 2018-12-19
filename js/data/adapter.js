export default (serverData) => {
  const localData = [];

  serverData.forEach((item) => {
    const question = {
      type: item.type,
      description: item.question,
      get params() {
        return [...item.answers].map((answer, index) => {
          return {
            type: answer.type,
            src: answer.image.url,
            index: index + 1,
            width: answer.image.width,
            height: answer.image.height
          };
        });
      }
    };
    localData.push(question);
  });
  return localData;
};
