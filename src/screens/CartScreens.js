import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Data from '../constants/Data';
import COLORS from '../constants/Colors';
import Icon from 'react-native-remix-icon';

const CartScreens = ({navigation}) => {
  const CardCart = ({item}) => {
    return (
      <View style={styles.cardCart}>
        <Image source={item.image} style={{height:120, width: 120}}/>
        <View style={{
          height:140,
          marginLeft: 10,
          paddingVertical:20,
          flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.black}}>{item.name}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: COLORS.secondary, marginTop:40}}>{item.price}</Text>
        </View>
        <View style={styles.addContainer}>
            <Icon name="ri-subtract-line" size="28" color={COLORS.black} style={styles.backIcon}/>
            <Text style={styles.addText}>1</Text>
            <Icon  name="ri-add-line" size="28" color={COLORS.black} style={styles.backIcon}/>
          </View>
      </View>
    );
  };
    return (
    <SafeAreaView style={{backgroundColor:"#f3f3f3"}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="ri-arrow-left-s-line" size="34" color={COLORS.black}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>6 Towards At Cart</Text>
      </View>
        <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        data={Data}
        renderItem={({item}) => <CardCart item={item}/>}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop:20}}
        ListFooterComponent={() => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.containerButton}>
            <Text style={styles.textPrice}>Total Price $48.00</Text>
          </View>
        </TouchableOpacity>
        )}
        />
    </SafeAreaView>
  );
};

export default CartScreens;

const styles = StyleSheet.create ({
  header: {
    padding: 20,
    flexDirection: 'row'
  },
  textHeader: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: '600',
    color: "#1d1d1d"
  },
  containerCart:{
    minHeight: 500
  },
  cardCart:{
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
    height: 100,
    width: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 5,
  },
  addText:{
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Rubik-Regular"
  },
  containerButton:{
    height: 80,
    backgroundColor: COLORS.primary,
    alignItems:'center',
    borderRadius:20,
  },
  textPrice:{
    fontFamily: 'Rubik-italic',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 25,
    color: COLORS.white
  }
})