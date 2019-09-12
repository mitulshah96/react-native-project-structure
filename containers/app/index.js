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

import { Header } from "../../src/components/common";

import ClothesListItem from "../../src/ClothesListItem";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <Header headText="Hello" />
          <ClothesListItem />
      </SafeAreaView>
    </>
  );
};

export default App;
