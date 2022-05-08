/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScript 基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// array 配列

// 数値
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// 文字列
let str1: Array<string> = ["男性", "女性", "その他"];
let str2: string[] = ["男性", "女性", "その他"];

// tuple それぞれの要素の順番を指定する
let tuple: [number, string] = [0, "A"];

// any どんな型を入れてもエラーにならない 型が不透明になりやすいので開発で使うのはおすすめしない
let any1: any = false;

// void 何も返却値がないことを表す型
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "A" };
