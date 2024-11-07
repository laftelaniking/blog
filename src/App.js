import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '청량리 우동 맛집';  //값을 바꿨을 때 새로고침을 일일이 해줘야 함 페이지 전체가 새로고침 됨
  let [title, b] = useState(['여자 코트 추천', '남자 코트 추천', '침착맨 코트 추천'])     //b는 state 변경을 도와주는 함수
  let [likes, inc] = useState(0)
  //() => {}    fuction 키워드 
  // alert(useState('여자 코트 추천', '남자 코트 추천', '침착맨 코트 추천'))
  //distructuring 문법 
  // useState()함수는 비동기적이다
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className='list'>
         <h4> {title[0]} <span onClick={()=>{inc(likes+1)}}>👍</span> {likes} </h4>   {/* 데이터 바인딩 */}
         <p>2월 17일 발행</p>
      </div>   
      <div className='list'>
         <h4> {title[1]} </h4>   
         <p>2월 17일 발행</p>
      </div>
      <div className='list'>
         <h4> {title[2]} </h4>   
         <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
