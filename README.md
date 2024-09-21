# Validationのメモ&サンプルとして残しているやつ
使ってるのは次の通り
```shell
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-hook-form
npm install yup
npm install @hookform/resolvers
npm install axios
```

# 進める前に
chakra-uiを動かすために、layout.tsxでは、`<ChakraProvider>`を実装してます。

目がまぶしい場合は、layoutのbodyのclassNameに`bg-gray-800`を記述しましょう。

# 準備運動
- (簡単なフォーム)[./docs/firstform.md]
- (カスタムバリデーション)[./docs/customValidation.md]

# 非同期バリデーション
- (APIの実装)[./docs/api.md]
- (非同期バリデーション)[./docs/asyncValidation.md]

