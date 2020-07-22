import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import Medical from '../../../app/assets/icons/medical.svg'
import Travel from '../../../app/assets/icons/travel.svg'
import Alarm from '../../../app/assets/icons/alarm.svg'
import More from '../../../app/assets/icons/more.svg'


export default class index extends Component {
  constructor(props) {
    super(props);
    this.moveToDayOff = this.moveToDayOff.bind(this);
    this.moveToSick = this.moveToSick.bind(this);
    this.moveToMedical = this.moveToMedical.bind(this);
    this.moveToTransport = this.moveToTransport.bind(this);
    this.moveToOther = this.moveToOther.bind(this);
  }
  moveToDayOff() {
    this.props.navigation.navigate('Overtime');
  }

  moveToSick() {
    this.props.navigation.navigate('Sick');
  }
  moveToMedical(){
    this.props.navigation.navigate('Medical');
  }
  moveToTransport(){
    this.props.navigation.navigate('Transport');
  }
  moveToOther(){
    this.props.navigation.navigate('Other');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, marginLeft: 25 }}>
          <Text style={styles.text2}>Reimbursement</Text>
        </View>

        <View style={{flex:7, flexDirection:'row',alignSelf:'center',padding: 10}}>
                    <Card containerStyle={styles.card}>
                   <TouchableOpacity style={styles.Button} onPress={this.moveToMedical}>
                        <Medical width={70} height={70} />
                        <Text style={styles.text}>Medical</Text>
                    </TouchableOpacity>
                    </Card>
                    <Card containerStyle={styles.card}>
                    <TouchableOpacity style={styles.Button} onPress={this.moveToTransport}>
                        <Travel width={70} height={70}/>
                        <Text style={styles.text}>Transport</Text>
                    </TouchableOpacity>
                    </Card>
                     
                </View>
                <View style={{flex:11, flexDirection:'row',alignSelf:'center'}}>
                    <Card containerStyle={styles.card}>
                   <TouchableOpacity style={styles.Button} onPress={this.moveToDayOff}>
                        <Alarm width={70} height={70} />
                        <Text style={styles.text}>Overtime</Text>
                    </TouchableOpacity>
                    </Card>
                    <Card containerStyle={styles.card}>
              <TouchableOpacity style={styles.Button} onPress={this.moveToOther}>
                        <More width={70} height={70}/>
                        <Text style={styles.text}>Other</Text>
                    </TouchableOpacity>
                    </Card>
                    </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCFF',
  },
  card: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 7,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
    color: '#505050',
    paddingTop: 13,
  },
  text2: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 5,
    color: '#505050',
    paddingTop: 13,
  },
});
