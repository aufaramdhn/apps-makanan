import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/Colors';
import Icon from 'react-native-remix-icon';
import * as Animatable from 'react-native-animatable';
import Axios from 'axios';

const LoginScreens = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const create = () => {
    const data = {
      email,
      password,
      confirm,
    };
    Axios.post('http://10.0.2.2:3004/login', data).then(res => {
      setEmail('');
      setPassword('');
      setConfirm('');
    });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
      }}>
      <View style={styles.container}>
        <Text style={styles.header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.containerRegister}>
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
        <View style={styles.Login}>
          <Icon
            name="ri-lock-password-line"
            size="28"
            color={COLORS.secondary}
          />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={true}
            style={styles.input}
            value={confirm}
            onChangeText={value => setConfirm(value)}
          />
        </View>
        <TouchableOpacity onPress={create}>
          <View style={styles.signUp}>
            <Text style={styles.textSignUp}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            backgroundColor: COLORS.secondary,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 8,
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.signIn}>
            <View style={styles.containerSignIn}>
              <Text style={styles.textSignIn}>Sign In</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  containerRegister: {
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
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
    padding: 5,
    backgroundColor: COLORS.lightGray,
  },
  input: {
    width: '90%',
    fontSize: 16,
  },
  signUp: {
    backgroundColor: '#6b45bc',
    borderRadius: 20,
    height: 60,
    marginVertical: 10,
    marginTop: 20,
  },
  signIn: {
    backgroundColor: '#6b45bc',
    borderRadius: 20,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
  },
  textSignUp: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    paddingVertical: 18,
    textAlign: 'center',
  },
  textSignIn: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  containerSignIn: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
});
