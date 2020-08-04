import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Button, SafeAreaView, Picker, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.detail.style';
import * as Resources from '../../config/resource';
import {FlatList,} from 'react-native-gesture-handler';
import moment from 'moment';


function OvertimeDetail({route,navigation}) {
    useEffect(() => {

    })
  const {division} = route.params;
  const {date} = route.params;
  const {kindofday} = route.params;
  const {description} = route.params;
  const {meals} = route.params;
  const {transport} = route.params;
  const {total} = route.params;
  const {status} = route.params;
  const {id} = route.params;
    return (
        <SafeAreaView style={style.container2}>
            <ScrollView>
                <Text style={style.textareaContainer}>
                    Data Overtime Reimbursement
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
                                 <Text style={style.textDetail}> {moment(date).format('dddd,MMMM D YYYY')}</Text>
                            </Text>
                             <Text style={style.textTitle}>
                               Kind Of Day
                            </Text>
                            <Text style={style.textDetail}>
                                {kindofday}
                            </Text>
                            <Text style={style.textTitle}>
                                Description Request
                            </Text>
                            <Text style={style.textDetail}>
                               {description}
                            </Text>
                            <Text style={style.textTitle}>
                                Expense Meals
                            </Text>
                            <Text style={style.textDetail}>
                              Rp. {meals}
                            </Text>
                            <Text style={style.textTitle}>
                                Expense Transport
                            </Text>
                            <Text style={style.textDetail}>
                               Rp.{transport}
                            </Text>
                          
                            <Text style={style.textTitle}>
                               Total Expense
                            </Text>
                            <Text style={style.textDetail}>
                               Rp. {total}
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

export default OvertimeDetail;