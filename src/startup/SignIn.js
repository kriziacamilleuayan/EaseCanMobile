import React, { Component } from "react";
import { StyleSheet, Dimensions, Image, View } from "react-native";
import {
  Container,
  Text,
  Header,
  Left,
  Title,
  Content,
  Right,
  Form,
  Item,
  Input,
  Label,
  ListItem,
  CheckBox,
  Body,
  Button
} from "native-base";
import logo from "../assets/easescan.png";
import { Actions } from "react-native-router-flux";
import Toast from "react-native-simple-toast";

export default class SignIn extends Component {
  state = { name: "", mobile: "", age: "" };

  submit = a => {
    if (a) {
      // input code here to save data locally
      Toast.show("Successfully Saved.", Toast.LONG);
    }
    Actions.scanProduct();
  };

  handleChange = () => {
    // onChange handler
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#1DBAB4" }}>
          <Left />
          <Body>
            <Title>Sign in</Title>
          </Body>
        </Header>

        <Content style={{ padding: 10 }}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.form}>
            <Form>
              <Item inlineLabel>
                <Label>Name: </Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>Mobile No.: </Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>Age: </Label>
                <Input />
              </Item>
              {/* <Item inlineLabel>
                <Label>Allergies: </Label>
                <Input />
              </Item> */}
            </Form>
            {/* <ListItem>
              <CheckBox checked={true} />
              <Body>
                <Text>Enable Voice Text</Text>
              </Body>
            </ListItem> */}
          </View>
        </Content>
        <View style={styles.btnWrapper}>
          <Button
            style={styles.secondaryBtn}
            transparent
            bordered
            block
            rounded
            onPress={() => this.submit(false)}
          >
            <Text>Skip</Text>
          </Button>
          <Button
            style={styles.primaryBtn}
            onPress={() => this.submit(true)}
            block
            rounded
          >
            <Text>Submit</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    padding: 10
  },
  logo: {
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "10%"
  },
  form: {
    margin: 10
  },
  btnWrapper: {
    flexDirection: "row",
    padding: 15
  },
  primaryBtn: {
    backgroundColor: "#1DBAB4",
    marginLeft: "auto",
    color: "#eeeeee",
    alignSelf: "center"
  },
  secondaryBtn: {}
});
