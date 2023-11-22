
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
import Nav from './components/nav';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './components/screens/Main';
import Login from './components/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Box } from "native-base";
const Stack = createStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;
const defaultImage =
  'https://images.unsplash.com/photo-1528184039930-bd03972bd974?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
  }, []);


  return (
    <NativeBaseProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        options={{
          headerShown:false
        }}
        name="Login" component={Login} />
        <Stack.Screen
         options={{
          headerShown:false
        }}
        name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
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

export default App;
