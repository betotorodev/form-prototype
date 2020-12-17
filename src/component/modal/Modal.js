import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

//components
import { FirstModal } from './components/firstModal'
import { SecondModal } from './components/secondModal'

//css
import './modal.css'

const Modal = ({ toggle, onClick }) => {
  const [nextModal, setNextModal] = useState(1)
  const [disabled, setDisabled] = useState(true)

  const handleClickModal = (e) => {
    e.preventDefault()
    setNextModal(2)
    console.log('object')
  }
  const getItem = () => window.localStorage.getItem('isNotDisabled')

  useEffect(() => {
    if(getItem() !== null) window.localStorage.removeItem('isNotDisabled')
    setDisabled(getItem() === null ? true : false)
  }, [])

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
              {
                nextModal === 1
                  ? <FirstModal handleClickModal={handleClickModal} />
                  : <SecondModal handleClickModal={handleClickModal} />
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
