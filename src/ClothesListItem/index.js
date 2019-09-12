import React, { Component } from "react";
import { FlatList } from "react-native";
import {clothesData} from './data';
import ListItem from "./ListItem";

export default class ClothesListItem extends Component {

    renderItem = ({ item }) => {
        return(
                <ListItem data={item} />
        )
    }


    render() {
        return(
            <FlatList 
                data={clothesData}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 70}}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}