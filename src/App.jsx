import { Fragment, useEffect, useState } from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Weather from './Components/Weather'
import Error from './Components/Error'


function App() {
  
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
   })

   const {ciudad, pais} = search
   const [consult, setConsult] = useState(false) 
   const [weather, setWeather] = useState({})
   

   useEffect(() => {

    if(consult){
      const Apikey = "a78583c0fbec04a39623e8ecd8e244f8" 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${Apikey}`
      const checkWeather = async () => {
        const consult = await fetch(url)
        const res = await consult.json()
        
        setWeather(res)
        setConsult(false)
      } 
      checkWeather()
    }

  

    
   },[consult])

   let component;

   if(weather.cod == "404"){
    component = <Error mensaje="ciudad no econtrada"/>
   } else{
    component =  <Weather weather={weather} />
   }

  return (
    <Fragment>
      <Header titulo="React Clima"/>
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
              search={search}
              setSearch={setSearch}
              setConsult={setConsult}
              />
            </div>
            <div className='col m6 s12'>
               {component}
            </div>
          </div>
          

        </div>
      </div>
    </Fragment>
  )
}

export default App
