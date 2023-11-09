
"use client"
import { useState } from 'react'
import React from 'react'


 function HomePage() {

  const [prompt, setPrompt] = useState('')

  const onSubmit = e =>{
      e.preventDefault() // se actuliza el formulario
      console.log(prompt)
  }

  return (
    //onSubmit -> cunado envie
    <div>KRAKATOA
      <form onSubmit={onSubmit}> 
        <input type='text'
          onChange={e => setPrompt(e.target.value)}

          />
        <button>
          GENERATE
        </button>
       
      </form>

    </div>
  )
}
export default HomePage