# 설명

## getting started

- npm start

## pdf 이외로 추가로 사용한 library

- createReactApp
- concurrently
- sequelize
- axios
- eslint
- prettier

## 동작 방식

- 웹 패킷 전달
  app.js ->
  axios ->
  server.js ->
  router/index.js ->
  controllers.js(sequelize를 이용해 post와 get을 js로 정의)
- write 버튼을 누르자마자 최신화가 되도록 useEffect 사용
