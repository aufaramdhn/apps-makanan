import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-remix-icon';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Menu</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/550x/5b/b1/09/5bb109cbbaf919b7d50dd27c5532aa91.jpg',
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.searchInput}>
          <Icon
            name="ri-search-2-line"
            size="25"
            color="#1d1d1d"
            style={{marginLeft: 20, marginRight: 10}}
          />
          <TextInput style={styles.Input} placeholder="Search" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 38,
    fontFamily: 'Rubik-Bold',
    color: '#1d1d1d',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  containerSearch: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchInput: {
    padding: 5,
    height: 50,
    backgroundColor: '#EEEEEE',
    flex: 1,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
