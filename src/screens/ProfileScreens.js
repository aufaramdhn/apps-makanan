import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-remix-icon';
import COLORS from '../constants/Colors';

const ProfileScreens = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.lightGray}}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="ri-arrow-left-s-line" size="30" color={COLORS.black} />
            </TouchableOpacity>
                <Text style={styles.textHeader}>Profile</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text Style={styles.textDone}>Done</Text>
            </TouchableOpacity>
        </View>
        <ScrollView scrollEnabled={true}>
            <View style={{flex:1, height: 700}}>
                <View style={styles.containerProfile}>
                    <View style={styles.profile}>
                    <Image source={{uri :'https://i.pinimg.com/550x/5b/b1/09/5bb109cbbaf919b7d50dd27c5532aa91.jpg'}} style={styles.avatar}/>
                    <Text style={{fontSize: 18, fontWeight: '600', color: COLORS.black, marginTop: 10,}}>Aufa Ramadhan</Text>
                    <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.black, marginTop: 5, marginBottom: 5}}>exampleemail@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.containerInput}>
                        <View style={styles.input}>
                            <Text style={{color: COLORS.white}}>Name</Text>
                            <TextInput placeholder="Aufa Ramadhan" style={{backgroundColor: COLORS.white, borderRadius:20, padding:10, marginTop: 4}} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{color: COLORS.white}}>Email</Text>
                            <TextInput placeholder="exampleemail@gmail.com" style={{backgroundColor: COLORS.white, borderRadius:20, padding:10, marginTop: 4}} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{color: COLORS.white}}>No. Telp</Text>
                            <TextInput placeholder="0812984742" style={{backgroundColor: COLORS.white, borderRadius:20, padding:10, marginTop: 4}} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 20,
    },
    textHeader:{
        fontSize: 24,
        color: COLORS.black,
        fontWeight: '700',
    },
    textDone:{
        fontSize: 24,
        color: COLORS.primary,
        fontWeight: '600',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    containerProfile:{
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        },
    profile:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
    },
    input:{
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: COLORS.primary,
        borderRadius:20,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    }
});
