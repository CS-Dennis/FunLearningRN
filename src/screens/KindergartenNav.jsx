import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KindergartenMenu from './KindergartenMenu';
import {Text} from 'react-native-paper';
import {ImageBackground} from 'react-native';

const Stack = createNativeStackNavigator();
export default function KindergartenNav() {
  return (
    <Stack.Navigator initialRouteName="KindergartenMenu">
      <Stack.Screen
        name="Kindergarten"
        component={KindergartenMenu}
        options={{
          headerBackground: () => (
            <ImageBackground
              source={require('../asset/imgs/peach.jpg')}
              style={{height: '100%', width: '100%'}}
              resizeMode="repeat"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
