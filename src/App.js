import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl
} from 'react-leaflet';
import './App.css';

const osm ={url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            visible: true};



const google = {url:'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
            attribution: 'Google Satellite'
            }


export default function App() {
  return (
    <MapContainer center={[48.5538231,1.9302962]} zoom={13} scrollWheelZoom={true}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM">
          
          <TileLayer
            attribution={osm.attribution}
            url={osm.url}
            visible={osm.visible}

          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google">
          <TileLayer
            url={google.url}
            attribution= {google.attribution}
            subdomains={['mt1','mt2','mt3']}

          />
        </LayersControl.BaseLayer>

        
      </LayersControl>

      <Marker position={[48.5538231,1.9302962]}>
        <Popup>
          Péage: <br /> Saint-Arnoult
        </Popup>
      </Marker>

    </MapContainer>

  );
}