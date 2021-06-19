import React, {useRef, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsForeground} from '../hooks/useIsForeground';

const SnapPreview = () => {
  const devices = useCameraDevices();
  console.log(devices);
  const camera = useRef(null);
  const device = devices.back;
  const takePhoto = useCallback(async () => {
    if (!camera.current) {
      console.log('Camera not initalized yet');
      return;
    }

    console.log('Taking photo');
    const photo = await camera.current.takePhoto({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      quality: 90,
      skipMetadata: true
    });
    console.log(photo);
  }, [camera]);

  const isAppForeground = useIsForeground();

  console.log('Device: ', device);

  // Camera callbacks
  const onError = useCallback(error => {
    console.error(error);
  }, []);

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
  }, []);

  if (device == null) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.StyleSheet}>
        <Camera
          ref={camera}
          style={StyleSheet.StyleSheet}
          device={device}
          photo={true}
          isActive={isAppForeground}
          onError={onError}
          onInitialized={onInitialized}
        />
      </View>
      <View style={styles.captureContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  preview: {
    flex: 1
  },
  captueContainer: {
    position: 'absolute',
    bottom: 0
  },
  capturseButton: {
    position: 'absolute',
    alignSelf: 'center'
  },
  captureButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
export default SnapPreview;
