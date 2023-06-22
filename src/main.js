import App from "./App";
//idex의 파일명을 가진경우 생략가능하다
import router from './routes'


const root=document.querySelector('#root')
root.append(new App().el)  //root id값에 생성자함수 app를 추가

router()