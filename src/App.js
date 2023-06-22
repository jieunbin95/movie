import { Component } from "./core/jieun"; 
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component{
  render(){
    const theheader=new TheHeader().el
    const routerView=document.createElement('router-view')
      //routerview 요소를 만들어 main.js와 연결해 id값(root)의 자식요소로 넣어준다
    const thefooter=new TheFooter().el
    
      this.el.append(
      theheader,
      routerView,
      thefooter)
  }
}