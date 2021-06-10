import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View, Image, TouchableHighlight, StyleSheet, styles, SafeAreaView } from 'react-native';

import { Api } from './ApiUrl';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from "react-native";
import { BasketIcon } from "./BasketIcon";
import axios from 'axios';


// const API = 'https://jsonplaceholder.typicode.com/todos';
//import { Stores } from "./data/dataArrays";
//import { getNumberOfRecipes } from "./data/MockDataAPI";
export default class Store extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Shop"
        };
    };

    state = {
        Stores: []
    };
    componentDidMount() {
        this.load();
    }
    load() {
        axios.get(`${Api}/stores`)
            .then(res => {
                this.setState({
                    Stores: res.data
                })
            })
    }
    render() {
        return (
            <SafeAreaView>

                <BasketIcon></BasketIcon>
                <ScrollView>
                  
                    {
                        this.state.Stores.map(x =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Catagory", { storeId: x.id })}
                            >

                                <Card>
                                    <Card.Title style={{textAlign:'left',fontSize:20}}>{x.name}</Card.Title>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Card.Title style={{ color: 'gray', fontSize: 10 }}>{x.address}</Card.Title>
                                            <Card.Title style={{ color: 'gray', fontSize: 10, alignItems: 'flex-start' }}>{x.time}</Card.Title>
                                        </View>
                                    </View>
                                    <Card.Divider />
                                    <View key={x.id}>
                                        <Image
                                            style={{ height: 150 }}
                                            resizeMode="cover"
                                            source={{ uri: x.photo_url }}
                                        />
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                                {/* <Text style={{ textAlign: 'left', paddingTop: 10, fontSize: 20, fontWeight: 'bold' }}>{u.name}</Text> */}

                                                {/* {this.state.Store.map(x =>
                                <Text style={{ textAlign: 'right', paddingTop: 10, fontSize: 20 }}>{x.id}</Text>
                                
                            )} */}


                                            </View>
                                        </View>

                                    </View>
                                </Card>
                            </TouchableOpacity>

                        )
                    }



                </ScrollView>
            </SafeAreaView>
        );
    }
}












// <ScrollView>
// {
//     Stores.map((u, i) => {
//         return (

//             <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate("Catagory")}
//             >
//                 <Card>
//                     <Card.Title>{u.name}</Card.Title>
//                     <Card.Divider />
//                     <View key={i}>
//                         <Image
//                             style={{ height: 150 }}
//                             resizeMode="cover"
//                             source={{ uri: u.photo_url }}
//                         />
//                         <View style={{ flexDirection: 'row' }}>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
//                                 {/* <Text style={{ textAlign: 'left', paddingTop: 10, fontSize: 20, fontWeight: 'bold' }}>{u.name}</Text> */}

//                                 {/* {this.state.Store.map(x =>
//                                 <Text style={{ textAlign: 'right', paddingTop: 10, fontSize: 20 }}>{x.id}</Text>

//                             )} */}


//                             </View>
//                         </View>

//                     </View>
//                 </Card>
//             </TouchableOpacity>
//         );
//     })
// }



// </ScrollView>