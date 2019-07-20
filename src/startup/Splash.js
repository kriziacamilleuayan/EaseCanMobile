import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { Container, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import logo from "../assets/easescan.png";
//import console = require('console');

export default class Splash extends Component {
  state = {
    time: 3
  };
  componentDidMount() {
    console.log(window);
    this.timerID = setInterval(() => this.countdown(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("Closing splash page...");
    Actions.signIn();
  }
  countdown() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1
      });
      console.log(this.state.time);
    } else {
      this.componentWillUnmount();
    }
  }
  render() {
    return (
      <Container>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          locations={[0, 0.5]}
          colors={["#ACB7AE", "#1DBAB4"]}
        >
          <View style={styles.container}>
            {/* <Image source={logo} style={styles.logo} /> */}
            <Image
              source={require('../assets/giphy.gif')}
              style={{width: 100, height:100 }}
            />
          </View>
        </LinearGradient>
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
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "50%"
  }
});
