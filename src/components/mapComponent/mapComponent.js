import React , {useState , useEffect} from 'react';
import { useMap, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import pointerImg from '../../assets/images/icon-location.svg';
import Leaflet from 'leaflet';


const MapComponent = ({coordinates , ipInfos}) => {
    // store the coordinates . 
    const [cordinates, setCordinates] = useState([coordinates[0], coordinates[1]]);

    // CUSTOM MARKER CONFIG
    let customMarker = Leaflet.icon({
		iconUrl: pointerImg,
		iconSize: [25, 30], 
		shadowSize: [50, 64], 
		iconAnchor: [22, 94], 
		shadowAnchor: [4, 62], 
		popupAnchor: [-3, -76], 
	});

    const MovePointer = () => {
		const map = useMap();
        if(Object.keys(ipInfos).length>0){  
            map.flyTo(new Leaflet.LatLng(ipInfos?.location?.lat, [ipInfos?.location?.lng]), 13);
        }		
        console.log("move to pointer function")
		return null;
	};

    useEffect(() => {     

        if(Object.keys(ipInfos).length>0){   
            setCordinates([ipInfos?.location?.lat, ipInfos?.location?.lng]);
        }
        
	}, [ipInfos]);

    // if(!cordinates || cordinates?.length >0) [51.505, -0.09]
    return (        
        <MapContainer center={cordinates} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MovePointer />
            <Marker position={cordinates} icon={customMarker}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent;
