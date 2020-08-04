import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Picker,
  Platform,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './transport.add.style';
import * as Resources from '../../config/resource';

function TransportAdd({navigation}) {
  const [selectedValue, setSelectedValue] = useState();
  const [value, onChangeText] = useState();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [choosedate, setChooseDate] = useState();
  const [description, setDescription] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [totalExpense, setTotalExpense] = useState('');
 const [status, setStatus] = useState('Pending');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toString();
    setShow(Platform.OS === 'ios');
    setChooseDate(currentDate.substr(0, 15));
    setDate(selectedDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const body = {
    date: date,
    division:selectedValue,
    description: description,
    departureLocation: departureLocation,
    destinationLocation: destinationLocation,
    totalExpense: totalExpense,
    status:status,
  };

  const createTransport = () => {
    Resources.createTransport(body)
      .then(res => {
        resetForm();
        Alert.alert(
          "Transport Request Success",
          "",
          [
            { text: "OK", onPress: () => navigation.navigate('Transport') }
          ],
          { cancelable: false }
        );
      })
      .catch(err => {
        alert(err);
      });
  };

  const CheckTextInput = () => {
    if(description == ""){
      alert('Please Enter Description Request')
    } else{
      alert('Success')
    }
  };

  const resetForm = () => {
    setDescription("");
    setDepartureLocation("");
    setDestinationLocation("");
    setTotalExpense("");
  };
  const tanggal = moment(choosedate).format('MM/DD/YYYY');

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.textareaContainer}>
          Transport Reimbursement Request
        </Text>

        <Card title="FORM">
          <Text style={style.textSM}>Division *</Text>

          <View style={style.viewPicker}>
            <Picker
              mode={'dropdown'}
              selectedValue={selectedValue}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
                <Picker.Item label="" value="" />
              <Picker.Item label="Brain Resources" value="Brain Resources" />
              <Picker.Item label="Enablement" value="Enablement" />
              <Picker.Item label="Loyalti" value="Loyalti" />
              <Picker.Item label="Mokki Design" value="Mokki Design" />
               <Picker.Item label="Software Taylor" value="Software Taylor" />
            </Picker>
          </View>

          <Text style={style.textSM}>Overtime Date *</Text>

          <View style={style.viewDate1}>
            <View style={style.viewDate2}>
              <View style={style.viewDate3}>
                <View style={{flex: 4, justifyContent: 'center'}}>
                  <Text style={{marginLeft: 10, fontSize: 15}}>{tanggal}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <FontAwesome5
                    style={style.iconDate}
                    name="calendar"
                    size={25}
                    color="#1A446D"
                    onPress={showDatepicker}
                  />
                </View>
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <Text style={style.textSM}>Description Request *</Text>

          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            style={style.inputTextArea}
            value={description}
            onChangeText={description => setDescription(description)}
          />

          <Text style={style.textSM}>Departure Location *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            style={style.inputText}
            value={departureLocation}
            onChangeText={departureLocation =>
              setDepartureLocation(departureLocation)
            }
          />

          <Text style={style.textSM}>Destination Location *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            style={style.inputText}
            value={destinationLocation}
            onChangeText={destinationLocation =>
              setDestinationLocation(destinationLocation)
            }
          />

          <Text style={style.textSM}>Total Expense *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            keyboardType={'numeric'}
            placeholder=""
            style={style.inputText}
            value={totalExpense}
            onChangeText={totalExpense => setTotalExpense(totalExpense)}
          />

          <Text style={style.textSM}>Receipt Attachment *</Text>

          <View style={style.buttonAttachment}>
            <Button
              icon={<Icon name="upload" size={15} color="white" />}
              iconRight
              title="Choose File "
            />
          </View>

          <TouchableOpacity
            onPress={createTransport}
            style={style.buttonSubmit}>
            <Text style={style.textbtnSubmit}>Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TransportAdd;