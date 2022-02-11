import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import COLORS from '../constants/Colors';


const OnboardingScreens = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection:'column', backgroundColor: COLORS.primary}}>
      <View style={styles.container}/>
      <Animatable.View animation="fadeInUpBig" style={styles.containerStart}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreens')}>
            <Animatable.View animation="bounceIn" style={styles.button}>
              <Text style={styles.textStart}>Get Started</Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
      </View>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
      container:{
        height: "80%"
      },
      containerStart:{
        backgroundColor:"#f3f3f3",
        minWidth: "100%",
        minHeight: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingTop: 20,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50
      },
      button:{
        backgroundColor: "#6b45bc",
        borderRadius: 25,
        height: 65,
        marginVertical: 20
      },
      textStart:{
        color: "#f3f3f3",
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        paddingVertical: 20
      },
});
