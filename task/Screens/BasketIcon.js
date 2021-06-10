import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

export function BasketIcon() {
    const navigation = useNavigation();


    const basket = useSelector(s => s.basket)
    const BadgedIcon = withBadge(1)(Icon)
    return <View style={{ height: 75 ,paddingRight:15}}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
   
            <Icon
                style={{ paddingRight: 15 }}
containerStyle={{position:'absolute',top:10}}
                name='shopping-basket'
                type='font-awesome'
                color={basket.length != 0 ? 'green' : 'gray'}
                disabled={basket.length != 0 ? false : true}
                // basket.length != 0?dis:'gray'
                raised
            
                onPress={() => navigation.navigate("Card")} />
                <Badge

status="error"
value={<Text style={{ fontSize: 16, color: 'white' }}> {basket.length}</Text>}
containerStyle={{ position: 'absolute', margin: 14, top: 0, right: 20 }}
/>
            {/* <Text>{basket.length} items</Text> */}
        {/* {
            basket.map(i => <Text>{i.price}</Text>)
        } */}
        </View>
    </View>
}