import Memo from "./SpecificMemo.js";
import DeleteMemo from "./DeleteMemo.js";

import sqlite3 from "sqlite3";
export const db = new sqlite3.Database("./test1.db");

import readline from "readline";

if (process.argv[2] == "-r") {
  //listを読み取る
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS memo (info TEXT)");
    //見る
    db.all("SELECT rowid AS id, info From memo", (err, row) => {
      //objectの形を配列の形に変更
      const newArr = row.map((el) => el.info);
      const memo = new Memo(newArr);
    });
  });
} else if (process.argv[2] == "-d") {
  //listの中で選択したものを削除する
  db.serialize(() => {
    db.all("SELECT rowid AS id, info From memo", (err, row) => {
      const newArr = row.map((el) => el.info);
      const deleteMemo = new DeleteMemo(newArr);
    });
  });
} else {
  // echo input
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  reader.on("line", function (line) {
    // echo inputではない場合は受け取りまさん。
    if (line) {
      db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS memo (info TEXT)");

        const stmt = db.prepare("INSERT INTO memo VALUES (?)");
        stmt.run(`${line}`);
        stmt.finalize();
      });
      reader.close();
    }
  });
}
