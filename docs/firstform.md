# 簡単なフォーム
## テンプレ
- `/app/firstform`を作成します
- `page.tsx`を作成します

## やりたいこと
- 名前を入れるだけのフォーム
- 送信ボタンを押すと、`console.log()`に出力を出す
- 名前を入れないと、バリデーションで「名前を入力してください！」と出す。

中身は(../src/app/firstform/page.tsx)[../src/app/firstform/page.tsx]の通りなので割愛

## エラー
```
Error: (0 , react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm) is not a function
```
このエラーが出た場合は、`"use client"`の書き忘れです。