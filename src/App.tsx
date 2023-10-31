import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
import Page from './page';
import { useState,useEffect } from 'react'; 
import Login from './login.tsx'
import ContactUs from './Home/contact.tsx';
import SignUP from './sinup.tsx';
import AboutCar from './Home/about_cars.tsx';
import Feeds from './feeds.tsx';
const user={
  username:"",
  name:"",
  email:"",
  number:"",
  password:"",
  logInType:""
}

function App(){
const [loginData,setlogin]=useState(user)
const [page,setPage]=useState("page")

let pag
switch(page){
case "login" :pag=<Login
loginData={loginData}
setlogin={setlogin}
setPage={setPage}/>
break
case "signup" :pag=<SignUP
setPage={setPage}
/>
break
case "page":pag=<Page loginData={loginData} setPage={setPage}/>//<Feeds loginData={loginData}/> 
break
case "feeds":pag=<Feeds
  loginData={loginData}
  setPage={setPage}
/>
}
  return pag
  }
export default App;



