import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Card, CardItem, Body } from 'native-base';

const { height, width } = Dimensions.get('window');

const Detail = () => {
    const selectedstate = useSelector(state => state.selectedNews)
    if (selectedstate) {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem header>
                        <Text style={styles.headline}>{selectedstate.title}</Text>
                    </CardItem>
                    <CardItem >
                        <Text >{selectedstate.publishedAt}</Text>
                    </CardItem>
                    <CardItem >
                        <Text >{selectedstate.author}</Text>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Image
                            style={styles.ImageStyle}
                            source={{ uri: selectedstate.urlToImage }}
                        />
                        <Text>
                            {selectedstate.description}
                        </Text>
                    </Body>
                </CardItem>
                    <CardItem >
                        <Text>Source:{selectedstate.source.name}</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }
    else{
        return <View>
            <Text>
                PleaseWait...
            </Text>
        </View>
    }
}
export default Detail

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: "white"
    },
    ImageStyle:{
        width:width - 50,
        height:300
    },
    headline:{
        fontSize: 20
    }
})