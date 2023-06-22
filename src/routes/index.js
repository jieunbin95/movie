import { createRouter } from "../core/jieun";
import Home from './Home'
import Movie from "./Movie";
import About from './About'
import NotFound from './NotFound'

//각각의 페이지를 이동할때 사용하는 함수 설정
export default createRouter([
  {path:'#/', component:Home},
  {path:'#/movie', component:Movie},
  {path:'#/about', component:About},
  {path:'.*', component:NotFound}
])

//jieun.js의 2)에서 find함수를 이용해 페이지이동을 하고있기 때문에
//오류 페이지를 맨 마지막에 입력해주어야 정상적으로 작동한다 