import React, { useState } from 'react'
import { ImageBackground, Text, View, StyleSheet, StatusBar, Image, TextInput, Button, Alert, Pressable } from 'react-native';
import { login } from '../../utils/services/services';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation,RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Login: undefined; // No hay parámetros pasados a la ruta Login
    Main: undefined; // Main espera un parámetro userId
  };

  // Luego, define los tipos de propiedades para la navegación y la ruta para cada pantalla
type HomeScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Login'
>;

type MainScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Main'
>;

type HomeScreenProps = {
navigation: HomeScreenNavigationProp;
};

type MainScreenProps = {
navigation: MainScreenNavigationProp;
};

const Login = ({navigation}:HomeScreenProps) => {
    const [loader, setLoader] = useState(false)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

const loginFn = async()=>{
    if (user!='' && password!='') {
        try {
            const response = await login({identifier:user,pass:password})
            if (response && response.data) {
                navigation.replace('Main')
                
            }
        } catch (error:any) {
            showAlertWithIcon(error.message)
            console.log(error)
        }
    }
}

const showAlertWithIcon = (message:string) => {
    Alert.alert(
        '¡Ups!',
        'El correo y/o contraseña incorrectos. Intentalo de nuevo.',
      [
        {
          text: 'Cerrar',
          style: 'cancel',
        },
      ],
      {
        onDismiss: () => console.log('Alerta cerrada'),
        // style: 'default',
      }
    );
  };

  return (
    <ImageBackground
    style={styles.bgImage}
    source={require('../../src/images/bgLogin2.jpg')}
    >
    <View style={styles.darkOverlay} />
    <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
    />

    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../src/images/logoWhite.png')}/>
        <Text style={{color:'white', marginTop:30, fontSize:16,}}> Correo / Usuario </Text>
        <TextInput
        style={styles.input}
        onChangeText={e=>{setUser(e)}}
        autoComplete='email'
        placeholder='Ingresa tu correo'
        placeholderTextColor='#a0a0a0'
        value={user}
      />
      <Text style={{color:'white', marginTop:10,fontSize:16}}> Contraseña </Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={e=>{setPassword(e)}}
        autoComplete='current-password'
        placeholder='Ingresa tu contraseña'
        placeholderTextColor='#a0a0a0'
        value={password}
      />

    <Pressable
        onPress={() => loginFn()}
        style={styles.button}
      >
        <Text style={{fontSize:18, color:'white'}}> Ingresar </Text>
      </Pressable>
      <Text style={{color:'white',paddingTop:8,fontSize:16}}>o</Text>
      <Pressable
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={{color:'#2196F3',paddingTop:8, fontSize:16}}> Registrate aquí </Text>
      </Pressable>
      <Pressable
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={{color:'#f60505',paddingTop:8, fontSize:15}}> ¿Olvidaste tu contraseña? </Text>
      </Pressable>
    </View>

    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    bgImage:{
        flex:1
    },
    darkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#000',
        opacity: 0.3, // Ajusta la opacidad para aumentar o disminuir el oscurecimiento
      },
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',

    },
    logo:{
        width:130,
        height:135
    },
    input: {
        marginVertical:10,
        borderRadius:20,
        height: 35,
        width:250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff',
        color:'#4b4b4b',
        
      },
      button:{
        marginTop:25,
        paddingHorizontal:10,
        paddingVertical:8,
        backgroundColor:'#2196F3',
        borderRadius:10
      },
      text:{
        fontSize:20
      }
})

export default Login