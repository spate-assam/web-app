import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import distance from 'distance-matrix-api';

import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const GoogleMap = ({ floodedLocations, center, zoom }) => {
    const google = window.google;
    const [locationInfo, setLocationInfo] = useState(null);
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);

    const markers = floodedLocations.map((f_loc, i) => {
        return <LocationMarker
            key={i}
            lat={f_loc.location.latitude}
            lng={f_loc.location.longitude}
            onClick={() => getAddress(f_loc.location.latitude, f_loc.location.longitude)}
        />
    });

    const getAddress = (lat, lng) => {
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(lat, lng);

        geocoder.geocode({
            'latLng': location
        }, (results, status) => {
            if (status === "OK") {
                if (results) {
                    setLocationInfo(results[1].formatted_address || results[0].formatted_address);
                } else {
                    window.alert("No results found");
                }
            } else {
                window.alert("Geocoder failed due to: " + status);
            }
        });
    }
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA7bN1ki27FuPWi-OaVnJZ1y5b7nTFhX_k' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

GoogleMap.defaultProps = {
    center: {
        lat: 26.5105954,
        lng: 90.6228871
    },
    zoom: 10
}

export default GoogleMap;