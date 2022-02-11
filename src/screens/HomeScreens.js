import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-remix-icon';
import Data from '../constants/Data';
import Header from '../pages/HomeScreens/Header';
import Category from '../pages/HomeScreens/Category';
import COLORS from '../constants/Colors';

const HomeScreens = ({navigation}) => {
    const CardPopuler = ({item}) => {
        return(
            <View style={styles.backContainer}>
                <View style={styles.containerFood}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}>
                        <Image style={{width: 150, height: 150}} source={item.image}/>
                        <View style={styles.containerText}>
                        <Text style={styles.textTitle}>{item.name}</Text>
                        <Text style={styles.textPrice}>{item.price}</Text>
                        <Icon name="ri-add-circle-fill" size="38" color="#6b45bc" style={styles.iconAdd} onPress={() => navigation.navigate('Cart')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.container}>
            <Header />
            <Category />
            <View>
                <Text style={styles.textHeader2}>Popular</Text>
            </View>
            <FlatList 
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{paddingBottom: 40}}
            data={Data}
            renderItem={({item}) => <CardPopuler item={item} />}
             style={{height: 300}}/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#f7f7f7",
    },
    container:{
        marginRight: 30,
        marginLeft: 30,
    },
    textHeader2:{
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 10
    },
    backContainer: {
        paddingBottom: 20,
    },
    containerFood: {
        backgroundColor: COLORS.lightGray,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 20,
        paddingBottom: 20,
        elevation: 5
    },
    containerText:{
        alignItems:'center'
    },
    textTitle:{
        fontSize:18,
        fontFamily:"Rubik-Regular",
        color:COLORS.white,
        fontWeight:'800',
    },
    textPrice:{
        fontSize:20,
        color:COLORS.secondary,
        fontWeight:'bold',
        marginBottom: 5,
    },
    iconAdd:{
        position:'absolute',
        top: 57,
        backgroundColor: COLORS.white,
        borderRadius: 30
    }
})
