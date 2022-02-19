import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constants/Colors';
import Icon from 'react-native-remix-icon';
import Axios from 'axios';

const height = Dimensions.get('screen').height;

const Card = ({name, price, image, onDelete}) => {
  const [qty, setQty] = useState(1);

  const addQty = () => {
    setQty(qty + 1);
  };

  const removeQty = () => {
    setQty(qty - 1);
  };

  return (
    <View style={styles.cardCart}>
      <Image
        style={{height: 120, width: 120, borderRadius: 40 / 2}}
        source={{uri: image}}
      />
      <View
        style={{
          height: 145,
          marginLeft: 15,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: COLORS.black,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: COLORS.secondary,
            marginTop: 40,
          }}>
          {price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 125,
          paddingBottom: 4,
        }}>
        <View style={styles.addContainer}>
          <Icon
            name="ri-subtract-line"
            size="28"
            color={COLORS.black}
            style={styles.backIcon}
            onPress={removeQty}
          />
          <Text style={styles.addText}>{qty}</Text>
          <Icon
            name="ri-add-line"
            size="28"
            color={COLORS.black}
            style={styles.backIcon}
            onPress={addQty}
          />
        </View>
        <TouchableOpacity onPress={onDelete}>
          <View>
            <Icon
              name="ri-delete-bin-line"
              size="28"
              color={COLORS.red}
              style={{marginLeft: 50, marginTop: 15}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const CartScreens = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    const data = {
      name,
      price,
      image,
    };
    Axios.get('http://10.0.2.2:3004/cart', data).then(res => {
      setAllData(res.data);
    });
  };

  const deleteItem = item => {
    Axios.delete(`http://10.0.2.2:3004/cart/${item.id}`).then(res => {
      GetData();
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f3f3f3'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ri-arrow-left-s-line" size="34" color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Cart</Text>
      </View>
      <ScrollView style={{height: height - 280}}>
        {allData.map(user => {
          return (
            <Card
              key={user.id}
              name={user.name}
              price={user.price}
              image={user.image}
              quantity={user.quantity}
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
      </ScrollView>
      {/* <View>
        <TouchableOpacity>
          <View style={styles.priceBtn}>
            <Text style={styles.textPrice}>Total Price $8.00</Text>
          </View>
        </TouchableOpacity>
      </View> */}
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
  cardCart: {
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
  addContainer: {
    elevation: 5,
    backgroundColor: COLORS.lightGray,
    marginRight: 10,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 5,
    flexDirection: 'row',
  },
  addText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
  },
  containerButton: {
    height: 80,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: 20,
  },
  textPrice: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginVertical: 25,
    color: COLORS.white,
  },
  priceBtn: {
    backgroundColor: COLORS.primary,
    height: 70,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
});
