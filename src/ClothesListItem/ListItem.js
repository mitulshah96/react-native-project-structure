import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardSection, Button } from "../components/common";
import styles from "./styles"

export default ListItem = (props) => {

    const { name, description, icon } = props.data

    return(
            <Card>
                <CardSection>
                    <View style={styles.itemNameViewStyle}>
                        <Text style={styles.itemNameTextStyle}>{name}</Text>
                        <Text style={styles.itemDescriptionTextStyle}>{description}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        source={icon}
                        style={styles.imageStyle}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
    )
}