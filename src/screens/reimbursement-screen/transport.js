import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Alert,
    SafeAreaView,
    Picker,
    RefreshControl, TouchableOpacity,
    ScrollView
} from 'react-native';
import { DataTable } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './medical.style';
import * as Resources from '../../config/resource';
import {FlatList} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
function Transport({ navigation }) {

   useEffect(() => {

   })

   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
   const [choosedate, setChooseDate] = useState(new Date());

   const onChange = (event, selectedDate) => {
     const currentDate = selectedDate;
     setShow(Platform.OS === 'ios');
     // setChooseDate(currentDate.substr(0, 15));
     setChooseDate(currentDate);
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
   const [selectedValue, setSelectedValue] = useState('Pending');
   const [selectedValues, setSelectedValues] = useState('');
   const tanggal = moment(choosedate).format('MMMM YYYY');
   const statuss = selectedValue;


    const [refreshing, setRefreshing] = useState(false);
    const isFocused =useIsFocused();
    
      const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

    // const [date, setDate] = useState([]);

      // useEffect(() => {
      //     getProjectList();
      // }, []);

 const [projectnames, setProjectname] = useState([]);
      useEffect(() => {
        getTransports();
      }, [isFocused]);
      
     const getTransports = () => {
       Resources.getTransports()
         .then(r => {
           console.log(r);
           setProjectname(r);
         })
         .catch(e => {
           console.log(e);
         });
     };

    return (
        <SafeAreaView style={style.container}>
            
            <View style={style.viewTextContainer}>
                <Text style={style.text1}>Transport Reimbursement</Text>
            </View>
            <Text style={style.textForm}>Status</Text>
            <View style={style.viewPicker}>
                <Picker
                    selectedValue={selectedValue}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    {/* <Picker.Item label="All" value="all" /> */}
                    <Picker.Item label="Pending" value="Pending" />
                    <Picker.Item label="Approved" value="Approved" />
                    <Picker.Item label="Rejected" value="Rejected" />
                </Picker>
            </View>
            <Text style={style.textForm}>Sort By</Text>
            <View style={style.viewPicker}>
                <Picker
                    selectedValue={selectedValues}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValues(itemValue)}>
                    <Picker.Item label="Newest to Oldest" value="nto" />
                    <Picker.Item label="Oldest to Newest" value="otn" />
                </Picker>
            </View>

        <View style={style.viewDate1}>
            <View style={style.viewDate2}>
             
                <View style={{flex: 2, justifyContent: 'center'}}>
                  <Text style={{marginLeft: 5, fontSize: 15}}>{tanggal}</Text>
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
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                format = "YYYY-MM-DD"
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>

            {/* <View style={style.viewPickerDate}>
                <Picker
                    selectedValue={selectedValue}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="July 2020" value="java" />
                    <Picker.Item label="May 2020" value="js" />
                    <Picker.Item label="April 2020" value="js" />
                    <Picker.Item label="March 2020" value="js" />
                    <Picker.Item label="February 2020" value="js" />
                    <Picker.Item label="January 2020" value="js" />
                </Picker>
            </View> */}

            <DataTable style={style.dataTable}>
                <DataTable.Header>
                    <DataTable.Title><Text style={style.titleTable}>Submited</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={style.titleTable}>Category</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={style.titleTable}>Status</Text></DataTable.Title>
                    <DataTable.Title numeric><Text style={style.titleTable}>Action</Text></DataTable.Title>
                </DataTable.Header>

              

         
<View
        style={{
       
        }}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={projectnames}
          renderItem={({item}) => (
            moment(item.date).format('MMMM YYYY') === tanggal &&
              item.status === statuss ?
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 2,
                height: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 5}}>{moment(item.date).format('MMMM D YYYY')}</Text>
                
              </View>
                 <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 5}}>Transport</Text>
                
              </View>
                <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 5}}>{item.status}</Text>
                
              </View>
              <View
                style={{
                  width: 55,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#22b0f7'
                }
                }>
                {/* <TouchableOpacity onPress={() => navigation.navigate('MedicalDetail', item)}>
                  <Text style={{color: '#FFFFFF'}}>Detail</Text>
                </TouchableOpacity> */}
                {/* <Text
                            onPress={() =>
                                Alert.alert(
                                    "Action",
                                    "",
                                    [
                                        {
                                            text: "View Detail ",
                                            onPress: () => { navigation.navigate('TransportDetail',item) },
                                            style: "cancel",
                                            color: '#ffffff'
                                        
                                        },
                                        { text: "Print", onPress: () => console.log("Print") }
                                    ],
                                    { cancelable: false }
                                )
                            }>
                            Tools
                        </Text> */}
                   <TouchableOpacity
                onPress={() =>  { navigation.navigate('TransportDetail',item) }}
                style={style.textbtnRequests}>
                <Text  style={style.textbtnRequests}>
                    View Detail
                </Text>
            </TouchableOpacity>
              </View>
            </View>: null
          )}
        />
      </View>
      


               <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={(page) => { console.log(page); }}
                    label="1-2 of 6"
                /></DataTable>

        
            
                           <TouchableOpacity
                onPress={() => { navigation.navigate('TransportAdd') }}
                style={style.buttonRequest}>
                <Text style={style.textbtnRequest}>
                    Request
                </Text>
            </TouchableOpacity>
             
        </SafeAreaView>
    )
}

export default Transport;


