# Tips
###1. 구구단 게임 참고
- react, react-dom 은 타입이 없다.. 그래서 커뮤니티에서 만든 @types/react, @types/react-dom 을 사용한다.
- npx webpack 또는 npm run dev 설정을 해뒀으니 두가지 명령어중 하나 쓰면됨.
- jsx 를 쓰려면 꼭 import * as react from 'react'; 구문이 필요하다.
- webpack-dev-server 명령어가 webpack-cli 4버전 이상부터는 명령어가 "webpack server" 로 변경됨...
###2. 숫자야구게임 참고
- 타입스크립트에서 제너릭은 수동으로 타입을 명시해주는 행위이다.
- useState([]) 처럼 배열인 경우에는 타입을 명시해줘야한다.
```javascript
useState<TryInfo[]>([]) // TryInfo 는 interface 로 정의
```
###3. 반응속도 체크
- setTimeout 은 window 와 node 용 두개가 존재한다.
- useRef 에 setTimeout 을 담으려면 useRef<number | null> 를 사용해야 한다.  
  useRef 에는 오버로딩이 가능한데, 기본은 Mutable 이기 때문이다.
###4. 가위바위보
- useEffect 에는 타이핑 할게 없다.
- 고차함수에 타이핑 하는 방법
- typeof 와 keyof 사용법
  