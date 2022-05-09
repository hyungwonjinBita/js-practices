import pkg from "enquirer";
const { Select } = pkg;

export default class Memo {
  constructor(choicesArray) {
    const prompt = new Select({
      name: "color",
      message: "Choose a note you want to see",
      choices: choicesArray,
    });

    prompt
      .run()
      .then((answer) => console.log("Answer:", answer))
      .catch(console.error);
  }
}
