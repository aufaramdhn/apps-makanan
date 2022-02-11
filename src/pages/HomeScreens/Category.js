import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Categories from '../../constants/Categories';
import { ScrollView } from 'react-native-gesture-handler';

const Category = () => {
    const CardCategories = ({item}) => {
        return(
            <View style={styles.touchContainer}>
                <TouchableOpacity>
                    <View style={styles.backContainer}>
                    <Image source={item.image} style={{width:50, height:50, alignSelf: 'center'}} />
                    <Text style={styles.labelTitle}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <FlatList
            scrollEnabled={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Categories}
            renderItem={({item}) => <CardCategories item={item} />}
             style={{}} />
        </View>
  );
};

export default Category;

const styles = StyleSheet.create({
    touchContainer:{
        backgroundColor: "#6b45bc",
        width: 80,
        height: 80,
        borderRadius: 50/2,
        marginLeft: 5,
        marginRight: 5,
        marginTop:20,
        marginBottom:30,
    },
    backContainer:{
        backgroundColor: "#f3f3f3",
        width: 50,
        height: 50,
        borderRadius: 50/2,
        alignSelf: 'center',
        marginVertical: 15
    },
    labelTitle: {
        fontSize: 16,
        color: "#1d1d1d",
        fontWeight: "bold",
        fontFamily: "Rubik-regular",
        textAlign: 'center',
        marginVertical: 15
    },
    categories:{
        flexDirection: 'row'
    }
});
