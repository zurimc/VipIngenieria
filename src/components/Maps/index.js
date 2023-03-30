import { useState } from "react";
import MarcadorImgDR from "assets/img/flags/MX.png";
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// reactstrap components
import {
    Row,
    Col
  } from "reactstrap";

const minZoom = 3;
const maxZoom = 15;

// NOTE Se inicilizan los valores del mapa
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGVzYXJyb2xsbzMiLCJhIjoiY2xmdnBsbWs5MDU3YTNsbGJ6cHBraDk1ZCJ9.K-K1AacutccCzilmbnP2AQ",
  dragRotate: false,
  renderWorldCopies: false,
  minZoom,
  maxZoom
});

// NOTE Componente que renderiza el mapa
export const Maps = ({ width="750px", height="130vh", zoom=4, marcadores=[], 
  limites=[
    [-195.42280614436245, -23.55835417986378], // Southwest coordinates
    [-88.2353081734933, 35.60871407769408] // Northeast coordinates
  ] 
}) => {
  
  const [showPop, setShowPop] = useState(false);
  const [popUpMaker, setPopUpMarker] = useState({});

  return (
    <>
    <div>
        <Row>
            <Col >
                <Map style="mapbox://styles/mapbox/streets-v9" zoom={[zoom]} maxBounds={limites} containerStyle={{ width, height }}>
        {
            marcadores.map((office, index) => (
            <Marker key={index} style={{ cursor: "pointer" }} coordinates={office.ubi} anchor="bottom" onClick={() => {
                setPopUpMarker(office);
                setShowPop(true);
            }}>
                <img src={MarcadorImgDR} alt="Marcador"  width="30px" />
            </Marker>
            ))
        }
        {
            showPop &&
            <Popup coordinates={popUpMaker.ubi}
                offset={{
                'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <div style={{ display: "grid" }}>
                    <button style={{ width: "15px", justifySelf: "end" }} onClick={() => setShowPop(false)}>x</button>
                </div>
                <h3>{popUpMaker.title}</h3>
                <div>{popUpMaker.description}</div>
            </Popup>
        }
                </Map> 
            </Col>
        </Row>
    </div>
    
    </> 
  );
};
