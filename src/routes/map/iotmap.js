import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import superagent from 'superagent';
import {BASE_URL, CLIENT_ID} from '../../CommonMethods/api';

const style = {
  width: '100%',
  height: '100%'
}
const mapCenter = {
  lat: 28.59674855,
  lng: 77.32826332
}

export class IotMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      allDeviceData: []
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  componentWillMount() {
    superagent
    .get(this.props.all_device_api)
    .end((err, response) => {
      if (response !== undefined) {
        this.setState({allDeviceData: response.body.data})
      }
    })

  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const {
      lat,
      lng
    } = this.state.allDeviceData[0] || mapCenter
    return (
      <Map google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: lat,
            lng: lng }}
          onClick={this.onMapClicked}>
          {this.state.allDeviceData.map((device, index) => {
            return <Marker key={index} onClick={this.onMarkerClick}
              deviceType={device.deviceType}
              status={device.status}
              temp={device.temprature}
              position={{lat: device.lat, lng: device.lng}}
              icon={{
                url: "src/routes/map/"+device.deviceType+".png"
              }} />
          })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h5>{this.state.selectedPlace.deviceType}</h5>
              <div>Status: {this.state.selectedPlace.status}</div>
              <div>Temprature: {this.state.selectedPlace.temp}</div>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

IotMap.propTypes = {
  all_device_api: PropTypes.string
}
IotMap.defaultProps = {
  all_device_api: BASE_URL+"/allDeviceData?clientId="+CLIENT_ID
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfPJonsREY-XuLLfLPSlYjfihOhkmbaE0'
})(IotMap)
