import { useState, useEffect } from 'react'
import './App.css';

import Modal from './component/modal/Modal'
import { IconContext } from "react-icons";
import { MdDehaze, MdPhotoCamera } from "react-icons/md";

const color = '#169196'

function App() {
  let key = 0
  const [toggle, setToggle] = useState(false)
  const array = Array(8).fill('')
  const handleClick = () => {
    setToggle(!toggle)
  }
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
            <h1 className="color-green">Bienvenido a Coca Cola</h1>
            <p className="color-green">Si quieres ser cliente Registrate aquí y te asesoramos</p>
            <button onClick={handleClick} className="background-color">CLIENTE NUEVO</button>
            <Modal toggle={toggle} onClick={handleClick} />
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
          <section>
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
