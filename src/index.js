import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceScreen from './Device';
import UserScreen from './User';

const Stack = createStackNavigator();

const Routers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Device"
                    component={DeviceScreen}
                    options={{ title: 'Title' }}
                />
                <Stack.Screen name="User" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routers;