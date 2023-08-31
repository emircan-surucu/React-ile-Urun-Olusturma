//Buton oluşturma

import React from 'react'

//onClick ve btnText propları alır
const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full h-10 bg-indigo-600 text-wihte flex items-center justify-center mt-4 rounded-md' onClick={onClick}>{btnText}</button>
  )
}

export default Button