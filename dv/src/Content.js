import React from 'react'
import './Content.css';

const Content = () => {
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
      }

  return ( 
    
    <main>
    <p class='p'>Name : {changeName()}</p>
    <button onClick={click}>Click here</button>

    {/* for passing parameter - use annonymous fuction */}
    <button onDoubleClick={() => click1("DV")}>Double click</button>

    </main>
  )
}

export default Content