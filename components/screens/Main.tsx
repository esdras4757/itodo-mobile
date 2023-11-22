/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Nav from '../nav';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
const defaultImage =
  'https://images.unsplash.com/photo-1528184039930-bd03972bd974?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb';

function Main(): JSX.Element {
  const [img, setImg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundImage: `uri(${defaultImage})`,
    flex: 1,
    // Debes tener en cuenta que ahora el contenido se "dibujará" detrás del StatusBar también.
    // Puedes querer añadir un padding top en Android usando la altura del StatusBar.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  };

  useEffect(() => {
    getBG();
  }, []);

  useEffect(() => {
    getBG();
  }, []);

  

  const storeLastAPICallDate = async () => {
    try {
      const now = new Date().toISOString(); // Guarda la fecha y hora actual como string ISO
      await AsyncStorage.setItem('@LastAPICall', now);
      console.log('Fecha guardada:', now);
      await AsyncStorage.setItem('@LastAPICall', now);
    } catch (error) {
      console.error('Error al guardar la última llamada a la API', error);
    }
  };

  useEffect(() => {
    console.log(img, 'currentimg');
  }, [img]);

  const getBG = async () => {
    const lastAPICallDate = await AsyncStorage.getItem('@LastAPICall');
    const now = new Date();
    let shouldCallAPI = false;
    const img = await AsyncStorage.getItem('img');
    if (img) {
      setImg(img);
    } else {
      setImg(defaultImage);
    }
    if (lastAPICallDate) {
      const lastDate = new Date(lastAPICallDate);
      const differenceInTime = now.getTime() - lastDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays >= 1) {
        shouldCallAPI = true;
      }
    } else {
      // Si no hay una fecha almacenada, asumimos que es la primera vez y debemos llamar a la API.
      shouldCallAPI = true;
    }

    if (shouldCallAPI) {
      axios
        .get(
          'https://api.unsplash.com/photos/random?query=landscape&orientation=portrait&w=1080&h=1920&fit=crop&q=90',
          {
            headers: {
              Authorization:
                'Client-ID 2duCFfeckGlf8xs0_7tUZNKFZBwZXUxj2SNQRxS9kow',
            },
          },
        )
        .then(response => {
          storeData(response.data.urls.full);
          setImg(response.data.urls.full);
          storeLastAPICallDate();
        })
        .catch(error => {
          console.log(error);
        });
    }
    setLoading(false);
  };

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('img', value);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Manejar errores aquí
      console.error('Error al guardar en AsyncStorage', error);
      throw new Error(`Error al guardar en AsyncStorage: ${error}`);
    }
  };

  const handleImageError = () => {
    setImg(defaultImage);
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Spinner):
      ) : (
        <ImageBackground
          style={styles.container}
          source={{uri: img}}
          onError={handleImageError}>
          <View style={styles.darkOverlay} />
          <StatusBar
            translucent
            barStyle={'light-content'}
            backgroundColor="transparent"
          />
          <Nav />
        </ImageBackground>
      )}
    </View>
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
  container: {
    backgroundColor: 'black',
    flex: 1,
    // Debes tener en cuenta que ahora el contenido se "dibujará" detrás del StatusBar también.
    // Puedes querer añadir un padding top en Android usando la altura del StatusBar.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.25, // Ajusta la opacidad para aumentar o disminuir el oscurecimiento
  },
});

export default Main;
