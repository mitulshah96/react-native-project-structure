import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardSection, Button } from "../components/common";

export default ListItem = (props) => {

    const { name, description, icon } = props.data

    return(
            <Card>
                <CardSection>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Roboto-Bold" }}>{name}</Text>
                        <Text>{description}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        source={icon}
                        style={{
                            height: 300,
                            flex: 1,
                            width: null                        
                        }}
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