import React from 'react'
import './DeviceComponent.css'
import DevicePort from '../DevicePort'
import m125pM from '../../public/sensor-ports/M12-5pM.png'
import m12kM from '../../public/sensor-ports/M12_K Male.png'
import m12kF from '../../public/sensor-ports/M12_K Female.png'
import m128pF from '../../public/sensor-ports/m12-8p Female.png'

/**
 *
 */
function DeviceComponent(props) {
    

    return <div className="device-outer-container">
        <div className="top-part">
            
        </div>
        <div className="upper-part">
            <DevicePort portNumber={1} portIcon={m125pM}/>
            <DevicePort portNumber={1} portIcon={m125pM} inverted />
            <DevicePort portNumber={2} portIcon={m128pF}/>
        </div>
        <div className="middle-part">
            <DevicePort portNumber={1} portIcon={m12kM} active />
            <DevicePort portNumber={2} portIcon={m12kF} inverted />
        </div>
        <div className="bottom-part">
            <DevicePort portNumber={1} portIcon={m125pM} device/>
            <DevicePort portNumber={2} portIcon={m125pM} inverted device/>
            <DevicePort portNumber={3} portIcon={m125pM}/>
            <DevicePort portNumber={4} portIcon={m125pM} inverted device/>
            <DevicePort portNumber={5} portIcon={m125pM}/>
            <DevicePort portNumber={6} portIcon={m125pM} inverted device/>
            <DevicePort portNumber={7} portIcon={m125pM}/>
            <DevicePort portNumber={8} portIcon={m125pM} inverted/>
        </div>
    </div>
}

export default DeviceComponent