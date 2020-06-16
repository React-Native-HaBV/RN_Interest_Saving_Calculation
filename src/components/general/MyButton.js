import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const MyButton = ({ label, onpress, source, imageStyle, labelStyle, containerStyle}) => {

    return(
        <TouchableOpacity onPress={onpress}>
            <View style={containerStyle}>
                <Text style={labelStyle}> {label} </Text>
                <Image source={source} style={imageStyle}/>
            </View>
        </TouchableOpacity>
    );
};

export { MyButton };
