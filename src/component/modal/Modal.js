import React from 'react'
import ReactDOM from 'react-dom'

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'

//css
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
              <SecondModal />
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
