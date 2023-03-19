/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions, Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <Text style={{
        color: isDarkMode ? Colors.white : Colors.black,
        fontSize: 24,
        zIndex: 1,
      }}>{title}</Text>

  );
}

function App(): JSX.Element {

  const [marginTop, setMarginTop] = React.useState(Dimensions.get('window').height / 2 - 50)

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMarginTop((prevMarginTop) => prevMarginTop + 2.5 < Dimensions.get('window').height ? prevMarginTop + 2.5 : Dimensions.get('window').height / 2 - 50);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle} onTouchEnd={
        () => {
          setMarginTop(marginTop - 70)
        }
    }>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,


      }}>
        <ImageBackground source={require('./assets/img/sky.png')} style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          zIndex: 0,
        }}/>
        <Section title={'Hello birds'}/>

        <Image source={require('./assets/img/bird.png')} style={{
          width: 150,
          height: 100,
          position: "absolute",
          top: marginTop,
        }}/>

          <Image source={require('./assets/img/pipeTop.png')} style={{
            width: 80,
            height: 500,
            position: "absolute",
            left: 300,

            top: -250,
          }}/>
          <Image source={require('./assets/img/pipeTop.png')} style={{
            width: 80,
            height: 500,
            position: "absolute",
            left: 300,
            bottom: -250,
            transform: [{rotate: '180deg'}],
          }}/>


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
