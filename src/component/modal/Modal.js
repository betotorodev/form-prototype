import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from "react-icons"
import { MdKeyboardBackspace, MdClear } from "react-icons/md"

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'

//css
import './modal.css'

const Modal = ({ toggle, onClick, modal }) => {
  const [nextModal, setNextModal] = useState(1)

  const handleClickModal = (e) => {
    e.preventDefault()
    setNextModal(2)
    console.log(nextModal)
  }

  const handleSecondModal = (e) => {
    e.preventDefault()
    setNextModal(1)
    onClick()
  }

  useEffect(() => {
    console.log(nextModal)
  }, [nextModal])

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
            <button onClick={onClick} className="btn Modal__close-button">
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
                nextModal === 1
                  ? <FirstModal handleClickModal={handleClickModal} />
                  : <SecondModal handleClickSecondModal={handleSecondModal} />
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
