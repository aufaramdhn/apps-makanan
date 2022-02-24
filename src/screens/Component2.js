import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: '1',
    cuti: 'Cuti Tahunan',
    day: '20 Days',
    delegated: 'Tanboy Kun',
    date: '14 Feb 2022 sd 14 Feb 2022',
    review: 'Pending Riview',
  },
  {
    id: '2',
    cuti: 'Cuti Tahunan',
    day: '20 Days',
    delegated: 'Tanboy Kun',
    date: '14 Feb 2022 sd 14 Feb 2022',
    review: 'Approved',
  },
  {
    id: '3',
    cuti: 'Cuti Tahunan',
    day: '20 Days',
    delegated: 'Tanboy Kun',
    date: '14 Feb 2022 sd 14 Feb 2022',
    review: 'Approved',
  },
  {
    id: '4',
    cuti: 'Cuti Tahunan',
    day: '20 Days',
    delegated: 'Tanboy Kun',
    date: '14 Feb 2022 sd 14 Feb 2022',
    review: 'Disapproved',
  },
];

const Component2 = () => {
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.containerCard}>
            <View style={styles.Card}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
                {item.cuti}
              </Text>
              <Text>{item.day}</Text>
              <Text>Delegate to: {item.delegated}</Text>
            </View>
            <View
              style={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <Text>{item.date}</Text>
              <Text>{item.review}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Component2;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    padding: 20,
    borderRadius: 5,
  },
});
