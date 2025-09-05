'use client'
import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

class RadarMap extends React.Component {
	componentDidMount() {
		Radar.initialize('prj_test_pk_5f383b7a0352245d5bf358229b782e82c5d5ff68');

		// create a map
		const map = Radar.ui.map({
			container: 'map',
			style: 'radar-default-v1',
			// omit center and zoom to use default IP address location
			center: [-118.40256,34.01924],
			zoom: 16.8,
		});

		// add a marker to the map
		Radar.ui.marker({ text: 'Radar HQ' })
			.setLngLat([-118.40242,34.01902])
			.addTo(map);
	}

	render() {
		return (
			<div id="map-container" style={{ width:' 100%', height: '100%', position: 'absolute' }}>
				<div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
			</div>
		);
	}
};

export default RadarMap;