
import { useState } from "react";
import React, { useEffect } from "react";
import Login from "./Login";
import Home from "./Home";



export default function App (){
      const[isLoggedIn, setisloggedIn]=useState(false);
      const[addUser, setAddUser]=useState("");
      const[addPassword,setAddPassword]=useState("");
      const [createdName, setCreatedName]=useState([])

      const secretValue='rohitsharma1@gmail.com'
      const secretPassword='1234'
      // useEffect(()=>{
      //   console.log('1')
      //   const abc=localStorage.getItem('todo')
      //   if(abc){
      //     setCreatedName(JSON.parse(abc));
      //   }
      // },[])

      // useEffect(()=>{
      //   console.log('2')
      //   localStorage.setItem('todo', JSON.stringify(createdName))
      // },[createdName])
      
   
      function addUserName(user){
        setAddUser(user)
      }

      function addPasswordValue(usertwo){
          setAddPassword(usertwo)
      }


      function logIn(){
        if(secretValue==addUser && secretPassword==addPassword){
          setisloggedIn(true)
        }else if(addUser==''){
          alert('please fill userid')
        }else if(addPassword==''){
          alert('please add password')
        }else{
          alert('User ID is wrong')
        }
      }

      function logOut(){
        setisloggedIn(false)
       setAddUser("")
       setAddPassword("")
      }
      
return(
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,height:'100vh'}} >
  {!isLoggedIn ?(
    <Login logIn={logIn}
    addUserName={addUserName}
    addPasswordValue={addPasswordValue}
    createdName={createdName}
    setCreatedName={setCreatedName}/>
  ):(
    <Home logOut={logOut}/>
    )}
    </div>  
)
       
}






