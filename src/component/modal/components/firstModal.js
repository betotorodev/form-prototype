import React, {useState, useEffect} from 'react'

export const FirstModal = ({ handleClickModal }) => {
  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [document, setDocument] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleChangeName = e => setName(e.target.value)
  const handleChangeLastName = e => setLast(e.target.value)
  const handleChangeDocument = e => setDocument(e.target.value)
  const handleChangeEmail = e => setEmail(e.target.value)
  const handleChangeNumber = e => setNumber(e.target.value)

  useEffect(() => {
    if(!!name && !!last && !!document && !!email && !!number) {
      setDisabled(false)
    }
    else setDisabled(true)
  }, [name, last, document, email, number])

  return (
    <>
      <label className="label">Nombre*</label>
      <input onChange={handleChangeName} className="input" type="text"/>
      <label className="label">Apellido*</label>
      <input onChange={handleChangeLastName} className="input" type="text"/>
      <section>
        <div className="document">
          <label className="label">Tipo de documento*</label>
          <select name="Cédula">
            <option>Cédula</option>
            <option>Tarjeta de identidad</option>
            <option>Pasaporte de extranjería</option>
          </select>
        </div>
        <div className="document">
          <label className="label">Número de documento*</label>
          <input onChange={handleChangeDocument} className="input" type="text"/>
        </div>
      </section>
      <label className="label">Correo electrónico*</label>
      <input onChange={handleChangeEmail} className="input" type="email"/>
      <label className="label">Número telefónico*</label>
      <input onChange={handleChangeNumber} className="input" type="number"/>
      <button disabled={disabled} onClick={handleClickModal}>SIGUIENTE</button>
    </>
  )
}
