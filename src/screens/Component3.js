import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import RemixIcon from 'react-native-remix-icon';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Component3 = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [selectedCuti, setSelectedCuti] = useState();
  const [selectedDelegated, setSelectedDelegated] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <SafeAreaView style={{padding: 20}}>
      {/* DatePicker */}
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>From</Text>
          <View>
            <RemixIcon name="ri-calendar-2-line" />
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              is24Hour={true}
              display="default"
            />
          </View>
        </View>
        <View>
          <Text>To</Text>
          <View>
            <RemixIcon name="ri-calendar-2-line" />
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              is24Hour={true}
              display="default"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: '#94DAFF',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      {/* Picker Cuti */}
      <View>
        <Text style={{fontSize: 16}}>Leave Type</Text>
        <View style={{borderWidth: 1, borderRadius: 10}}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedCuti}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCuti(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text style={{fontSize: 16}}>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          placeholder="Keperluan Keluarga"
          style={{borderWidth: 1, height: 60, borderRadius: 10}}
        />
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: '#94DAFF',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      {/* Delegated to */}
      <View>
        <Text style={{fontSize: 16}}>Delegated to (Optional)</Text>
        <View style={{borderWidth: 1, borderRadius: 10}}>
          <Picker
            ref={pickerRef}
            selectedValue={selectedDelegated}
            style={{height: 50, borderWidth: 1}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDelegated(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text style={{fontSize: 16}}>Note for Delegated (Optional)</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          placeholder="Keperluan Keluarga"
          style={{
            borderWidth: 1,
            height: 60,
            borderRadius: 10,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        />
      </View>

      <View
        style={{
          height: 2,
          backgroundColor: '#94DAFF',
          marginTop: 15,
          marginBottom: 4,
        }}
      />
      {/* Attachment */}
      <View>
        <Text style={{fontSize: 16}}>Attachment</Text>
        <Text>Max. file size is 2 MB</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RemixIcon name="ri-upload-2-line" />
          <View
            style={{
              backgroundColor: '#c7c7c7',
              marginLeft: 4,
              width: 140,
              height: 30,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
              Surat izin.pdf
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#113CFC',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Request
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Component3;

const styles = StyleSheet.create({});
