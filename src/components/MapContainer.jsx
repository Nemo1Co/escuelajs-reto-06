import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component
{
  state = {
    show: false,
    latitude: 19.5943885,
    longitude: -97.9526044,
    locations: []                            
  }

  // Tomado de https://www.valentinog.com/blog/await-react/
  // Borrar estos comentarios antes de subir a master
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3000/locations');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ locations: json });
    }
    catch (error) {
      console.error(error);
    }
  }

  showMap = () => {
    this.setState({show: true})
    // Borrar este INFO y comentario
    console.info(this.state.locations);
  }

  mapCoordinates = () =>
  {
    this.setState({

    })
  }
  
  render()
  {
    const { google } = this.props;
    return (
      <div>
        {
          this.state.show && (
            <Map
              google={google}
              zoom={7}
              initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
            >
              <Marker
                position={{ lat: 19.4267261, lng: -99.1718706 }}
              />
              <Marker
                position={{ lat:  4.6560716, lng: -74.0595918 }}
              />
            </Map>
          )
        }
        <button onClick={this.showMap}>showMap</button>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
