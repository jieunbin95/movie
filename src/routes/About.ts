import { Component } from "../core/jieun";
import aboutStore from '../store/about'

export default class About extends Component{
  render(){
    const{photo,name,email,github,blog}=aboutStore.state

    this.el.classList.add('container','about')
    this.el.innerHTML=/*HTML*/`
      <div style="background-image:url(${photo})" class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="https://www.naver.com/" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${blog}" target="_blank">Blog</a></p>    
    `
  }
}