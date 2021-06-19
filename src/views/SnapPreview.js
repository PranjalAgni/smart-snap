import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';

const SnapPreview = ({route}) => {
  const image = route.params;

  console.log('ImagePreview: ', image);
  const finalImagePath = `file://${image.path}`;

  return (
    <View style={styles.container}>
      <Image source={{uri: finalImagePath}} style={styles.preview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preview: {
    width: '100%',
    height: '100%',
    transform: [{rotate: '270deg'}]
  }
});

export default SnapPreview;
