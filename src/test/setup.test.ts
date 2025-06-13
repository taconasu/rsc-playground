import { describe, expect, test } from "vitest";

describe("example describe", () => {
  test("example test", async ({ annotate }) => {
    annotate("example test annotation", {
      contentType: "image/jpeg",
      path: "./public/spacecat.jpg",
    });
    annotate(`
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ,, -―-、
　　　　　　　　　　　　　　　　　　　　　　　　　　　　／　　　　 ヽ
　　　　　　　　　　　　　　　　　　　　　　／￣￣／　　／i⌒ヽ､|　　　　オエーー！！！！
　　　　　　　　　　　　　　　　　　　　　/　　（゜）/　　 ／　/
　　　　　　　　　　　　　　　　　　　　/　　　　 ト､.,../　,ー-､
　　　　　　　　　　　　　　　　　　=彳　　　　　 ＼＼‘ﾟ。､｀ ヽ。、ｏ
　　　　　　　　　　　　　　　　　　/ 　 　　　　　　　＼＼ﾟ。､。、ｏ
　　　　　　　　　　　　　　　　　/　　　　　　　　　/⌒ ヽ ヽU　　ｏ
　　　 　 　 　 　 　 　 　 ,. -^^ 　　　　　　 　 　|　　　　U　：l
　　　　　　　　　　　　／　　　　　　　　　　　　　 |　　　　　|：!
　　　　　　　 　 　 ／　　　　　　　　　　　 　 　.:/　　　　　Ｕ
　　　　 　　　/l｢}/　　　　　　　　　　　　　　::／
　　　　　　 　| l/　_ -―　　　　／　　:､＿／:}
　　　　　　　∠＿ー‐ ＿ -一' 　　 :::::::／::::/
　　　　　　　 　 ＼￣　　 　 　::::::::::::／}:/::/
　　　　　　　　　　 ＼　.:::::::::::::::::::／　/:／
　　　　　　　　　 　　/7￣￣￣｢|
　　　　　　　　　　　 }｜　　　　l !＿＿
　　　　　　　　　　　 |　＼　　　＼　ｰ-{
　　　　　　　　　　　 ヽ ＼_>　　 　｀¨´
　　　　　　　　　　　　 ｀¨´
    `);
    expect(100 * 0.05).toBe(6);
  });
});
