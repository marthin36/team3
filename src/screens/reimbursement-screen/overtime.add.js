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

function OvertimeAdd({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Java");
   
  const [value, onChangeText] = useState();

  
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [choosedate, setChooseDate] = useState();

  const [division, setDivision] = useState('');
  const [descOvertime, setDescOvertime] = useState('');
  const [date, setDate] = useState(new Date());
  const [meals, setMeals] = useState('');
  const [kindofday, setKindofday] = useState('weekend');
  const [transport, setTransport] = useState('');
  const [total, setTotal] = useState('');

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

  const showTimepicker = () => {
    showMode('time');
  };

   const addOvertime = () => {
             Resources.createOvertime(body)
                 .then(res => {
                     alert('Overtime Request Success');
                     navigation.navigate('Overtime')
                 })
                 .catch(err => {
                     console.log(JSON.stringify(err));
                 });
         };

  const body = {
      division: division,
      date: date,
      description: descOvertime,
      kindofday:kindofday,
      meals:meals,
      transport:transport,
      total:total,
      
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

    // const resetForm = () => {
    //     setDivision("");
    //     setDescMedical("");
    //     setDatecMedical("");
    //     setExpenseMedical("");
    // };
  const tanggal = moment(choosedate).format('MM/DD/YYYY');

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.textareaContainer}>
          Overtime Reimbursement Request
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
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
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
          <Text style={style.textSM}>Kind Of Day</Text>
          <TextInput
            multiline={true}
            
            editable={false}
            placeholder="Weekday"
            style={style.inputText}
           value = {kindofday}
            onChangeText={kindofday => setKindofday(kindofday)}
          />     
          
          <Text style={style.textSM}>Description Request *</Text>

          <TextInput
            multiline={true}
            maxLength={200}
            placeholder="Reporting Day"
            style={style.inputTextArea}
             value={descOvertime}
            onChangeText={descOvertime => setDescOvertime(descOvertime)}
          />
        
        
          <Text style={style.textSM}>Expense Meals *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            keyboardType={'numeric'}
            style={style.inputText}
            value={meals}
            onChangeText={meals => setMeals(meals)}
          />
          <Text style={style.textSM}>Expense Transport *</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            keyboardType={'numeric'}
            style={style.inputText}
            value={transport}
            onChangeText={transport => setTransport(transport)}
          />
          

          <Text style={style.textSM}>Receipt Attachment *</Text>

          <View style={style.buttonAttachment}>
            <Button
              icon={<Icon name="upload" size={15} color="white" />}
              iconRight
              title="Choose File "
            />
          </View>

          <Text style={style.textSM}>Total Expense</Text>
          <TextInput
            multiline={true}
            maxLength={200}
            placeholder=""
            keyboardType={'numeric'}
            style={style.inputText}
            value={total}
            onChangeText={total => setTotal(total)}
          />

          <TouchableOpacity
            onPress={addOvertime}
            style={style.buttonSubmit}>
            <Text style={style.textbtnSubmit}>Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OvertimeAdd;