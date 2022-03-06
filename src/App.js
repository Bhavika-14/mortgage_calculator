import React,{ useState } from "react"
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js'


function App() {
  let [m,setm]=useState(" ")
  let [q,setq]=useState(" ")

  let convert=(p,d,n,r)=>{
    p=p-d
    d=p
    r=r/1200
    n=n*12
    p=p*[(r*((1+r)**n))/(((1+r)**n)-1)]
    n=p
    p=d
    setm(p)
    setq(n)

  }
  return (
    <Form convert={convert} m={m} q={q} />
  );
}

export default App;
