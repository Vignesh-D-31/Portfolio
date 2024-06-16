import React from 'react'
import './Content.css';
import { useState } from 'react';

const Content = () => {
        /*     
      //1

      function changeName(){
        var names=['DV','SID','MAHA']
        var i=Math.floor(Math.random()*3)
        return names[i]
      }


      const click=() =>{                //arrow function
        console.log("Nandriii")
      }

      const click1=(name) =>{                
        console.log(name)
      } */


      const [count,setCont]=useState(0)

      function add(){
        setCont(count+1) 
      }
      function sub(){
        setCont(count-1) 
      }


  return ( 
    
    <main>
        {/*

    //1
    <p class='p'>Name : {changeName()}</p>

    <button onClick={click}>Click here</button>

    // for passing parameter - use annonymous fuction
    <button onDoubleClick={() => click1("DV")}>Double click</button> */}

    <button onClick={add}>ADD</button>
    <span>{count}</span>
    <button onClick={sub}>SUB</button>
    </main>
  )
}

export default Content