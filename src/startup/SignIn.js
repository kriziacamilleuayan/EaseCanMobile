import React, { Component } from 'react';
import {StyleSheet, Dimensions, Image, View} from 'react-native';
import { Container, Text, Header, Left, Title, Content, Right, Form, Item, Input, Label, ListItem, CheckBox, Body } from 'native-base';
import logo from '../assets/easescan.png'

export default class SignIn extends Component {
    render() {
        return (
            <Container>
                <Header padder={false} style={{ backgroundColor: "#1DBAB4" }}>
                    <Left style={{ padding: 0 }}>
                        <Title>Sign in</Title>
                    </Left>
                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <Image source={logo} style={styles.logo} />
                    <View style={styles.form}>
                        <Form>
                            <Item inlineLabel>
                                <Label>Name</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label>Mobile No.</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label>Age</Label>
                                <Input />
                            </Item>
                            <Item inlineLabel>
                                <Label>Allergies</Label>
                                <Input />
                            </Item>
                        </Form>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Enable Voice Text</Text>
                            </Body>
                        </ListItem>
                    </View>
                </Content>
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