/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import { Header } from "../../src/components/common";

import ClothesListItem from "../../src/ClothesListItem";

const App = () => {
  return (
    <>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <SafeAreaView>
            <Header headText="Our Products" />
          </SafeAreaView>
          <ClothesListItem />
    </>
  );
};

export default App;
