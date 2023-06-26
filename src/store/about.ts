import { Store } from "../core/jieun";

interface State{
  photo:string
  name:string
  email:string
  blog:string
  github:string
  repository:string
}
export default new Store<State>({
  photo:'https://heropy.blog/css/images/logo.png',
  name:'JIEUN/JIEUN BIN',
  email:'bje0416@naver.com',
  blog:'https://velog.io/@bje0416',
  github:'https://github.com/jieunbin95',
  repository:'https://github.com/jieunbin95/movie'
})