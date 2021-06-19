import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

function Snap() {
  const devices = useCameraDevices();
  console.log('Devices: ', devices);
  const device = devices.back;

  if (device == null) {
    return <Text>Loading</Text>;
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}

export default Snap;
