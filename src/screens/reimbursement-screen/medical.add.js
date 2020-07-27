import React, {Component, useState} from 'react';
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
} from 'react-native';
import * as Resources from '../../config/resource';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './medical.add.style';

function MedicalAdd({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Java");
   
  const [value, onChangeText] = useState();

  
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [choosedate, setChooseDate] = useState();

  const [division, setDivision] = useState('');
  const [descMedical, setDescMedical] = useState('');
  const [date, setDate] = useState(new Date());
  const [expenseMedical, setExpenseMedical] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toString();
    setShow(Platform.OS === 'ios');
    setChooseDate(currentDate.substr(0, 15));
    setDate(selectedDate);
  };
  const [picture, setPicture] = useState(null);

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

   const addMedical = () => {
             Resources.createMedical(body)
                 .then(res => {
                    //  resetForm();
                     alert('Medical Request Success');
                     navigation.navigate('Medical')
                 })
                 .catch(err => {
                     console.log(JSON.stringify(err));
                 });
         };

  const body = {
      division: selectedValue,
      date: date,
      descmedical: descMedical,
      expensemedical: expenseMedical,
       
  };

//   const transportRequest = () => {
//     Resources.createProject(body)
//       .then(res => {
//         resetForm();
//         Alert('Transport Request Success');
//       })
//       .catch(err => {
//         console.log(JSON.stringify(err));
//       });
//   };

    const resetForm = () => {
        setDivision("");
        setDescMedical("");
        setDatecMedical("");
        setExpenseMedical("");
    };
  const tanggal = moment(choosedate).format('MM/DD/YYYY');

  const onChangePicture = e => {
    console.log('picture: ', picture);
    setPicture(e.target.files[0]);
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.textareaContainer}>
          Medical Reimbursement Request
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

          <Text style={style.textSM}>Date *</Text>

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
                format = "YYYY-MM-DD"
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
             value={descMedical}
            onChangeText={descMedical => setDescMedical(descMedical)}
          />

          <Text style={style.textSM}>Total Expense *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            keyboardType={'numeric'}
            style={style.inputText}
            value={expenseMedical}
            onChangeText={expenseMedical => setExpenseMedical(expenseMedical)}
          />

          <Text style={style.textSM}>Receipt Attachment *</Text>

          <View style={style.buttonAttachment}>
            <Button
              icon={<Icon name="upload" size={15} color="white" />}
              iconRight
              title="Choose File "
            />

            <input
  type="file"
  //style={{ display: 'none' }}
  onChange={onChangePicture}
/>
          </View>

          <TouchableOpacity
            onPress={addMedical}
            style={style.buttonSubmit}>
            <Text style={style.textbtnSubmit}>Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MedicalAdd;