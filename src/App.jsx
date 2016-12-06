const React = require('react');
import GoogleMap from 'google-map-react';
import Marker from './Marker';

const venues = require('json-loader!./bars.json')
const defaultProps = {
center: {lat: 51.5074, lng: 0.1278},
zoom: 10,
};
class App extends React.Component {
    render(){
        console.log(venues);
        const markers = venues.map((venue)=> {
            return <Marker key={venue.name} {...venue}></Marker>
        })
        return <GoogleMap
                defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            {markers}
        </GoogleMap>;
    }
};

module.exports = App;
