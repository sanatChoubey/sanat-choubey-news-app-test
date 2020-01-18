import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardItem, Body } from 'native-base';

import { fetchNewsInitiate, } from '../redux/Action/fetchNewsAction';
import { selectedNewsAction } from '../redux/Action/selectedNewsAction';

const { height, width } = Dimensions.get('window');

const NewsList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNewsInitiate())
    }, [])
    const fetchedData = useSelector(state => state.fetchNews)
    
    
    const renderDatafunc = ({ item }) => (
        <TouchableOpacity onPress= { () => {
            dispatch(selectedNewsAction(item))
            props.navigation.navigate('Detail')
        } }>
            <Card >
                <CardItem header>
                    <Text style={styles.headline}>{item.title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image
                            style={styles.ImageStyle}
                            source={{ uri: item.urlToImage }}
                        />
                        <Text>
                            {item.description}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>Source:{item.source.name}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )
    const ListData = () => {
        if (fetchedData.Loading) {
            return (
                <View>
                    <Text>
                        Pleasewait
                    </Text>
                </View>
            )
        }
        if (fetchedData.NewsData) {
            return (<View style={styles.flatstyle}>

                <FlatList
                    data={fetchedData.NewsData}
                    renderItem={renderDatafunc}
                />
            </View>)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your Daily Read
            </Text>
            {ListData()}
        </View>
    )
}
export default NewsList;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        margin: 10
    },
    container: {
        backgroundColor: "white",
        display: "flex",
        width: width,
        height: height
    },
    flatstyle: {
        width: width,
        height: height,
        backgroundColor: "orange"
    },
    headline: {
        fontSize: 20
    },
    ImageStyle:{
        width:width - 50,
        height:300
    }
});