const LocationInfoBox = ({ info }) => {
    console.log(info);
    return (
        <div className="location-info">
            <h2>Flooded Location</h2>
            <h4>{info}</h4>
        </div>
    )
}

export default LocationInfoBox;