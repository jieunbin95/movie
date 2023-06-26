import { Component } from "../core/jieun"; 
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";


export default class Home extends Component{
  render(){
    const headline=new Headline().el
    const search=new Search().el
    const movieList=new MovieList().el
    const movielistMore=new MovieListMore().el

    this.el.classList.add('container')     //routerview(App.js)요소 안의 자식요소로 container생성
    this.el.append(
      headline,
      search,
      movieList,
      movielistMore
    )
  }
}