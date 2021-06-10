import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'



import { Avatar, Card, Badge, Icon, withBadge } from 'react-native-elements'
import { Button } from 'react-native'

export default function Cards() {
    const basket = useSelector(s => s.basket)
    return <View style={{ flex: 1 }}>
        <ScrollView>

            <View style={{ flex: 1 }}>
            {<Text style={{textAlign:'center',marginTop:10}}>({basket.length}) Items</Text>}
                {
                    basket.map(i =>

                        <Card>
                            <View style={{flexDirection:'row' }}>
                                <View>
                                <Image
                                style={{ height: 90, width: 90 }}
                                resizeMode="cover"
                                source={{ uri: i.photo_url }}
                            />
                                </View>
                                <View style={{paddingLeft:10}}>
                                    <Text style={{fontWeight:'bold'}}>{i.ProductName}</Text>
                                    <Text>{i.category}</Text>
                                    <Text style={{paddingTop:10,fontSize:20,color:'navy'}}>{i.price} IQD</Text>
                                </View>


                            </View>

                            
                        </Card>
                    )}

            </View>
        </ScrollView>
        <View style={{padding: 12}}>
        <Text style={{textAlign: 'center', fontSize: 18}}>Total: {basket.reduce((acc, i) => acc + i.price, 0)} IQD</Text>
        </View>
    </View>
}