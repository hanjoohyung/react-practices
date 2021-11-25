ex01: Property

<FoodList data={} />
01. props(property)
02. Food List > src/01 : 클래스 컴포넌트
03. Food List > src/02 : Data Flow(top -> down) : 클래스 컴포넌트
04. Food List > src/03 : Data Flow(top -> down) : 함수 컴포넌트
05. 클래스 컴포넌트 생성
06. Food List > src/04 : validation

설치:
# npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react 
# npm i react react-dom

설정:
babel > babel.config.json
webpack > webpack.config.js

package.json의 스크립트 추가하기
"scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
  }

환경 변수를 설정한 폴더 시작할 때

npm run debug src=01 > 01번 폴더를 실행 할때