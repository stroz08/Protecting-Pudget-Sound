import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';

function RenderMap() {
    return (
        <div id='leaflet_container'>
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