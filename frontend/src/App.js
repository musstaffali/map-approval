import { useState  } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import { Room } from "@material-ui/icons";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2
  });
  return (
    <div className="App">
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >

        <Marker
        latitude={48.858093}
        longitude={2.294694}
        offsetLeft={-20}
        offsetTop={-10}
        >
          <div>You are here</div>
        </Marker>
        </ReactMapGL>
    </div>
  );
}

export default App;