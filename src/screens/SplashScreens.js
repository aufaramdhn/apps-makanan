import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';

const Splash = ({navigation}) => {
    setTimeout(()=>{
        navigation.navigate('OnboardingScreens')
    }, 3000)
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor: COLORS.primary}}>
      <StatusBar barStyle="light-content" hidden={false} />
      <Icon name="ri-restaurant-2-fill" size="70" color={COLORS.secondary}/>
      <Text style={styles.label}>FOOD APP</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white
    }
});
