const React = require('react');
import GoogleMap from 'google-map-react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Marker from './Marker';

const venues = require('json-loader!./bars.json')
const defaultProps = {
center: {lat: 51.463916, lng: -0.132635},
zoom: 15,
};
class App extends React.Component {
    render(){
        console.log(this.props);
        if (this.props.data.loading) {
              return (<div>Loading</div>)
            }

        const markers = this.props.data.allPlaces.map((venue)=> {
            return <Marker key={venue.name} {...venue}></Marker>
        })
        return <GoogleMap
                defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            {markers}
        </GoogleMap>;
    }
};

const PlaceQuery = gql`query allPosts {
  allPlaces {
    name
    description
    lat
    lng
    category
  }
}`

const AppWithData = graphql(PlaceQuery)(App);

module.exports = AppWithData;
