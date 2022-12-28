import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

// react 에서는 className="" 을 사용
// <Link></Link> 나중에 a 태그로 변경됨
// Routes 를 구성하여 브라우저 PATH가 바뀔 때 마다 어떤 컴퍼넌트를 mapping해서 보여줄지 정함