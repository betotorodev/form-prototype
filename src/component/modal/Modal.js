import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from "react-icons"
import { MdKeyboardBackspace, MdClear } from "react-icons/md"

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'
import { Success } from './components/success'

//css
import './modal.css'

const Modal = ({ toggle, onClick, option }) => {
  const [nextModal, setNextModal] = useState(3)

  const handleClickModal = (e) => {
    e.preventDefault()
    setNextModal(2)
  }

  const handleSecondModal = (e) => {
    e.preventDefault()
    setNextModal(3)
    // onClick()
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
                nextModal === 1 && <FirstModal handleClickModal={handleClickModal} />
              }
              {
                nextModal === 2 && <SecondModal option={option} handleClickSecondModal={handleSecondModal} />
              }
              {
                nextModal === 3 && <Success />
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
