import { useState  } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./app.css"

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
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
          <Room style={{ fontSize: viewport.zoom * 7, color:"slateblue" }}/>
        </Marker>
        <Popup
          latitude={48.858093}
          longitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Eiffell Tower. I like it.</h4>
            <label>Review</label>
            <p>Beautiful Place</p>
            <label>Rating</label>
            <div className="stars">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            </div>
            <label>Information</label>
            <span className="username">Created by <b>safak</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
        </ReactMapGL>
    </div>
  );
}

export default App;