import React, { useState } from 'react'
import { Text, StyleSheet, View, Pressable, Modal, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Tooltip } from "native-base";

const Task = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <Pressable  style={style.main} onLongPress={(e)=>{
            setModalVisible(true)
        }}>
        <FontAwesome 
            name="circle-o"
            size={25}
            style={{color: '#e7e7e7', flex:3, marginRight:5}}
        />
        <View style={{flex:10}}>
        <Text style={{color:'white', fontSize:16}}>
            Titulo
        </Text>
        <Text style={{color:'#919191', fontSize:12}}>
            Descripción
        </Text>
        </View>

        <View style={styles.chip}>
        <Tooltip label="Click here to read more" openDelay={500}>
        <Text>More</Text>
      </Tooltip>
        <Text 
            style={{
            color:'white',
            fontSize:13, 
            paddingVertical:3,
            backgroundColor:'red', 
            textAlign:'center',
            borderRadius:5,
            width:'73%'}}>
            Alta
        </Text>
        </View>

        <View style={styles.chip}>
        <Text 
            style={{
            color:'white',
            fontSize:13, 
            paddingVertical:3,
            backgroundColor:'red', 
            textAlign:'center',
            borderRadius:5,
            width:'73%'}}>
            Pendiente
        </Text>
        </View>
        
        <FontAwesome 
            name="star-o"
            size={19}
            style={{color: '#e7e7e7', flex:3, marginRight:0}}
        />
        <FontAwesome 
            name="trash-o"
            size={20}
            style={{color: '#bd0000', flex:2, marginRight:0}}
        />
        </Pressable>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tarea</Text>
            <View style={styles.viewButtons}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Guardar</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
    main:{
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        backgroundColor:'#3f3f3f',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        height:60,
        marginBottom:5
    }
})

const styles = StyleSheet.create({
    chip:{
        flex:10,
    },

    viewButtons:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 15,
      padding: 10,
      elevation: 1,
      margin:3
    },
    buttonOpen: {
      backgroundColor: '#9c9c9c',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default Task