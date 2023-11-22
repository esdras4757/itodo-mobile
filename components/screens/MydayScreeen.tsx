import React from 'react';
import {Text, View, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Task from '../Task';
const MydayScreeen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{height: '95%'}}>
      <View style={styles.container}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}></Text>
        <Text style={styles.myDay}>Mi Dia</Text>
        <Entypo
          name="dots-three-vertical"
          size={25}
          style={{color: '#ffffff', flex: 1}}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.taskContainer}>
        <Task />
        <Task />
        <Task />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  myDay: {
    color: '#e7e7e7',
    fontSize: 28,
    textAlign: 'center',
    flex: 12,
  },
  container: {
    height: 50,
    paddingTop: 10,
    marginVertical: 25,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  taskContainer: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default MydayScreeen;
