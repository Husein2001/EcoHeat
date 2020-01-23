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

                <Text style={styles.screenTitle}>Profile</Text>
                <Image style={styles.userImg} source={require('../assets/avatar.png')}></Image>
                <Text style={styles.name}>Alen Hodzic</Text>
                <Text style={styles.email}>alen.hodzic@gmail.com</Text>
                <Image style={styles.house} source={require('../assets/house.png')}></Image>
                <Text style={styles.location}>Envera Sehovica 23, Stari grad</Text>

                <TouchableOpacity style={styles.buttonEdit}><Text style={styles.buttonEditText}>Edit</Text></TouchableOpacity>

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
    },

    //SCREN STYLES
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    screenTitle: {
        fontSize: 32,
        marginTop: 24,
        marginBottom: 16,
        color: '#87B940'
    },
    userImg: {
        width: 164,
        height: 161,
        marginBottom: 24
    },
    name: {
        fontSize: 24,
        color: '#535353'
    },
    email: {
        fontSize: 16,
        color: '#707070'
    },
    house: {
        width: 60,
        height: 60,
        marginTop: 24,
        marginBottom: 12
    },
    location: {
        fontSize: 16,
        color: '#707070'
    },
    buttonEdit: {
        width: 270,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#87B940',
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24

    },
    buttonEditText: {
        fontSize: 18,
        color: '#707070'
    }
})