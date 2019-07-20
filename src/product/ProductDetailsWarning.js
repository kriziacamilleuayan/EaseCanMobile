import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { Container, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

export default class ProductDetailsWarning extends Component{
    render(){
        return(
            <Container>

                <Text>Product name goes here</Text>
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
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '10%'
    },
    form: {
        margin: 10
    }
})