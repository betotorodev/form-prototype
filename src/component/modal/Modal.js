import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'

//css
import './modal.css'

const Modal = ({ toggle, onClick, modal }) => {
  // const [nextModal, setNextModal] = useState(modal)
  const [nextModal, setNextModal] = useState(2)

  const handleClickModal = (e) => {
    e.preventDefault()
    setNextModal(2)
  }

  const handleSecondModal = (e) => {
    e.preventDefault()
    setNextModal(1)
    onClick()
  }

  useEffect(() => {
  console.log("🚀 ~ file: Modal.js ~ line 13 ~ Modal ~ nextModal", nextModal)
  }, [nextModal])

  return ReactDOM.createPortal(
    <>
      {
        toggle ?
        <div className="Modal">
          <div className="Modal__container">
            <button onClick={onClick} className="Modal__close-button">X</button>
            <form>
              <div className="form-title">
                <h2>Cliente nuevo</h2>
                <p>Pronto llegará Coca-Cola a tu negocio</p>
              </div>
              {
                nextModal === 1
                  ? <FirstModal handleClickModal={handleClickModal} />
                  : <SecondModal conClick={onClick} handleClickModal={handleSecondModal} />
              }
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
