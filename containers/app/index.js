/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Card, CardSection, Header } from '../../src/components/common';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <Header headText="Hello" 
        />
        <View style={{backgroundColor: '#fff'}}>
          <Card>
            <CardSection>
              <Text>Hello World</Text>
            </CardSection>
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
