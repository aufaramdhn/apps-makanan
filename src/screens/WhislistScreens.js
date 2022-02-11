import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Data from '../constants/Data';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';

const CartScreens = ({navigation}) => {
  const CardCart = ({item}) => {
    return (
      <View style={styles.cardWhislist}>
        <Image source={item.image} style={{height:120, width: 120}}/>
        <View style={{
          marginLeft: 10,
          paddingVertical:20,
          paddingHorizontal: 10,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.black}}>{item.name}</Text>
          <Icon name="ri-heart-fill" size="34" color={COLORS.red} />
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
        <Text style={styles.textHeader}>Whislist</Text>
      </View>
        <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        data={Data}
        renderItem={({item}) => <CardCart item={item}/>}
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
  cardWhislist:{
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
})