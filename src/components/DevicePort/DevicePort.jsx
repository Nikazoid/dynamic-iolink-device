import React from 'react'
import './DevicePort.css'
import img1 from '../../public/devices/img1.png'
/**
 *
 */
function DevicePort(props) {
    const { device, portNumber, inverted, portIcon } = props

    return (
        <div className='device-port'>
            {
                device 
                ? (
                    <>
                    <div className="device-port-line" style={ inverted ? { right: '-150px' } : { left: '-150px' }}></div>
                    <div className="device-port-connector" style={ inverted ? { right: '-30px' } : { left: '-30px' }}></div>
                    <div className="device-box" style={ inverted ? { left: '260px' } : { right: '260px' }}>
                        <div className="device-box-connector" style={ inverted ? { left: '-10px' } : { right: '-10px' }}></div>
                        <img src={img1} alt=""/>
                        <span>Device InfoSICK-WTB12C-3</span>
                    </div>
                    </>
                )
                : ''
            }

            <div className="port-top">
                <div className="portImage">
                    <img src={portIcon} alt="port00"/>
                </div>
                <div className="ledContainer" style={ inverted ? { order: -1 } : { order: 0 } }>
                    <div className="led1">
                        <div className="circle" style={ device ? { background: 'green' } : { background: 'gray' }}></div>
                        <span className="circle-label">A</span>
                    </div>
                    <div className="led2">
                        <div className="circle" style={ device ? { background: 'red' } : { background: 'gray' }}></div>
                        <span className="circle-label">B</span>
                    </div>
                </div>
            </div>
            <div className="label" style={ inverted ? { marginLeft: 'auto' } : { marginRight: 'auto' }}>{portNumber}</div>
        </div>
    )
}

export default DevicePort