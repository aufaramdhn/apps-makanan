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

const Profile = ({name, email, bidang, onPress, image}) => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.profile}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.avatar}
          />
          <View style={styles.changeImage}>
            <Icon
              name="ri-camera-fill"
              size="30"
              color={COLORS.primary}
              style={styles.changeIcon}
            />
          </View>
        </TouchableOpacity>
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
    <SafeAreaView style={{backgroundColor: COLORS.lightGray, flex: 1}}>
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
        <View style={{flex: 2}}>
          {users.map(user => {
            return (
              <Profile
                key={user.id}
                image={user.image}
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
                <Text style={{color: COLORS.black}}>Name</Text>
                <TextInput
                  placeholder="Aufa Ramadhan"
                  style={{
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 4,
                  }}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </View>
              <View style={styles.input}>
                <Text style={{color: COLORS.black}}>Email</Text>
                <TextInput
                  placeholder="Example@gmail.com"
                  style={{
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 4,
                  }}
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
              </View>
              <View style={styles.input}>
                <Text style={{color: COLORS.black}}>Bidang</Text>
                <TextInput
                  placeholder="Front End Dev"
                  style={{
                    backgroundColor: COLORS.lightGray,
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
    fontSize: 20,
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
    paddingLeft: 25,
    paddingRight: 25,
  },
  input: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    elevation: 6,
  },
  changeImage: {
    position: 'absolute',
    left: 110,
    top: 110,
    backgroundColor: COLORS.white,
    borderRadius: 20 / 2,
    elevation: 10,
    width: 40,
    height: 40,
  },
  changeIcon: {
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
