import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup, SVGOverlay} from 'react-leaflet';
import { Link } from 'react-router-dom'

function RenderMap() {

    // Polygons representing estimated area of each marine area.

    const Area5 = [[48.152750, -123.826729],
                [48.266148, -123.826729],
                [48.398261, -124.394834],
                [48.280803, -124.394834],
                [48.160014, -124.112547]];

    const Area6 = [[48.402644, -122.644035],
                [48.219177, -122.756775],
                [48.141314, -122.763474],
                [48.086751, -122.807400],
                [47.969194, -122.838299],
                [48.157750, -123.826729],
                [48.266148, -123.826729],
                [48.240007, -123.679081],
                [48.224551, -123.541220],
                [48.284029, -123.248456],
                [48.293881, -122.992340],
                [48.321268, -122.843134]];

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

    const Area8 = [[48.402644, -122.644035],
                [48.219177, -122.756775],
                [48.176314, -122.621278],
                [48.006143, -122.545338],
                [47.923876, -122.364349],
                [47.833876, -122.201640],
                [47.973876, -122.171640],
                [48.399514, -122.421516]];
    
    const Area9 = [[47.969194, -122.838299],
                [48.086751, -122.807400],
                [48.141314, -122.763474],
                [48.219177, -122.756775],
                [48.176314, -122.621278],
                [48.006143, -122.545338],
                [47.923876, -122.364349],
                [47.833876, -122.201640],
                [47.810567, -122.353060],
                [47.810567, -122.590682],
                [47.853172, -122.612498],
                [47.867124, -122.637197],
                [47.934894, -122.735968]];

    const Area10 = [[47.810567, -122.353060],
                [47.810567, -122.603344],
                [47.745968, -122.674042],
                [47.520368, -122.746234],
                [47.515897, -122.505991],
                [47.515897, -122.392103],
                [47.591802, -122.322050],
                [47.649351, -122.387618],
                [47.810567, -122.353060]];

    const Area11 = [[47.515897, -122.392103],
                [47.515897, -122.505991],
                [47.316635, -122.640665],
                [47.275206, -122.558954],
                [47.258518, -122.536741],
                [47.230513, -122.351898],
                [47.348895, -122.267599]];

    const Area12 = [[47.853172, -122.612498],
                [47.867124, -122.637197],
                [47.918534, -122.880343],
                [47.348391, -123.227971],
                [47.295304, -123.074694],
                [47.429501, -122.797329],
                [47.665112, -122.731289]]

    const Area13 = [[47.258518, -122.536741],
                [47.275206, -122.558954],
                [47.316635, -122.640665],
                [47.368622, -122.622097],
                [47.413440, -122.623510],
                [47.407859, -122.832259],
                [47.189114, -123.230708],
                [46.958771, -122.850837],
                [47.157927, -122.563390]]

    return (
        <div id='leaflet_container'>
            <h1 className = 'top'>Marine Area Map of the Puget Sound</h1>
            <h3 className = 'description'>Click on a marine area to learn more</h3>
            <MapContainer center={[47.7237, -122.4713]} zoom={8} zoomControl={false} scrollWheelZoom={true} minZoom={8}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon color="grey" positions={Area5}>
                    <SVGOverlay bounds={[[48.332859, -124.303037], [48.228341, -124.095174]]}>
                        <text x="60%" y="90%" height="100%" width="100%" stroke="black" fontSize="20px">
                            5
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 5</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 5"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>
                </Polygon>
                <Polygon color="red" positions={Area6}>
                    <SVGOverlay bounds={[[48.234955, -123.345105], [48.132404, -123.034741]]}>
                        <text x="40%" y="80%" height="100%" width="100%" stroke="black" fontSize="20px">
                            6
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 6</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 6"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>
                </Polygon>
                <Polygon color="blue" positions={Area7}>
                    <SVGOverlay bounds={[[48.732469, -123.034362], [48.530982, -122.485045]]}>
                        <text x="40%" y="50%" height="100%" width="100%" stroke="black" fontSize="20px">
                            7
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 7</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 7"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>
                </Polygon>
                <Polygon color="purple" positions={Area8}>
                    <SVGOverlay bounds={[[48.269911, -122.578558], [48.160645, -122.377624]]}>
                        <text x="40%" y="80%" height="100%" width="100%" stroke="black" fontSize="20px">
                            8
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 8</p>
                        <p><Link to= '/Marine_Details' state = {{name:"Marine Area 8-1"}} activeclassname='activeLink'>Learn More about 8-1</Link></p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 8-2"}} activeclassname='activeLink'>Learn More about 8-2</Link>
                    </Popup>
                </Polygon>
                <Polygon color="magenta" positions={Area9}>
                    <SVGOverlay bounds={[[48.000631, -122.688047], [47.920208, -122.540234]]}>
                        <text x="40%" y="80%" height="100%" width="100%" stroke="black" fontSize="20px">
                            9
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 9</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 9"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup> 
                </Polygon>
                <Polygon color="orange" positions={Area10}>
                    <SVGOverlay bounds={[[47.702539, -122.566618], [47.636880, -122.404008]]}>
                        <text x="5%" y="80%" height="100%" width="100%" stroke="black" fontSize="20px">
                            10
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 10</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 10"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup> 
                </Polygon>
                <Polygon color="green" positions={Area11}>
                    <SVGOverlay bounds={[[47.425577, -122.493237], [47.344219, -122.363461]]}>
                        <text x="5%" y="80%" height="100%" width="100%" stroke="black" fontSize="20px">
                            11
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 11</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 11"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>  
                </Polygon>
                <Polygon color="navy" positions={Area12}>
                    <SVGOverlay bounds={[[47.635171, -123.023157], [47.571610, -122.828565]]}>
                        <text x="5%" y="90%" height="100%" width="100%" stroke="black" fontSize="20px">
                            12
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 12</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 12"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>  
                </Polygon>
                <Polygon color="maroon" positions={Area13}>
                    <SVGOverlay bounds={[[47.269373, -122.907119], [47.153276, -122.648816]]}>
                        <text x="5%" y="90%" height="100%" width="100%" stroke="black" fontSize="20px">
                            13
                        </text>
                    </SVGOverlay>
                    <Popup>
                        <p>Marine Area 13</p>
                        <Link to= '/Marine_Details' state = {{name:"Marine Area 13"}} activeclassname='activeLink'>Learn More</Link>
                    </Popup>  
                </Polygon>
            </MapContainer>
        </div>
    );
}

export { RenderMap };