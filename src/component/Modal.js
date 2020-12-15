import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

const Modal = ({ toggle, onClick }) => {
  return ReactDOM.createPortal(
    <>
      {
        toggle ?
        <div className="Modal">
          <div className="Modal__container">
            <button onClick={onClick} className="Modal__close-button">X</button>
            <form action="">
              <div className="form-title">
                <h2>Cliente nuevo</h2>
                <p>Pronto llegará Coca-Cola a tu negocio</p>
              </div>
              <label>Nombre*</label>
              <input type="text"/>
              <label>Apellido*</label>
              <input type="text"/>
              <section>
                <div>
                  <label>Tipo de documento*</label>
                  <select name="Cédula">
                    <option>Cédula</option>
                    <option>Tarjeta de identidad</option>
                    <option>Pasaporte de extranjería</option>
                  </select>
                </div>
                <div>
                  <label>Número de documento*</label>
                  <input type="text"/>
                </div>
              </section>
              <label>Correo electrónico*</label>
              <input type="email"/>
              <label>Número telefónico*</label>
              <input type="number"/>
              <button disabled>SIGUIENTE</button>
            </form>
          </div>
        </div>
        : null
      }
    </>,
    document.getElementById('modal')
  )
}

export default Modal
