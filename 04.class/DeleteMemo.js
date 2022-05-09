import { db } from "./memo.js";
import pkg from "enquirer";
const { Select } = pkg;

export default class DeleteMemo {
  constructor(choicesArray) {
    const prompt = new Select({
      name: "color",
      message: "Choose a note you want to delete",
      choices: choicesArray,
    });

    prompt
      .run()
      .then((answer) => {
        db.serialize(() => {
          db.run(`DELETE FROM memo WHERE info = '${answer}'`);
        });
        console.log(`We deleted ${answer}`);
      })
      .catch(console.error);
  }
}
