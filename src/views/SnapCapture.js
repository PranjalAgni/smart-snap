import React, {useCallback, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsForeground} from '../hooks/useIsForeground';

const SnapCapture = ({navigation}) => {
  const devices = useCameraDevices();
  const camera = useRef(null);
  const device = devices.back;

  const takePhoto = useCallback(async () => {
    try {
      if (!camera.current) {
        console.log('Camera not initalized yet');
        return;
      }

      console.log('Taking photo');
      const image = await camera.current.takePhoto({
        photoCodec: 'jpeg',
        qualityPrioritization: 'speed',
        quality: 90,
        skipMetadata: true
      });
      // Navigation to Preview screen
      setTimeout(() => {
        navigation.navigate('SnapPreview', image);
      }, 1000);
    } catch (ex) {
      console.error('Error: ', ex);
    }
  }, [camera, navigation]);

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
      <View style={StyleSheet.absoluteFill}>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          photo={true}
          isActive={isAppForeground}
          onError={onError}
          onInitialized={onInitialized}
        />
      </View>
      <View style={styles.captureButtonArea}>
        <TouchableOpacity style={styles.snapBtn} onPress={takePhoto}>
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
  captureButtonArea: {
    position: 'absolute',
    left: '30%',
    bottom: '10%'
  },
  snapBtn: {
    borderWidth: 1,
    borderColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '180%',
    height: '180%',
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: '#414685',
    shadowOffset: {
      width: 1,
      height: 5.5
    },
    elevation: 6
  }
});
export default SnapCapture;
