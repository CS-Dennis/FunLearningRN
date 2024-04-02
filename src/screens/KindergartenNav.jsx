import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KindergartenMenu from './KindergartenMenu';
import {Text} from 'react-native-paper';
import {ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Alphabet from './Kindergarten/Alphabet';

const Stack = createNativeStackNavigator();
export default function KindergartenNav() {
  return (
    <Stack.Navigator initialRouteName="KindergartenMenu">
      <Stack.Screen
        name="Kindergarten"
        component={KindergartenMenu}
        options={{
          headerBackground: () => (
            <>
              <ImageBackground
                source={require('../asset/imgs/peach.jpg')}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                resizeMode="repeat">
                <LinearGradient
                  colors={['rgba(255,255,255,1)', 'rgba(255,56,145,0.2)']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{flex: 1}}
                />
              </ImageBackground>
            </>
          ),
        }}
      />
      <Stack.Screen name="Alphabet" component={Alphabet} />
    </Stack.Navigator>
  );
}
