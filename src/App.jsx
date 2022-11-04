import { use, Suspense } from 'react'
import './App.css'

const getCoord = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  })
})


const Geolocation = () => {
  const data = use(getCoord)

  return <div>{JSON.stringify(data)}</div>
}


function App() {
  return (
    <div className="App">
      <p>Hola</p>
      <Suspense>
        <Geolocation />
      </Suspense>
    </div>
  )
}

export default App
