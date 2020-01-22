// http://dosairnowdata.org/dos/historical/Bamako/2019/Bamako_PM2.5_2019_YTD.csv
import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Coins } from '../assets/coins.png';
import axios from 'axios'
import { DrawerItems } from 'react-navigation-drawer';

export default customNavProf = (props) => {
    return (
        <View style={styles.profileContainer}>
            <Image style={styles.profileImg} source={require('../assets/avatar.png')} />
            <Text style={{ fontSize: 20 }}>Hamo Musmulja</Text>
            <Text style={{ fontSize: 12 }}>Rovokopac uRudniku</Text>
            <View style={{ width: '100%', marginTop: 50 }}>
                <DrawerItems {...props} />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    // NAV STYLES
    profileContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    profileImg: {
        marginTop: 180,
        width: 103,
        height: 100,
    }

    //SCREN STYLES
})