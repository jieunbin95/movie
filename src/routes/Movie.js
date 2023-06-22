import { Component } from "../core/jieun";
import movieStore, { getMovieDetails } from '../store/movie'

export default class Movie extends Component {
  async render() {
    this.el.classList.add('containter', 'the-movie')
    this.el.innerHTML =/*html*/`
     <div class="poster skeleton"></div>
     <div class="specs">
       <div class="title skeleton"></div>
       <div class="labels skeleton"></div>
       <div class="plot skeleton"></div>
     </div>
    `
    
    await getMovieDetails(history.state.id)
    //jieun.js 라우터 1)에 만들어놓은 함수를 이용해 필요한 id값을 연결
    //콘솔창에 history를 입력하면 id값이 나오는것을 확인 할 수 있다
    console.log(movieStore.state.movie)
    const { movie } = movieStore.state
    //포스터의 해상도를 높이기 위해 사용
    const bigPoster = movie.Poster.replace('SX300', 'SX700')

    //영화 포스터를 누르면 나오는 상세내용을 출력
    this.el.innerHTML =/*HTML*/`
     <div style="background-image:url(${bigPoster})" class="poster"></div>
     <div class="specs">
      <div class='title'>
        ${movie.Title}
      </div>
      <div class="labels">  
        <span>${movie.Released}</span>
          &nbsp;/&nbsp;        <!-- &nbsp 2번 띄어쓰기한 효과 -->
        <span>${movie.Runtime}</span>
         &nbsp;/&nbsp;
        <span>${movie.Country}</span>
      </div>
      <div class="plot">
        ${movie.Plot}
      </div>
      <div>
        <h3>Ratings</h3>
        ${movie.Ratings.map(rating => {
      return `<p>${rating.Source}-${rating.Value}</p>`
    }).join('')}
      </div>
      <div>
        <h3>Actors</h3>
        <p>${movie.Actors}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>${movie.Director}</p>
      </div>
      <div>
        <h3>Production</h3>
        <p>${movie.Production}</p>
      </div>
      <div>
        <h3>Genre</h3>
        <p>${movie.Genre}</p>
      </div>
     </div>
    `
  }
}
