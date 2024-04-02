import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';

import ScreenTitle from '../components/ScreenTitle';
import GradeCard from '../components/GradeCard';
import {Text} from 'react-native-paper';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View style={{flex: 2}}>
        <ImageBackground
          source={require('../asset/imgs/peach.jpg')}
          style={{height: '100%', width: '100%'}}
          resizeMode="repeat">
          <ScreenTitle title={'Select Grade'} />
        </ImageBackground>
      </View>

      <View style={{flex: 10}}>
        <View style={{flex: 10}}>
          <ScrollView horizontal style={{height: '100%'}}>
            <View
              style={{
                marginLeft: 20,
              }}>
              <GradeCard
                navigation={navigation}
                imageSource={require('../asset/imgs/kindergarten.jpg')}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../asset/imgs/peach.jpg')}
            style={{height: '100%', width: '100%'}}
            resizeMode="repeat"
          />
        </View>
      </View>
    </View>
  );
}
