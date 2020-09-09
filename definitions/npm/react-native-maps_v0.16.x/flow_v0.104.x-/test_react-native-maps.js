import MapView from 'react-native-maps';
import React, { Component } from 'react';

// $FlowExpectedError
const A = <MapView initialRegion="mexico" />;

const B = <MapView />;

// $FlowExpectedError
const C = <MapView.Marker />;

const D = <MapView.Marker coordinate={{ latitude: 50, longitude: 50 }} />;
