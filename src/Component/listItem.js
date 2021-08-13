import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwitchToggle from "react-native-switch-toggle";

const listItem = ({ data, index, onPress }) => {
    return (
        <View style={styles.container} >
            <View style={styles.leftView}>
                <View style={styles.picView} />
            </View>
            <View style={styles.rightView}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.titleText}>{data.attributes.name}</Text>
                    <Text style={{ color: '#a6a6a9', fontWeight: '500', fontSize: 17 }}>{data.attributes.model_number}</Text>
                </View>
                <View style={styles.switchView}>
                    <View>
                        <SwitchToggle
                            switchOn={data.attributes.state === 'locked' ? true : false}
                            onPress={() => { onPress(index, data) }}
                            circleColorOff='#ffffff'
                            circleColorOn='#ffffff'
                            backgroundColorOn='#4fd262'
                            backgroundColorOff='#d2584f'
                            containerStyle={{
                                marginTop: 16,
                                width: 50,
                                height: 30,
                                borderRadius: 25,
                                padding: 3,
                            }}
                            circleStyle={{
                                width: 25,
                                height: 25,
                                borderRadius: 20,
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source={data.attributes.state === 'locked' ? require('../assets/images/lockGreen.png') : require('../assets/images/lockRed.png')}
                        />
                        <Text style={{ marginStart: 10, fontSize: 20, color: data.attributes.state === 'locked' ? 'green' : '#d2584f' }}>{data.attributes.state}</Text>
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
        flex: 0.35
    },
    rightView: {
        flex: 0.65,
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
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 32,
    },
    image: {
        width: 20,
        height: 25,
    }

});

export default listItem;