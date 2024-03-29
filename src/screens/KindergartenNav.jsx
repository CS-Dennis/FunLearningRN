import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KindergartenMenu from './KindergartenMenu';

const Stack = createNativeStackNavigator();
export default function KindergartenNav() {
  return (
    <Stack.Navigator initialRouteName="KindergartenMenu">
      <Stack.Screen name="KindergartenMenu" component={KindergartenMenu} />
    </Stack.Navigator>
  );
}
