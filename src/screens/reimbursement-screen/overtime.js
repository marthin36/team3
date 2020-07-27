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
import style from './overtime.style';
import * as Resources from '../../config/resource';
import {FlatList} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
function Medical({ navigation }) {

    useEffect(() => {

    })
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();
    const [selectedValue, setSelectedValue] = useState("All");
      const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

    const [projectname, setProjectname] = useState([]);

      useEffect(() => {
          getOvertimeList();
      }, [isFocused]);

      const getOvertimeList = () => {
          Resources.getOvertimeList()
              .then((r) => {
                  console.log(r);
                  setProjectname(r);
              })
              .catch((e) => {
                  console.log(e);
              });
      };
    return (
        <SafeAreaView style={style.container}>
            
            <View style={style.viewTextContainer}>
                <Text style={style.text1}>Overtime Reimbursement</Text>
            </View>
            <Text style={style.textForm}>Status</Text>
            <View style={style.viewPicker}>
                <Picker
                    selectedValue={selectedValue}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="All" value="all" />
                    <Picker.Item label="Pending" value="pending" />
                    <Picker.Item label="Approved" value="Approved" />
                    <Picker.Item label="Rejected" value="Rejected" />
                </Picker>
            </View>
            <Text style={style.textForm}>Sort By</Text>
            <View style={style.viewPicker}>
                <Picker
                    selectedValue={selectedValue}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Newest to Oldest" value="nto" />
                    <Picker.Item label="Oldest to Newest" value="otn" />
                </Picker>
            </View>

            <View style={style.viewPickerDate}>
                <Picker
                    selectedValue={selectedValue}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Juni 2020" value="java" />
                    <Picker.Item label="May 2020" value="js" />
                    <Picker.Item label="April 2020" value="js" />
                    <Picker.Item label="March 2020" value="js" />
                    <Picker.Item label="February 2020" value="js" />
                    <Picker.Item label="January 2020" value="js" />
                </Picker>
            </View>

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
          data={projectname}
          renderItem={({item}) => (
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
                <Text style={{marginLeft: 5}}>{item.Date}</Text>
                
              </View>
                 <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: 5}}>Overtime</Text>
                
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
                <Text
                            onPress={() =>
                                Alert.alert(
                                    "Action",
                                    "",
                                    [
                                        {
                                            text: "View Detail ",
                                            onPress: () => { navigation.navigate('OvertimeDetail',item) },
                                            style: "cancel",
                                            color: '#ffffff'
                                        
                                        },
                                        { text: "Print", onPress: () => console.log("Print") }
                                    ],
                                    { cancelable: false }
                                )
                            }>
                            Tools
                        </Text>
              </View>
            </View>
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
                onPress={() => { navigation.navigate('OvertimeAdd') }}
                style={style.buttonRequest}>
                <Text style={style.textbtnRequest}>
                    Request
                </Text>
            </TouchableOpacity>
             
        </SafeAreaView>
    )
}

export default Medical;


