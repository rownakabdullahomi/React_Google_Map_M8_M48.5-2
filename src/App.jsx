import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {

  return (
    <>

      <h1>React Google Map</h1>
      <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 23.6850, lng: 90.3563}}
      defaultZoom={7}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />

    </>
  )
}

export default App
