import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const Strings = {
    en: {
        HELLO : "Hello"
    },
    it: {
        HELLO : "Ciao"
    }
}
const DisplayLanguage = () => {
  
    const language = useContext(LanguageContext)
    return (
          <h1>{Strings[language].HELLO}</h1>
             
  )
}

export default DisplayLanguage