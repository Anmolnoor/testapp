import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  //   const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <Text style={styles.title}>this is profile screen.</Text>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.title}>goBack</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
});

export default Profile;
