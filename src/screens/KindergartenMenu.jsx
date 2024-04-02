import React from 'react';
import {ImageBackground, Pressable, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StyleConstants} from '../Constants';

export default function KindergartenMenu({navigation}) {
  const Sound = require('react-native-sound');
  Sound.setCategory('Playback');

  var soundEffect = new Sound('ice_sound.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
    }
  });
  return (
    <>
      <View style={{height: '100%', backgroundColor: 'rgb(255,255,255)'}}>
        <LinearGradient
          colors={['rgba(255,255,255,1)', 'rgba(255,56,145,0.2)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{flex: 1}}>
          <ScrollView
            horizontal
            style={{
              height: '100%',
            }}>
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Pressable
                onPress={() => {
                  soundEffect.play();
                  navigation.navigate('Alphabet');
                }}
                android_ripple={{
                  foreground: true,
                  color: StyleConstants.rippleColor,
                }}>
                <ImageBackground
                  source={require('../asset/imgs/AlphabetChart.jpg')}
                  style={{width: 200, height: 250}}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
}
