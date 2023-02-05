// componente criado de suporte para o flatlist

import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; // 1 importando imagem, TouchableOpacity(botão sem design) 


class Lista extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data  // flatlist state feed recebe props data, que é onde vem a info no caso do data do flatlist
        };
    }



    render(){
        return(
            <View>
                <Text>Feed....</Text>
            </View>
        )
    }
}


export default Lista;