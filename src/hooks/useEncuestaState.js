import useState from 'react'

export default initialEncuesta => {
  const [respuesta, setRespuesta] = useState(initialEncuesta)

  return {
      respuesta,
      selectOption: opcion => {
          
          setRespuesta(opcion)
      }
  }
}