const React = require('react');
import GoogleMap from 'google-map-react';
import Marker from './Marker';

const venues = require('json-loader!./bars.json')
const defaultProps = {
center: {lat: 51.463916, lng: -0.132635},
zoom: 15,
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
