import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Surface} from 'react-native-paper';
import {StyleConstants} from '../Constants';

export default function GradeCard({navigation, imageSource}) {
  const Sound = require('react-native-sound');
  Sound.setCategory('Playback');

  var soundEffect = new Sound('ice_sound.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
    }
  });

  return (
    <View style={{marginHorizontal: 10, height: '100%', width: 200}}>
      <Pressable
        onPress={() => {
          soundEffect.play();
          navigation.navigate('KindergartenNav');
        }}
        android_ripple={{
          color: StyleConstants.rippleColor,
          foreground: true,
        }}>
        <Image
          source={imageSource}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </Pressable>
    </View>
  );
}
