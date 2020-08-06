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
  Alert,
} from 'react-native';
import * as Resources from '../../config/resource';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './overtime.add.style';

function OvertimeAdd({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Java");
  const [kindofday, setKindofday] = useState('Weekdays');
  const [value, onChangeText] = useState();


  
  const [mode, setMode] = useState('');
 
  const [show, setShow] = useState(false);
  const [choosedate, setChooseDate] = useState();
  const [choosehour, setChooseHour] = useState();

  const [division, setDivision] = useState('');
  const [descOvertime, setDescOvertime] = useState('');
  const [date, setDate] = useState(new Date());

  const [time, setHour] = useState(new Date());
  
  
  const [meals, setMeals] = useState(0);
  
  const [transport, setTransport] = useState(0);
  const [total, setTotal] = useState();
 const [status, setStatus] = useState('Pending');


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toString();
    setShow(Platform.OS === 'ios');
    setChooseDate(currentDate.substr(0, 15));
    setDate(selectedDate);
  };

   const onChanges = (event, selectedHour) => {
     const currentHour = selectedHour.toString();
     setShow(Platform.OS === 'ios');
     setChooseHour(currentHour.substr(0, 15));
     setHour(selectedHour);
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
      division: selectedValue,
      date: date,
      description: descOvertime,
      kindofday:kindofday,
      meals:meals,
      transport:transport,
      total:total,
      status:status,
  };


  const tanggal = moment(choosedate).format('MM/DD/YYYY');
  const jam = moment(choosehour).format('hh:mm');

  //Check All Form Filled
  const submitButton = () => {
    if (selectedValue == "" && descOvertime == "" && meals == "" && transport == "") {
      Alert.alert('Please Enter All Values');
    } else if (selectedValue == "") {
      Alert.alert('Please Enter Value Division');
    } else if (descOvertime == "") {
      Alert.alert('Please Enter Description Overtime');
    } else if (transport == "") {
      Alert.alert('Please Enter Value Transport');
    } else {
      addOvertime();
    }
  };

     //Get Hour
     const hour = new Date().getHours();
     console.log('Time right now: ' + hour)

     //Get Days
     const days = new Date().getDay();
     console.log('Hari: ' + days)

     const resetForm = () => {
       setMeals("");
      
     };
     
     if(hour <= 12 && days!=6){
      Alert.alert(
        "Information",'Blom Waktunya Lembur',
        [
          { text: "OK", 
           onPress: () => {
             navigation.navigate('Overtime')
           },
           style: "cancel"},
           
        ],
        { cancelable: false },
      );
     }
     else if(hour>=9){
    

     };

     if (days == 1 || days == 2 || days == 3 || days == 4 || days == 5) {
        if(meals>40000){
          Alert.alert(
            "Meals melibihi 40000", '',
            [{
                text: "OK",
                onPress: () => {
                  resetForm();
                },
                style: "cancel"
              },

            ], {
              cancelable: false
            },
          );
        }
     } else if (days == 6 || days == 7) {
        
        if(meals>80000){
          Alert.alert(
            "Meals melibihi 80000", '',
            [{
                text: "OK",
                onPress: () => {
                  resetForm();
                },
                style: "cancel"
              },

            ], {
              cancelable: false
            },
          );
        }
     }


     if (days == 1 || days == 2 || days == 3 || days == 4 || days == 5) {
        
     }
     else if (days == 6 || days == 7) {
       const kindofday = "Weekend";
     }

      //  const [bil1, setCount] = useState(0);
      //  const [bil2, setCount] = useState(0);
//        const [result, setState] = useState(0);
//  const total =  meals + transport;
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

        

           {/* <Text style={style.textSM}>Time *</Text>

          <View style={style.viewDate1}>
            <View style={style.viewDate22}>
              <View style={style.viewDate3}>
                <View style={{flex: 4, justifyContent: 'center'}}>
                  <Text style={{marginLeft: 10, fontSize: 15}}>{jam}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <FontAwesome5
                    style={style.iconDate2}
                    name="clock"
                    size={25}
                    color="#1A446D"
                    onPress={showTimepicker}
                  />
                </View>
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode={mode}
                is24Hour={true}
                 format = "HH:mm"
                display="clock"
                onChange={onChanges}
              />
            )}
          </View>

           <Text style={style.textSM}>To *</Text>

          <View style={style.viewDate1}>
            <View style={style.viewDate22}>
              <View style={style.viewDate3}>
                <View style={{flex: 4, justifyContent: 'center'}}>
                  <Text style={{marginLeft: 10, fontSize: 15}}>{jam}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <FontAwesome5
                    style={style.iconDate2}
                    name="clock"
                    size={25}
                    color="#1A446D"
                    onPress={showTimepicker}
                  />
                </View>
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode={mode}
                is24Hour={true}
                 format = "HH:mm"
                display="clock"
                onChange={onChanges}
              />
            )}
          </View>
             */}

          
          <Text style={style.textSM}>Kind Of Day</Text>
          <TextInput
            multiline={true}
            
            editable={false}
            placeholder="Weekdays"
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
            
            keyboardType='numeric'
            style={style.inputText}
            value={meals}
             onChangeText={meals => setMeals(meals)}
          />
          <Text style={style.textSM}>Expense Transport *</Text>
          <TextInput
            
            keyboardType='numeric'
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
          
            // keyboardType={'numeric'}
            style={style.inputText}
            
            value={( parseInt(transport || 0, 10) + parseInt(meals || 0, 10) ).toString()}
            onChangeText={total => setTotal(total)}
          />

          <TouchableOpacity
            onPress={submitButton}
            style={style.buttonSubmit}>
            <Text style={style.textbtnSubmit}>Submit</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OvertimeAdd;