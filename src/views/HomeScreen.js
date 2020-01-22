// http://dosairnowdata.org/dos/historical/Bamako/2019/Bamako_PM2.5_2019_YTD.csv
import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Coins } from '../assets/coins.png';
import axios from 'axios'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',

    };

    state = {
        AQI: 0,
        TEMP: 23
    }

    componentWillMount() {
        axios.get('https://www.dosairnowdata.org/dos/AllPosts24Hour.json').then(res => {
            //console.log(res.data.Sarajevo.monitors[0].aqi[23])
            this.setState({ AQI: res.data.Sarajevo.monitors[0].aqi[23] })
        }).catch(err => {
            console.log('ERR')
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.menuBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image style={styles.coinsImg} source={require('../assets/burger.png')} />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.coinsBar}>
                        <Text style={{ fontSize: 20, color: '#919191' }}>33</Text>
                        <Image style={styles.coinsImg} source={require('../assets/coins.png')} />
                    </View>
                </View>
                <View style={styles.userInfoBox}>
                    <Text style={styles.userMessage}>Alen's home</Text>
                    <Text style={styles.screenTitle}>TEMPERATURE</Text>
                    <View elevation={5} style={styles.circle}>
                        <View style={styles.circleInner}>
                            <Text style={{ fontSize: 64 }}>  {this.state.TEMP}°</Text>
                            <Text style={{ fontSize: 18 }}>CELSISUS</Text>

                        </View>
                    </View>
                    <View style={styles.aqiBox}>
                        <Text style={{ fontSize: 21 }}>Sarajevo Air Quality {this.state.AQI}</Text>
                    </View>
                    <Text>Save mode - recommended</Text>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Save mode</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeNavItem: {
        width: '100%',
        height: 30,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 53,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuBar: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'flex-start',
        paddingLeft: 6
    },
    coinsBar: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 6
    },
    coinsImg: {
        width: 35,
        height: 31
    },
    userInfoBox: {
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    userMessage: {
        color: '#87B940',
        fontSize: 32,
    },

    screenTitle: {
        marginTop: 32 - 16 - 8,
        fontSize: 20,
        color: 'grey'
    },

    circle: {
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        height: 260,
        borderRadius: 270 / 2,
        backgroundColor: '#87B940',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0

    },

    circleInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        backgroundColor: 'white'
    },

    aqiBox: {
        width: 300,
        marginTop: 48,
        height: 54,
        borderRadius: 17,
        borderWidth: 3,
        borderColor: '#A63AEE',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        width: 300,
        height: 100,
        backgroundColor: '#87B940',
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24

    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        justifyContent: 'center'
    }
})