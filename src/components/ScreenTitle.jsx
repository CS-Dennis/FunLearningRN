import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ColorScheme} from '../Constants';

export default function ScreenTitle({title}) {
  const [titleChars, setTitleChars] = useState([...title.split('')]);

  useEffect(() => {
    console.log(titleChars);
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
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
