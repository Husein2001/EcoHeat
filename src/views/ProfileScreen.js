// http://dosairnowdata.org/dos/historical/Bamako/2019/Bamako_PM2.5_2019_YTD.csv
import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Coins } from '../assets/coins.png';
import axios from 'axios'

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: "Profile",

    };





    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    // NAV STYLES
    profileContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    profileImg: {
        width: 100,
        height: 100,
    }

    //SCREN STYLES
})