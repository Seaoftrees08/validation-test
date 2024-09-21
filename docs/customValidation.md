# 世界一簡単なフォーム
## テンプレ
- `/app/firstform`をそのままapp直下にコピーします
- `page.tsx`の関数を`CustomValidation`とします

## やりたいこと
- 「おバカ」と入れると「おバカやと！？誰がバカや！」とバリデーションで怒られるようにする

中身は(../src/app/firstform/page.tsx)[../src/app/customValidation/page.tsx]の通りなので割愛  
ちなみに公式が一番詳しく書いてる上に正確です。  
cf. https://github.com/jquense/yup?tab=readme-ov-file#schematestname-string-message-string--function--any-test-function-schema