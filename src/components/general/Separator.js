import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = ({ children }) => {
    return(
        <View style = { styles.separator}>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    separator: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        // borderBottomColor: '#F1F1F1',
        borderBottomColor: 'gray'
    }
});

export { Separator };
