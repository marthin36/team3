import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  SafeAreaView,
  Picker,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {Card} from 'react-native-elements';
import style from './other.detail.style';
import moment from 'moment';

function OtherDetail({route, navigation}) {
  useEffect(() => {});


   const {division} = route.params;
  const {date} = route.params;
  const {description} = route.params;
  const {reimbusementtype} = route.params;
  const {totalExpense} = route.params;
  const {status} = route.params;
  const {id} = route.params;

  return (
    <SafeAreaView style={style.container2}>
      <ScrollView>
        <Text style={style.textareaContainer}>Data Other Reimbursement</Text>

        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          <Card containerStyle={style.card}>
            <View style={style.viewText}>
              <Text style={style.textTitle}>Request ID # :</Text>
              <Text style={style.textDetail}>
            {id}
              </Text>
              <Text style={style.textTitle}>Employee Name</Text>
              <Text style={style.textDetail}>Feber Sianipar</Text>

              <Text style={style.textTitle}>Division</Text>
              <Text style={style.textDetail}>{division}</Text>

              <Text style={style.textTitle}>Date</Text>
              <Text style={style.textDetail}> {moment(date).format('dddd,MMMM D YYYY')}</Text>

              <Text style={style.textTitle}>Reimbursement Type</Text>
              <Text style={style.textDetail}>{reimbusementtype}</Text>

              <Text style={style.textTitle}>Description Request</Text>
              <Text style={style.textDetail}>{description}</Text>

              <Text style={style.textTitle}>Total Expensi</Text>
              <Text style={style.textDetail}> Rp. {totalExpense}</Text>

              <Text style={style.textTitle}>Status</Text>
              <Text style={style.textPending}>{status}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OtherDetail;