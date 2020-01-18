import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchNewsInitiate } from '../redux/Action/fetchNewsAction';

const NewsList = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNewsInitiate())

    },[])

    return(
        <View>
            <TouchableOpacity onPress={()=>{
                // console.log('clicked')
                // props.navigation.navigate('home')
                
            }}><Text>Hello Dude</Text></TouchableOpacity>
        </View>
    )
}
export default NewsList;