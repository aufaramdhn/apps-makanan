import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Category = () => {
  // const [name, setName] = useState('');
  // const [image, setImage] = useState('');
  // const [allData, setAllData] = useState([]);

  const Categories = [
    {
      id: '1',
      name: 'All',
      image: require('../../../assets/image/burger.png'),
    },
    {
      id: '2',
      name: 'Pizza',
      image: require('../../../assets/image/pizza.png'),
    },
    {
      id: '3',
      name: 'Burger',
      image: require('../../../assets/image/burger.png'),
    },
    {
      id: '4',
      name: 'Kebab',
      image: require('../../../assets/image/kebab.png'),
    },
    {
      id: '5',
      name: 'Chicken',
      image: require('../../../assets/image/chicken.png'),
    },
    {
      id: '6',
      name: 'Drink',
      image: require('../../../assets/image/burger.png'),
    },
  ];

  // useEffect(() => {
  //   done();
  // }, []);

  // const done = () => {
  //   const data = {
  //     name,
  //     image,
  //   };
  //   Axios.get('http://10.0.2.2:3004/categories', data).then(res => {
  //     setAllData(res.data);
  //   });
  // };

  const CardCategories = ({item}) => {
    return (
      <View style={styles.touchContainer}>
        <TouchableOpacity>
          <View style={styles.backContainer}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                alignSelf: 'center',
                borderRadius: 50,
              }}
            />
          </View>
          <Text style={styles.labelTitle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={Categories}
        renderItem={({item}) => <CardCategories item={item} />}
        style={{}}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  touchContainer: {
    backgroundColor: '#6b45bc',
    width: 80,
    height: 80,
    borderRadius: 50 / 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  backContainer: {
    backgroundColor: '#f3f3f3',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignSelf: 'center',
    marginVertical: 15,
  },
  labelTitle: {
    fontSize: 16,
    color: '#1d1d1d',
    fontWeight: 'bold',
    fontFamily: 'Rubik-regular',
    textAlign: 'center',
  },
  categories: {
    flexDirection: 'row',
  },
});
