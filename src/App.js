import { useState, useEffect } from 'react'
import './App.css';

import Modal from './component/modal/Modal'
import { IconContext } from "react-icons"
import { MdDehaze, MdPhotoCamera } from "react-icons/md"

const color = '#169196'

function App() {
  let key = 0
  const [toggle, setToggle] = useState(false)
  const [option, setOption] = useState(1)
  const array = Array(8).fill('')
  const handleClick = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    if(toggle) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "visible"
  }, [toggle])
  return (
    <>
      <header>
        <div className="container header-flex">
          <nav>
            <IconContext.Provider value={{ size: "22px", color: color }}>
              <MdDehaze />
            </IconContext.Provider>
          </nav>
          <div className="background-color">
            <IconContext.Provider value={{ size: "22px", color: "#fff" }}>
              <MdPhotoCamera />
            </IconContext.Provider>
          </div>
        <ul className="color-green">
          <li className={option === 1 && 'outlined'} onClick={() => setOption(1)}>Opción 1</li>
          <li className={option === 2 && 'outlined'} onClick={() => setOption(2)}>Opción 2</li>
        </ul>
        </div>
      </header>

      <main className="container">
        <section className="hero-image">
          <div className="background-color">
            <IconContext.Provider value={{ size: "60px", color: "#fff" }}>
              <MdPhotoCamera />
            </IconContext.Provider>
          </div>
        </section>
        <section className="hero-action">
          <div>
            <h2>{option === 1 ? 'Opción 1' : 'Opción 2'}</h2>
            <h1 className="color-green">Bienvenido a Coca Cola</h1>
            <p className="color-green">Si quieres ser cliente Registrate aquí y te asesoramos</p>
            <button onClick={handleClick} className="background-color">CLIENTE NUEVO</button>
            <Modal option={option} toggle={toggle} onClick={handleClick} />
          </div>
        </section>
      </main>

      <section className="description">
        <div>
          <IconContext.Provider value={{ size: "60px", color: color }}>
            <MdPhotoCamera />
          </IconContext.Provider>
          <h3>Regístrate</h3>
          <p>Rápido, fácil y seguro Completa el formulario y te contactaremos para finalizar tu pedido a WhatsApp.</p>
        </div>
        <div>
          <IconContext.Provider value={{ size: "60px", color: color }}>
            <MdPhotoCamera />
          </IconContext.Provider>
          <h3>Regístrate</h3>
          <p>Rápido, fácil y seguro Completa el formulario y te contactaremos para finalizar tu pedido a WhatsApp.</p>
        </div>
        <div>
          <IconContext.Provider value={{ size: "60px", color: color }}>
            <MdPhotoCamera />
          </IconContext.Provider>
          <h3>Regístrate</h3>
          <p>Rápido, fácil y seguro Completa el formulario y te contactaremos para finalizar tu pedido a WhatsApp.</p>
        </div>
      </section>

      <section className="products">
        <h1 className="color-green">Nuestros productos</h1>
        <ul>
          {
            array.map(() => (
              <li key={key += 1}>
                <IconContext.Provider value={{ size: "60px", color: color }}>
                  <MdPhotoCamera />
                </IconContext.Provider>
              </li>
            ))
          }
        </ul>
      </section>

      <article className="whatsapp">
        <div className="container whatsapp-flex">
          <section className="whatsapp-image">
            <IconContext.Provider value={{ size: "60px", color: color }}>
              <MdPhotoCamera />
            </IconContext.Provider>
          </section>
          <section className="whatsapp-description">
            <h1 className="color-green">TAMBIÉN PUEDES REGISTRARTE A TRAVÉS DE WHATSAPP</h1>
            <button className="background-color">ENVIAR</button>
          </section>
        </div>
      </article>

      <footer className="background-color">
        <div className="container footer-container">
          <p>© 2020 Lorem ipsum dolor sit</p>
          <div></div>
        </div>
      </footer>
    </>
  );
}

export default App;
