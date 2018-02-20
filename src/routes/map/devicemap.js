import React, {PropTypes} from 'react'
import {connect} from 'dva'
import DeviceHistoryMap from './devicehistorymap'

function DeviceMap({devicemap, dispatch}) {
  const {
    deviceHistory
  } = devicemap

  return (
    <div>
      Gaus
      <DeviceHistoryMap deviceHistory={deviceHistory}/>
    </div>
  )
}

DeviceMap.propTypes = {
  deviceHistory: PropTypes.array
}

export default connect(({devicemap}) => ({devicemap}))(DeviceMap)
