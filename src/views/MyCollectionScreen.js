// http://dosairnowdata.org/dos/historical/Bamako/2019/Bamako_PM2.5_2019_YTD.csv
import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { Coins } from '../assets/coins.png';
import axios from 'axios'
import CouponComponent from '../components/CouponComponent'

export default class MyCollectionScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: "My Collection",
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={styles.coinsImg} source={require('../assets/burgerWhite.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.screenName}>
                    My Collection
                </Text>
                <Text style={styles.coinsWallet}>Coins in wallet: 23</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.couponContainer}>
                        <CouponComponent />
                        <CouponComponent />
                        <CouponComponent />
                        <CouponComponent />
                    </View>
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#87B940'
    },
    header: {
        height: 50,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    coinsImg: {
        width: 35,
        height: 31,
        marginLeft: 8
    },
    screenName: {
        color: 'white',
        marginTop: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30
    },
    couponContainer: {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#87B940'
    },
    coinsWallet: {
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        marginTop: 12

    }
})