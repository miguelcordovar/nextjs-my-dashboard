'use client'

import React, { useState } from 'react'

interface Props {
  value?: number;
}

export const ShoppingCart = ({value = 0} : Props) => {

  const [Counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl"> { Counter } </span>

      <div className="flex">
        <button onClick={() => setCounter(Counter + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" >
          +1
        </button>
        <button onClick={() => setCounter(Counter - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" >
          -1
        </button>
      </div>
    </>

  )
}

