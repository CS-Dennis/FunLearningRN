import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import ScreenTitle from '../components/ScreenTitle';
import GradeCard from '../components/GradeCard';

export default function Home() {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ScreenTitle title={'Select Grade'} />
      <ImageBackground
        source={require('../asset/imgs/pink_background.jpg')}
        imageStyle={{resizeMode: 'repeat'}}
        style={{height: '100%'}}>
        <ScrollView horizontal>
          <View style={{justifyContent: 'center'}}>
            <GradeCard
              imageSource={require('../asset/imgs/kindergarten.jpg')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
