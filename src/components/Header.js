import React from 'react'

export default function Header({setDarkMode}) {
    
  return (
    <div className='header' >
        <h1>React Notes WebApp</h1>
        <input className="switch" type="checkbox" onClick={()=>setDarkMode((previousState)=>!previousState)}/>
    </div>
  )
}
