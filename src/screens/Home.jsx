import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';

import ScreenTitle from '../components/ScreenTitle';
import GradeCard from '../components/GradeCard';

export default function Home({navigation}) {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../asset/imgs/pink_background.jpg')}
        imageStyle={{resizeMode: 'repeat'}}
        style={{height: '100%'}}>
        <ScreenTitle title={'Select Grade'} />
        <ScrollView horizontal>
          <View style={{justifyContent: 'center'}}>
            <GradeCard
              navigation={navigation}
              imageSource={require('../asset/imgs/kindergarten.jpg')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
