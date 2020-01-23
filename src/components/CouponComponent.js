// http://dosairnowdata.org/dos/historical/Bamako/2019/Bamako_PM2.5_2019_YTD.csv
import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Coins } from '../assets/coins.png';
import axios from 'axios'

export default class CouponComponent extends React.Component {
    static navigationOptions = {
        drawerLabel: "My Collection",
    };
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={{ width: 286, height: 395 }} source={require('../assets/coupon1.png')} ></Image>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87B940',
        margin: 20,

    },
})