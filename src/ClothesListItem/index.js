import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import {clothesData} from './data';
import ListItem from "./ListItem";

export default class ClothesListItem extends Component {

    state={
        loading: true
    }


    componentDidMount() {
       setTimeout(() => {
           this.setState({
               loading: false
           })
       }, 3000)
    }
 
    renderItem = ({ item }) => {
        return(
                <ListItem data={item} />
        )
    }
    
    render() {

        const { loading } = this.state

        return(
          loading ? (  
              <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ActivityIndicator size="large" color="#333" />
              </View> 
          ) : 
            <FlatList 
                data={clothesData}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 15, backgroundColor: "#FFF" }}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}