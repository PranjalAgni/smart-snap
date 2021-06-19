import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SnapPreview = ({route}) => {
  const image = route.params;

  console.log('ImagePreview: ', image);
  const finalImagePath = `file://${image.path}`;

  return (
    <View>
      <Image source={{uri: finalImagePath}} style={styles.preview} />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: '100%',
    transform: [{rotate: '270deg'}]
  }
});

export default SnapPreview;
