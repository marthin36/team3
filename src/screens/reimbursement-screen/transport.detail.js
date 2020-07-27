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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.detail.style';

function TranportDetail({route,navigation}) {
  const getTransport = () => {
    Resources.getTransport()
      .then(r => {
        console.log(r);
        setDate(r);
      })
      .catch(e => {
        console.log(e);
      });
  };
      useEffect(() => {

    })
 const {division} = route.params;
  const {date} = route.params;
  const {description} = route.params;
  const {totalExpense} = route.params;
  const {status} = route.params;
  const {departureLocation} = route.params;
  const {destinationLocation} = route.params;
  const {id} = route.params;
  return (
    <SafeAreaView style={style.container2}>
      <ScrollView>
        <Text style={style.textareaContainer}>
          Data Transport Reimbursement
        </Text>

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
              <Text style={style.textDetail}> {division}</Text>

              <Text style={style.textTitle}>Date Incurred</Text>
              <Text style={style.textDetail}>{date}</Text>

              <Text style={style.textTitle}>Description Request</Text>
              <Text style={style.textDetail}>{description}</Text>

              <Text style={style.textTitle}>Departure Location</Text>
              <Text style={style.textDetail}>{departureLocation}</Text>

              <Text style={style.textTitle}>Description Location</Text>
              <Text style={style.textDetail}>{destinationLocation}</Text>

              <Text style={style.textTitle}>Total Expensi</Text>
              <Text style={style.textDetail}>Rp.{totalExpense}</Text>

              <Text style={style.textTitle}>Status</Text>
              <Text style={style.textPending}>{status}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TranportDetail;