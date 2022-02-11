import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import COLORS from '../constants/Colors';
import Icon from 'react-native-remix-icon';

const LoginScreens = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection:'column', backgroundColor: COLORS.primary}}>
      <View style={styles.container}>
      <Text style={styles.header}>Wellcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.containerLogin}>
          <View style={styles.Login}>
              <Icon name="ri-user-3-line" size="28" color={COLORS.secondary} />
            <TextInput placeholder='Your Email' style={styles.input}/>
          </View>
          <View style={styles.Login}>
            <Icon name="ri-lock-password-line" size="28" color={COLORS.secondary} />
            <TextInput placeholder='Your Password' secureTextEntry={true} style={styles.input}/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreens')}>
            <View style={styles.button}>
              <Text style={styles.textLogin}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={{height: 2, backgroundColor: COLORS.secondary, marginLeft: 5, marginRight: 5}}/>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreens')}>
            <View style={styles.buttonLogin}>
                <View style={styles.buttonSignInGoogle}>
                    <Icon name="ri-google-fill" size="24" color={COLORS.white}/>
                    <Text style={styles.textGoogle}>Sign In with Google</Text>
                </View>
            </View>
          </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
              <Text style={styles.register}>
                  You Dont have An Account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreens')}>
                  <Text style={{marginLeft:5, color: COLORS.primary}}>Register Here</Text>
              </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
    container:{
        height: "25%",
    },
    header:{
        fontWeight: 'bold',
        fontSize: 28,
        color: COLORS.white,
        marginLeft: 30,
        marginVertical: 60
    },
    containerLogin:{
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
    Login:{
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 20,
        padding:5,
        backgroundColor: COLORS.lightGray
    },
    input: {
        width: "90%",
    },
    button:{
        backgroundColor: "#6b45bc",
        borderRadius: 20,
        height: 60,
        marginVertical: 20
    },
    buttonLogin:{
        backgroundColor: "#6b45bc",
        borderRadius: 20,
        height: 60,
        marginVertical: 20,
        alignItems: 'center',
    },
    textLogin:{
        color: "#f3f3f3",
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        paddingVertical: 15,
        textAlign: 'center'
    },
    textGoogle:{
        color: "#f3f3f3",
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
    },
    buttonSignInGoogle: {
        flexDirection: 'row',
        paddingVertical: 18,
    },
    register:{
        textAlign: 'center',
        fontSize: 14,
        color: COLORS.black,
    }
});
