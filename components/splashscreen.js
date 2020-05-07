import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

class splashscreen extends Component {
    render() { 
      return (
        <LottieView
        source={require("./animation/9573-analytics.json")}
        loop
        autoPlay
        />
      );
    }
  }
  export default splashscreen;