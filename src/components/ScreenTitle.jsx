import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ColorScheme} from '../Constants';

export default function ScreenTitle({title}) {
  const [titleChars, setTitleChars] = useState([...title.split('')]);

  useEffect(() => {}, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '30%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 30,
        marginTop: 20,
      }}>
      {titleChars.map((letter, i) => (
        <Text
          key={i}
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            color:
              i < ColorScheme.length
                ? `rgba(${ColorScheme[i]})`
                : `rgba(${ColorScheme[i % 6]})`,
            textShadowColor: 'rgba(255,56,145,1)',
            textShadowRadius: 10,
          }}>
          {letter}
        </Text>
      ))}
    </View>
  );
}
