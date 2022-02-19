import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';

const SettingScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/550x/5b/b1/09/5bb109cbbaf919b7d50dd27c5532aa91.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: '600', color: COLORS.black}}>
              Aufa Ramadhan
            </Text>
            <Text
              style={{fontSize: 16, fontWeight: '600', color: COLORS.black}}>
              exampleemail@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.containerList}>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25 / 2,
                elevation: 6,
                marginLeft: 6,
              }}>
              <Icon name="ri-user-fill" size="24" color={COLORS.black} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{color: COLORS.black, fontWeight: '700', fontSize: 16}}>
                Personal Data
              </Text>
              <Icon
                name="ri-arrow-right-s-line"
                size="28"
                color={COLORS.black}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.containerList}>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25 / 2,
                elevation: 6,
                marginLeft: 6,
              }}>
              <Icon name="ri-logout-box-line" size="24" color={COLORS.black} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{color: COLORS.black, fontWeight: '700', fontSize: 16}}>
                Logout
              </Text>
              <Icon
                name="ri-arrow-right-s-line"
                size="28"
                color={COLORS.black}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreens;

const styles = StyleSheet.create({
  containerList: {
    flexDirection: 'row',
    margin: 15,
    height: 60,
    borderRadius: 20 / 2,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});
