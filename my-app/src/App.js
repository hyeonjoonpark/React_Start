import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/List";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;

// react 에서는 className="" (class="" 아님)을 사용
// <Link></Link> 나중에 a 태그로 변경됨
// Routes 를 구성하여 브라우저 PATH가 바뀔 때 마다 어떤 컴퍼넌트를 mapping해서 보여줄지 정함