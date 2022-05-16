import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { database } from './Firebase.js'

function RenderMap() {
    return (
        <div id='leaflet_container'>
            <h1 class = 'top'>Map of Puget Sound</h1>
            <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Select A Fish &#9660;</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </div>

            <MapContainer center={[47.7237, -122.4713]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export { RenderMap };