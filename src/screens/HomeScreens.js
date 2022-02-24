import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-remix-icon';
import Header from '../pages/HomeScreens/Header';
import Category from '../pages/HomeScreens/Category';
import COLORS from '../constants/Colors';
import Axios from 'axios';

const height = Dimensions.get('screen').height;

const HomeScreens = ({navigation}) => {
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [image, setImage] = useState('');
  // const [allData, setAllData] = useState({});
  const [loading, isLoading] = useState(false);

  const Data = [
    {
      id: '1',
      name: 'Burger',
      price: '$8.00',
      image: require('../../assets/image/burger.png'),
    },
    {
      id: '2',
      name: 'Pizza',
      price: '$8.00',
      image: require('../../assets/image/pizza.png'),
    },
    {
      id: '3',
      name: 'Kebab',
      price: '$8.00',
      image: require('../../assets/image/kebab.png'),
    },
    {
      id: '4',
      name: 'Chicken',
      price: '$8.00',
      image: require('../../assets/image/chicken.png'),
    },
    {
      id: '5',
      name: 'Burger',
      price: '$8.00',
      image: require('../../assets/image/burger.png'),
    },
    {
      id: '6',
      name: 'Burger',
      price: '$8.00',
      image: require('../../assets/image/burger.png'),
    },
  ];

  // useEffect(() => {
  //   getData();
  //   isLoading(true);
  //   setTimeout(() => {
  //     isLoading(false);
  //   }, 3000);
  // }, []);

  // const AddCart = () => {
  //   const data = {
  //     name,
  //     price,
  //     image,
  //   };
  //   Axios.post('http://10.0.2.2:3004/cart', data).then(res => {
  //     getData();
  //   });
  // };

  // const getData = () => {
  //   Axios.get('http://10.0.2.2:3004/food').then(res => {
  //     setAllData(res.data);
  //   });
  // };

  // const getData = () => {
  //   Axios.get('http://10.0.2.2:3004/food').then(res => {
  //     setAllData(res.data);
  //   });
  // };

  const CardPopuler = ({item}) => {
    return (
      <View style={styles.backContainer}>
        <View style={styles.containerFood}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {data: item})}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 50 / 2,
                alignSelf: 'center',
              }}
              source={item.image}
            />
            <View style={styles.containerText}>
              <Text style={styles.textTitle}>{item.name}</Text>
              <Text style={styles.textPrice}>{item.price}</Text>
              <Icon
                name="ri-add-circle-fill"
                size="38"
                color="#6b45bc"
                style={styles.iconAdd}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.background}>
      {loading ? (
        <ActivityIndicator
          size={50}
          color={COLORS.primary}
          style={styles.loading}
        />
      ) : (
        <View style={styles.container}>
          <Header />
          <Category />
          <View>
            <Text style={styles.textPopular}>Popular</Text>
          </View>
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={{height: height}}
            data={Data}
            renderItem={({item}) => <CardPopuler item={item} />}
            style={{height: 300}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f7f7f7',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  textPopular: {
    marginTop: 15,
    fontSize: 28,
    color: COLORS.black,
    marginBottom: 10,
    fontFamily: 'Rubik-Bold',
  },
  backContainer: {
    paddingBottom: 20,
    flex: 1,
  },
  containerFood: {
    backgroundColor: COLORS.lightGray,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    paddingBottom: 20,
    elevation: 5,
  },
  containerText: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'Rubik-SemiBold',
    color: COLORS.black,
    marginTop: 5,
    marginBottom: 5,
  },
  textPrice: {
    fontSize: 20,
    color: COLORS.secondary,
    fontFamily: 'Rubik-Bold',
    marginBottom: 5,
  },
  iconAdd: {
    position: 'absolute',
    top: 60,
    backgroundColor: COLORS.white,
    borderRadius: 30,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
