import { useState } from "react"
import "./App.css"

const App = () => {
    const api = {
        key: "ae03ec6fad11e0bfbe6ed9af67242a74",
        base:"https://api.openweathermap.org/data/2.5/"
    }

    const [search,setSearch] = useState("")
    const [weather,setWeather] = useState({})

    function searchPress(){
        fetch(`${api.base}/weather?q=${search}&APPID=${api.key}&units=metric`)
        .then(res=>res.json())
        .then(data=> setWeather(data))

    }

return (
    <div className="App">
        <section className="Weather-App">
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={searchPress}>Search</button>
        {
            (typeof weather.main !== "undefined")?(
                <div className="Weather-data">
                    <p>{weather.name}</p>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].main}🌤️</p>
                    <p>{weather.weather[0].description}🌩️</p>

                </div>
            ):("")
        }
    </section>
    </div>
)
}

export default App
