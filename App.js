/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabs from './components/Maintabs';
import SplashScreen from './components/splashscreen';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );}
  
    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask();
  
      if (data !== null) {
        this.setState({ isLoading: false });
      }
    }

    render() {
      if (this.state.isLoading) {
        return <SplashScreen />;
      }
  
      return (
        <MainTabs/>
      );
    }
  }

export default App;

