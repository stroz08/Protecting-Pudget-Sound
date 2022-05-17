import React from 'react';
import { MapContainer, TileLayer, Polygon} from 'react-leaflet';
import { database } from './Firebase.js'
import L from 'leaflet'

function RenderMap() {

    const Area7 = [[49.001946, -122.757969],
                [49.002083, -123.322260],
                [48.831273, -123.008549],
                [48.767084, -123.008547],
                [48.693991, -123.267889],
                [48.548712, -123.218933],
                [48.453558, -123.160009],
                [48.422826, -123.115124],
                [48.284029, -123.248456],
                [48.293881, -122.992340],
                [48.321268, -122.843134],
                [48.402644, -122.644035],
                [48.403622, -122.421516],
                [49.001946, -122.421516]];


    return (
        <div id='leaflet_container'>
            <h1 class = 'top-specie'>Map of Puget Sound</h1>
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
                <Polygon color="blue" positions={Area7}/>
            </MapContainer>
        </div>
    );
}

export { RenderMap };