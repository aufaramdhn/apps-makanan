import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import COLORS from '../constants/Colors';
import Icon from 'react-native-remix-icon';

const LoginScreens = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSave = async () => {
    const variabel = JSON.stringify({
      email: email,
      password: password,
    });
    await axios
      .post('https://reqres.in/api/login', variabel, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // data: variabel
      })
      .then(res => {
        console.log(res);
      });
  };

  const onSubmit = async () => {
    if (email != '' && password != '') {
      const variabel = JSON.stringify({
        email: email,
        password: password,
      });
      await axios
        .post('https://reqres.in/api/login', variabel, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // data: variabel
        })
        .then(res => {
          console.log(res.data.token);
          navigation.navigate('HomeScreens');
        })
        .catch(e => {
          console.log(e);
        });

      // navigation.navigate('HomeScreens');
    } else {
      Alert.alert(
        'Alert',
        "You're account is not available in our app, Please register to access our app",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('RegisterScreens')},
        ],
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
      }}>
      <View style={styles.container}>
        <Text style={styles.header}>Wellcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.containerLogin}>
        <View style={styles.Login}>
          <Icon name="ri-user-3-line" size="28" color={COLORS.secondary} />
          <TextInput
            placeholder="Your Email"
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.Login}>
          <Icon
            name="ri-lock-password-line"
            size="28"
            color={COLORS.secondary}
          />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.button}>
            <Text style={styles.textLogin}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            backgroundColor: COLORS.secondary,
            marginLeft: 5,
            marginRight: 5,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreens')}>
          <View style={styles.buttonLogin}>
            <View style={styles.buttonSignInGoogle}>
              <Icon name="ri-google-fill" size="24" color={COLORS.white} />
              <Text style={styles.textGoogle}>Sign In with Google</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.register}>You Dont have An Account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreens')}>
            <Text style={{marginLeft: 5, color: COLORS.primary}}>
              Register Here
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    height: '25%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    color: COLORS.white,
    marginLeft: 30,
    marginVertical: 60,
  },
  containerLogin: {
    backgroundColor: '#f3f3f3',
    minWidth: '100%',
    minHeight: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
  },
  Login: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
    padding: 5,
    backgroundColor: COLORS.lightGray,
  },
  input: {
    width: '90%',
  },
  button: {
    backgroundColor: '#6b45bc',
    borderRadius: 20,
    height: 60,
    marginVertical: 20,
  },
  buttonLogin: {
    backgroundColor: '#6b45bc',
    borderRadius: 20,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
  },
  textLogin: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    paddingVertical: 15,
    textAlign: 'center',
  },
  textGoogle: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  buttonSignInGoogle: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  register: {
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.black,
  },
});
