import React, { useEffect, useState } from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MydayScreeen from './screens/MydayScreeen';
import NotesScreen from './screens/NotesScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigationState} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Nav = ({}) => {
    const [mainTabcolor, setMainTabcolor] = useState('#0181e3')
//   const stateIndex = useNavigationState(state => state.index);

//   useEffect(() => {
//     // Obtén las rutas desde el estado de navegación
//     const routes = useNavigationState(state => state.routes);
//     // Usa el índice para obtener la ruta activa
//     const currentRoute = routes[stateIndex].name;

//     console.log(`La pestaña activa es: ${currentRoute}`);
//     // Aquí puedes agregar más lógica que se ejecuta cuando cambia la pestaña activa
//   }, [stateIndex]);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="MiDia"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#2196F3', // Color del icon de la pestaña activa
          tabBarInactiveTintColor: '#eee', // Color del ícono de la pestaña inactiva
          tabBarShowLabel: true, // Decides si mostrar el texto de la etiqueta
          tabBarStyle: {
            // Personalización del estilo del tabBar
            backgroundColor: '#1f1f1f', // Fondo del tabBar
            borderTopWidth: 0,
            padding: 0,
            paddingBottom: 5, // Espacio inferior en la barra
            
          },
          // Aquí puedes añadir más personalización al tabBar
        }}>
        <Tab.Screen
          name="Reminder"
          component={NotesScreen}
          options={{
            tabBarLabelStyle: {
                fontSize: 12,
                width:'100%'
              },
            tabBarLabel: 'Recordatorios',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="bell" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="Notas"
          component={NotesScreen}
          options={{
            tabBarLabel: 'Notas',
            tabBarLabelStyle: {
                fontSize: 12,
                width:'100%'
              },
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="sticky-note" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="MiDia"
          component={MydayScreeen}
          options={{
            tabBarItemStyle: {
                flex:.4,
                flexDirection:'column',
                marginHorizontal:17,
              marginTop: -20,
              backgroundColor:'#2f2f2f',
              borderWidth:2,
              borderRadius:30,
              borderColor:'orange',
              height:40,
              opacity:1,
              shadowColor: '#ffedac',
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowRadius: 10,
              elevation: 10,
              
            },
            tabBarLabelStyle: {
                position:'absolute',
                bottom:-27,
                width:'100%',
              marginBottom: 0,
              fontSize: 12
            },
            tabBarLabel: 'Mi dia',
            headerShown: false,
            tabBarIcon: (({color,size})=>{
                return<FontAwesome5 name="sun" color={'orange'} size={22} />
            }),
          }}
        />

        <Tab.Screen
          name="Tareas"
          component={NotesScreen}
          options={{
            tabBarLabel: 'Tareas',
            tabBarLabelStyle: {
                fontSize: 12,
                width:'100%'
              },
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="tasks" color={color} size={15} />
            ),
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={NotesScreen}
          options={{
            tabBarLabel: 'Agenda',
            tabBarLabelStyle: {
                fontSize: 12,
                width:'100%'
              },
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="calendar" color={color} size={15} />
            ),
          }}
        />
        {/* Aquí puedes añadir más pantallas según sea necesario */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});

export default Nav;
