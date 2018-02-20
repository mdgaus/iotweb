import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import superagent from 'superagent';
import {BASE_URL, CLIENT_ID} from '../../CommonMethods/api';

const mapCenter = {
  lat: 28.59674855,
  lng: 77.32826332
}

export class DeviceHistoryMap extends Component {
  render() {
    console.log("deviceHistory",this.props.deviceHistory)
    const {
      lat,
      lng
    } = mapCenter
    return (
      <Map google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: lat,
            lng: lng }}
        >
      </Map>
    )
  }
}

DeviceHistoryMap.propTypes = {
  all_device_api: PropTypes.string
}
DeviceHistoryMap.defaultProps = {
  all_device_api: BASE_URL+"/allDeviceData?clientId="+CLIENT_ID
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfPJonsREY-XuLLfLPSlYjfihOhkmbaE0'
})(DeviceHistoryMap)
