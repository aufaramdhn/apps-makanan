import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';
import Axios from 'axios';

const Whislist = ({name, image, onDelete}) => {
  const [changeIcon, setChangeIcon] = useState(false);
  const WhislistIcon = () => {
    setChangeIcon(!changeIcon);
  };

  return (
    <View style={styles.cardWhislist}>
      <Image
        source={{uri: image}}
        style={{height: 120, width: 120, borderRadius: 30 / 2}}
      />
      <View
        style={{
          marginLeft: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: COLORS.black,
          }}>
          {name}
        </Text>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="ri-heart-fill" size="34" color={COLORS.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CartScreens = ({navigation}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    const data = {
      name,
      image,
    };
    Axios.get('http://10.0.2.2:3004/whislist', data).then(res => {
      setAllData(res.data);
    });
  };

  const deleteItem = item => {
    console.log(item);
    Axios.delete(`http://10.0.2.2:3004/whislist/${item.id}`).then(res => {
      GetData();
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f3f3f3'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ri-arrow-left-s-line" size="34" color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Whislist</Text>
      </View>
      {allData.map(user => {
        return (
          <Whislist
            key={user.id}
            name={user.name}
            image={user.image}
            onDelete={() =>
              Alert.alert(
                'Peringatan',
                'Anda yakin ingin menghapus user ini ? ',
                [
                  {
                    text: 'tidak',
                    onPress: () => console.log('button tidak'),
                  },
                  {text: 'Ya', onPress: () => deleteItem(user)},
                ],
              )
            }
          />
        );
      })}
    </SafeAreaView>
  );
};

export default CartScreens;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
  },
  textHeader: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  containerCart: {
    minHeight: 500,
  },
  cardWhislist: {
    height: 150,
    elevation: 15,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
