import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from "react-icons"
import { MdKeyboardBackspace, MdClear } from "react-icons/md"

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'
import { ThirdModal } from './components/ThirdModal'

//css
import './modal.css'

const Modal = ({ toggle, onClick, option }) => {
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

  const handleThirdModal = (e) => {
    e.preventDefault()
    setNextModal(1)
    onClick()
  }

  const handleCloseClick = (e) => {
    e.preventDefault()
    setNextModal(1)
    onClick()
  }

  return ReactDOM.createPortal(
    <>
      {
        toggle ?
        <div className="Modal">
          <div className="Modal__container">
            {
              nextModal !== 1 &&
                <button className="btn Modal__back-button" onClick={() => setNextModal(1)}>
                  <IconContext.Provider value={{ size: "22px", color: "#169196" }}>
                    <MdKeyboardBackspace />
                  </IconContext.Provider>
                </button>
            }
            <button onClick={handleCloseClick} className="btn Modal__close-button">
              <IconContext.Provider value={{ size: "22px", color: "#169196" }}>
                <MdClear />
              </IconContext.Provider>
            </button>
            <form>
              <div className="form-title">
                <h2>Cliente nuevo</h2>
                <p>Pronto llegará Coca-Cola a tu negocio</p>
              </div>
              {
                option === 1
                  ? (
                    nextModal === 1
                      ? <FirstModal handleClickModal={handleClickModal} />
                      : <SecondModal handleClickSecondModal={handleSecondModal} />
                  )
                  : (
                    nextModal === 1
                      ? <FirstModal handleClickModal={handleClickModal} />
                      : <ThirdModal handleThirdModal={handleThirdModal} />
                  )
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
