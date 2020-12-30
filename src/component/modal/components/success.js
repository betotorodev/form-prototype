import React from 'react'

import { IconContext } from "react-icons"
import { MdCheckCircle } from "react-icons/md"

export const Success = () => {
  return (
    <div className="succes-container">
      <IconContext.Provider value={{ size: "107px", color: "#169196" }}>
        <MdCheckCircle />
      </IconContext.Provider>
      <h1>Registro realizado con éxito!</h1>
    </div>
  )
}
