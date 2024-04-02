import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../../Constants';
import Carousel from 'react-native-reanimated-carousel';

export default function Alphabet() {
  const letterImg = {
    a: require('../../asset/imgs/letters/a.png'),
    b: require('../../asset/imgs/letters/b.png'),
    c: require('../../asset/imgs/letters/c.png'),
    d: require('../../asset/imgs/letters/d.png'),
    e: require('../../asset/imgs/letters/e.png'),
    f: require('../../asset/imgs/letters/f.png'),
    g: require('../../asset/imgs/letters/g.png'),
    h: require('../../asset/imgs/letters/h.png'),
    i: require('../../asset/imgs/letters/i.png'),
    j: require('../../asset/imgs/letters/j.png'),
    k: require('../../asset/imgs/letters/k.png'),
    l: require('../../asset/imgs/letters/l.png'),
    m: require('../../asset/imgs/letters/m.png'),
    n: require('../../asset/imgs/letters/n.png'),
    o: require('../../asset/imgs/letters/o.png'),
    p: require('../../asset/imgs/letters/p.png'),
    q: require('../../asset/imgs/letters/q.png'),
    r: require('../../asset/imgs/letters/r.png'),
    s: require('../../asset/imgs/letters/s.png'),
    t: require('../../asset/imgs/letters/t.png'),
    u: require('../../asset/imgs/letters/u.png'),
    v: require('../../asset/imgs/letters/v.png'),
    w: require('../../asset/imgs/letters/w.png'),
    x: require('../../asset/imgs/letters/x.png'),
    y: require('../../asset/imgs/letters/y.png'),
    z: require('../../asset/imgs/letters/z.png'),
  };

  const Sound = require('react-native-sound');
  Sound.setCategory('Playback');
  const letterSound = [
    new Sound('a.mp3'),
    new Sound('b.mp3'),
    new Sound('c.mp3'),
    new Sound('d.mp3'),
    new Sound('e.mp3'),
    new Sound('f.mp3'),
    new Sound('g.mp3'),
    new Sound('h.mp3'),
    new Sound('i.mp3'),
    new Sound('j.mp3'),
    new Sound('k.mp3'),
    new Sound('l.mp3'),
    new Sound('m.mp3'),
    new Sound('n.mp3'),
    new Sound('o.mp3'),
    new Sound('p.mp3'),
    new Sound('q.mp3'),
    new Sound('r.mp3'),
    new Sound('s.mp3'),
    new Sound('t.mp3'),
    new Sound('u.mp3'),
    new Sound('v.mp3'),
    new Sound('w.mp3'),
    new Sound('x.mp3'),
    new Sound('y.mp3'),
    new Sound('z.mp3'),
  ];
  const [letters, setLetters] = useState([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);
  return (
    <View style={styles.whiteBackground}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Carousel
          loop
          style={{
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          data={letters}
          height={'100%'}
          width={400}
          scrollAnimationDuration={1000}
          snapEnabled={true}
          mode="horizontal-stack"
          modeConfig={{
            snapDirection: 'right',
            stackInterval: 50,
          }}
          onSnapToItem={index => {
            letterSound[index === 0 ? 0 : letters.length - index].play();
          }}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
                borderWidth: 0,
              }}>
              <Image
                source={
                  letterImg[letters[index === 0 ? 0 : letters.length - index]]
                }
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
