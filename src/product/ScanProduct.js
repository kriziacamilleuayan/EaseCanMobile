import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { Container, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import logo from "../assets/easescan.png";


export default class ScanProduct extends Component{
    render(){
        return(
            <Container>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1.5 }}
                    locations={[0, 0.5]}
                    colors={["#1DBAB4", "#ACB7AE"]}
                >
                    <View style={styles.container}>
                        <Image source={logo} style={styles.logo} />

                    </View>


                </LinearGradient>
            </Container>
        )
    }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        padding: 10
    },
    logo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '50%'
    }
})