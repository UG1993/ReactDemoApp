import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import moment from 'moment';

const listUserItem = ({ data, index, onPress }) => {
    return (
        <View style={styles.container} >
            <View style={styles.leftView}>
                <View style={styles.picView} />
            </View>
            <View style={styles.rightView}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.titleText}>{data.attributes.name}</Text>
                    <Text style={{ color: '#a6a6a9', fontWeight: '500', fontSize: 17 }}>{data.attributes.email}</Text>
                    <Text style={{ color: '#a6a6a9', fontWeight: '600', fontSize: 17 }}>{moment(data.attributes.starts_at).format("MMM YY HH:MM") +' - '+ moment(data.attributes.ends_at).format("MMM YY HH:MM")}</Text>
                </View>
                <View style={styles.switchView}>
                    <View style={{ backgroundColor: data.attributes.status === 'current' ? '#c5f6a7' : '#f4f6a7', padding: 8, borderRadius: 25, width: 90, alignItems: 'center' }}>
                        <Text style={{ textTransform: 'uppercase' }}>{data.attributes.status === 'current' ? 'Active' : 'Upcoming'}</Text>
                    </View>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5
    },
    leftView: {
        flex: 0.3
    },
    rightView: {
        flex: 0.7,
        justifyContent: 'space-between'
    },
    picView: {
        height: 80,
        width: 80,
        borderRadius: 80,
        borderColor: '#dadada',
        borderWidth: 1,
        backgroundColor: '#efefef'
    },
    titleText: {
        fontSize: 22,
        fontWeight: '700'
    },
    switchView: {
        marginTop: 10,
        alignItems : 'flex-end'
    },
    image: {
        width: 20,
        height: 25,
    }

});

export default listUserItem;