## nodejs를 통한 api개발 방법


express1.js 에서 express 서버를 열고 특정 url로 접근을 할 경우 해당 파일 js로 연결을 한다. 

api->user index.js는 express1.js 에서 넘겨준 /users를 기본 '/'로 설정해서 내부에서 라우팅을 진행하고

해당 url에 맞는 컨트롤은 user.ctrl.js에서 상세 함수를 정의한다.

user.spec.js는 각 더미데이터같은 느낌을 넣어보면서 테스트하는 테스트 파일로 mocha user.spec.js로 테스트가 가능하다.

여기서는 packge.json에 npm test로 정의를 했다.
