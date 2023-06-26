import fetch from "node-fetch"
import {VercelRequest, VercelResponse} from '@vercel/node'
//node에서는 fetch지원이 되지 않기 때문에 npm의 fetch패키지를 설치해 가지고 왔다
//터미널 npm i node-fetch@

const {APIKEY} = process.env

export default async function handler(request:VercelRequest, response:VercelResponse) {
  const { title, page, id } = JSON.parse(request.body as string)
  const url = id
   ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
   : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response.status(200).json(json)
}


// 서버리스 함수-컴퓨터 서버를 직접 구축이나 관리하지 않고도 
//그 기능을 함수 단위로 작성해서 바로 사용할 수 있는 
//하나의 기능이자 서비스
