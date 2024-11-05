import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '청량리 우동 맛집';
  let [title, b] = useState('남자 코트 추천')     //b는 state 변경을 도와주는 함수
  // alert(useState('남자코드추천'))
  //distructuring 문법 
  // useState()함수는 비동기적이다
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className='list'>
         <h4> {title} </h4>   {/* 데이터 바인딩 */}
         <p>2월 17일 발행</p>
      </div>   

    </div>
  );
}

export default App;
