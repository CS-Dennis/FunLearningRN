import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Surface} from 'react-native-paper';

export default function GradeCard({navigation, imageSource}) {
  return (
    <Surface elevation={1} style={{height: '50%'}}>
      <View style={{marginHorizontal: 10, height: '100%', width: 200}}>
        <Pressable
          onPress={() => {
            navigation.navigate('KindergartenNav');
          }}
          android_ripple={{color: 'rgba(255,56,145,0.5)', foreground: true}}>
          <Image
            source={imageSource}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </Pressable>
      </View>
    </Surface>
  );
}
