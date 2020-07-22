import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Button, SafeAreaView, Picker, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.detail.style';
import * as Resources from '../../config/resource';
import {FlatList,} from 'react-native-gesture-handler';
function MedicalDetail({route,navigation}) {
    useEffect(() => {

    })
 const {division} = route.params;
  const {datemedical} = route.params;
  const {descmedical} = route.params;
  const {expensemedical} = route.params;
  const {status} = route.params;
  const {id} = route.params;
    return (
        <SafeAreaView style={style.container2}>
            <ScrollView>
                <Text style={style.textareaContainer}>
                    Data Medical Reimbursement
                </Text>

                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                    <Card containerStyle={style.card}>
                        <View style={style.viewText}>
                            <Text style={style.textTitle}>
                                Request ID # :
                            </Text>
                            <Text style={style.textDetail}>
                                 {id}
                            </Text>
                            <Text style={style.textTitle}>
                                Employee Name
                            </Text>
                            <Text style={style.textDetail}>
                                Feber Sianipar
                            </Text>
                            <Text style={style.textTitle}>
                                Division
                            </Text>
                            <Text style={style.textDetail}>
                                   {division}
                            </Text>
                            <Text style={style.textTitle}>
                                Data Incurred
                            </Text>
                            <Text style={style.textDetail}>
                                {datemedical}
                            </Text>
                            <Text style={style.textTitle}>
                                Description Request
                            </Text>
                            <Text style={style.textDetail}>
                               {descmedical}
                            </Text>
                          
                            <Text style={style.textTitle}>
                                Total Expense
                            </Text>
                            <Text style={style.textDetail}>
                                {expensemedical}
                            </Text>
                            <Text style={style.textTitle}>
                                Status
                            </Text>
                            <Text style={style.textDetail}>
                                {status}
                            </Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MedicalDetail;