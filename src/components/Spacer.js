import React from 'react';
import { View, StyleSheet } from 'react-native';

//ONLY PURPOSE IS TO GIVE A MARGIN BETWEEN ELEMENTS. kkkk

const Spacer = ({ children }) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default Spacer;