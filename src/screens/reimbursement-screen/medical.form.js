import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Button, SafeAreaView, Picker, TouchableOpacity, ScrollView, Platform,TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.form.style';
import axios from 'axios';
import * as Resources from '../../config/resource';
import Icon from 'react-native-vector-icons/FontAwesome';
function TransportForm({ navigation }) {
    useEffect(() => {
        // showDatepicker1();
    })

    const [selectedValue, setSelectedValue] = useState("Software Tailor");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
        const [division, setDivision] = useState('');
        const [descMedical, setDescMedical] = useState('');
        const [dateMedical, setDatecMedical] = useState('');
        const [expenseMedical, setExpenseMedical] = useState('');


        const body = {
            division: division,
            datemedical: dateMedical,
            descmedical: descMedical,
            expensemedical:expenseMedical
        };
        const resetForm = () => {
            setDivision("");
            setDescMedical("");
            setDatecMedical("");
            setExpenseMedical("");
        };

         const addMedical = () => {
             Resources.createMedical(body)
                 .then(res => {
                     resetForm();
                     Alert('Add Medical Form Success');
                 })
                 .catch(err => {
                     console.log(JSON.stringify(err));
                 });
         };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <SafeAreaView style={style.container2}>
            <ScrollView>
                <Text style={style.textareaContainer}>
                    Medical Reimbursement Request
                </Text>
                <Text style={style.textSM}>
                    Division
                </Text>

                <View style={style.viewPicker}>
                     <Picker
            selectedValue={selectedValue}
            mode={'dropdown'}
            style={{fontFamily:'Nunito-Light', marginTop:-5, }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Software Tailor" value="Software Tailor" />
            <Picker.Item label="Enablement" value="Enablement" />
             <Picker.Item label="Mokki design" value="Loyalti" />
          </Picker>
                </View>

                <Text style={style.textSM}>
                   Date
                </Text>

                <View>
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

               

                <Text style={style.textSM}>
                    Description Request *
                </Text>

                <View style={style.viewPicker}>
                    <TextInput
                    multiline={true}
                    placeholder="tell us about your health issue"
                    maxLength={200} 
                    style={style.textInput}
                    onChangeText={descMedical => setDescMedical(descMedical)}
                    value={descMedical}>
                </TextInput>
                </View>

              

                 <Text style={style.textSM}>
                    Total Expense
                </Text>

                <View style={style.viewPicker}>
                   <TextInput
                    multiline={true}
                    maxLength={200}
                    placeholder="" 
                    style={style.textInput}
                     onChangeText={expenseMedical => setExpenseMedical(expenseMedical)}
                    value={expenseMedical}>
                </TextInput>  
                </View>
                <Text style={style.textSM}>Receipt Attachment *</Text>

          <View style={style.buttonAttachment}>
            <Button
              icon={<Icon name="upload" size={15} color="white" />}
              iconRight
              title="Choose File "
            />
          </View>

                
           
                <TouchableOpacity onPress={addMedical} style={style.buttonSubmit}>
                    <Text style={style.textbtnSubmit} >Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TransportForm;


