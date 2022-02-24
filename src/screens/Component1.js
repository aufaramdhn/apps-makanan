import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RemixIcon from 'react-native-remix-icon';

const Input = props => {
  return (
    <View style={styles.containerInput}>
      <RemixIcon name={props.icon} size={props.size} color={props.color} />
      <View style={styles.Input}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
        />
        <Text style={[styles.textInput, props.styles]}>{props.name}</Text>
      </View>
    </View>
  );
};

const Component1 = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        {/* Form */}

        <Input
          name="Fransiska"
          icon="ri-user-add-line"
          size="28"
          color="#c7c7c7"
          placeholder="Name"
          styles={{fontSize: 18}}
        />
        <Input
          name="Delegation"
          icon="ri-link-unlink-m"
          size="28"
          color="#c7c7c7"
          placeholder="Request"
          styles={{color: '#113CFC', fontStyle: 'italic'}}
        />
        <Input
          name="14 Feb 2022 sd 14 Feb 2022"
          icon="ri-calendar-2-line"
          size="28"
          color="#c7c7c7"
          placeholder="From"
          styles={{fontSize: 14}}
        />
        <Input
          name="1"
          icon="ri-calendar-check-fill"
          size="28"
          color="#c7c7c7"
          placeholder="Day"
        />
        {/* Note Input */}

        <View style={styles.noteInput}>
          <Text style={styles.noteText}>Note</Text>
          <TextInput multiline={true} numberOfLines={4} style={styles.note} />
        </View>
        {/* Button */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <View style={styles.containerReject}>
              <Text
                style={{color: '#113CFC', fontSize: 16, fontWeight: 'bold'}}>
                Reject
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerAccept}>
              <Text
                style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>
                Accept
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Component1;

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: '#c7c7c7'},
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    padding: 30,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#94DAFF',
    marginLeft: 8,
  },
  textInput: {
    color: '#c7c7c7',
    fontSize: 16,
  },
  noteInput: {
    marginTop: 22,
    marginBottom: 28,
  },
  noteText: {
    marginBottom: 16,
  },
  note: {
    height: 200,
    borderColor: '#94DAFF',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'flex-start',
  },

  containerAccept: {
    backgroundColor: '#113CFC',
    width: 170,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerReject: {
    borderWidth: 1,
    borderColor: '#113CFC',
    width: 170,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
