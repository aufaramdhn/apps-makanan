import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-remix-icon';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/Colors';

const DetailsScreens = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:"#6b45bc"}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ri-arrow-left-s-line" size="34" color="#f3f3f3" />
        </TouchableOpacity>
          <Text style={styles.textHeader}>Details</Text>
          <TouchableOpacity>
            <Icon name="ri-heart-line" size="34" color="#f3f3f3" />
          </TouchableOpacity>
      </View>
      <View style={styles.containerFood}>
          <Image source={require('../../assets/image/burger.png')} style={styles.foodImage}/>
      </View>
        <View style={styles.details}>
          <View style={styles.textTitle}>
            <Text style={styles.textFood}>Burger</Text>
            <Text style={styles.textPrice}>$18.00</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <View style={styles.containerEst}>
              <Icon name="ri-history-fill" size="18" color="#f3f3f3"/>
              <Text style={styles.textEst}>30m</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.containerEst}>
              <Icon name="ri-star-line" size="18" color="#f3f3f3"/>
              <Text style={styles.textEst}>4.5</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerAbout}>
            <Text style={styles.headerAbout}>About</Text>
            <Text style={styles.textAbout}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet autem consequuntur vitae quod? Rerum quia provident quis est.</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View style={styles.button}>
              <Text style={styles.textCart}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreens;

const styles = StyleSheet.create ({
  header:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight: 30
  },
  textHeader:{
    fontSize: 24,
    color: COLORS.white,
    fontWeight: '700',
  },
  containerFood:{
    height: 175
  },
  foodImage:{
    width:250,
    height:250,
    alignSelf: 'center',
    marginVertical: 50,
    zIndex: 1
  },
  details:{
    backgroundColor:COLORS.white,
    minWidth: "100%",
    minHeight: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 70,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50

  },
  textTitle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  textFood:{
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 28
  },
  textPrice:{
    color: COLORS.secondary,
    fontWeight: '800',
    fontSize: 32
  },
  containerEst:{
    backgroundColor: COLORS.primary,
    flexDirection:'row',
    marginRight: 20,
    marginTop:15,
    padding: 8,
    borderRadius: 20,
  },
  textEst:{
    color: COLORS.white,
    marginLeft: 5
  },
  headerAbout:{
    color: COLORS.black,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  textAbout:{
    color: "#c9c9c9",
    fontSize: 16,
    marginTop: 5,
  },
  button:{
    marginTop: 25,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    height: 65,
  },
  textCart:{
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    paddingVertical: 20
  }
})