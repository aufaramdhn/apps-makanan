import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';
import Axios from 'axios';

const Profile = ({name, email, bidang, onPress}) => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.profile}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: `https://i.pinimg.com/550x/5b/b1/09/5bb109cbbaf919b7d50dd27c5532aa91.jpg`,
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: COLORS.black,
            marginTop: 10,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: COLORS.black,
            marginTop: 5,
            marginBottom: 5,
          }}>
          {email}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: COLORS.black,
            marginTop: 5,
            marginBottom: 5,
          }}>
          {bidang}
        </Text>
      </View>
    </View>
  );
};

const ProfileScreens = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const done = () => {
    const data = {
      name,
      email,
      bidang,
    };
    // Axios.post('http://10.0.2.2:3004/users', data).then(res => {
    //   console.log('res: ', res);
    //   setName('');
    //   setEmail('');
    //   setBidang('');
    // });
    Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then(
      res => {
        console.log(res);
      },
    );
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then(res => {
      setUsers(res.data);
    });
  };

  const selectItem = item => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.lightGray}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ri-arrow-left-s-line" size="30" color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Personal Data</Text>
        <TouchableOpacity onPress={done}>
          <Text Style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView scrollEnabled={true}>
        <View style={{flex: 1, height: 700}}>
          {users.map(user => {
            return (
              <Profile
                key={user.id}
                name={user.name}
                email={user.email}
                bidang={user.bidang}
                onPress={() => selectItem(user)}
              />
            );
          })}
          {/* <Profile
            name={users.name}
            email={users.email}
            bidang={users.bidang}
          /> */}
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <View style={styles.input}>
                <Text style={{color: COLORS.white}}>Name</Text>
                <TextInput
                  placeholder="Aufa Ramadhan"
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 4,
                  }}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </View>
              <View style={styles.input}>
                <Text style={{color: COLORS.white}}>Email</Text>
                <TextInput
                  placeholder="Example@gmail.com"
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 4,
                  }}
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
              </View>
              <View style={styles.input}>
                <Text style={{color: COLORS.white}}>Bidang</Text>
                <TextInput
                  placeholder="Front End Dev"
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 4,
                  }}
                  value={bidang}
                  onChangeText={value => setBidang(value)}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
  },
  textHeader: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '700',
  },
  textDone: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: '600',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  containerProfile: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  input: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
});
