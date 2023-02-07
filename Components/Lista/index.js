// componente criado de suporte para o flatlist

import React, {Component} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; // 1 importando imagem, TouchableOpacity(botão sem design) 


class Lista extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data  //  4 - feed recebe props data(linha 92 app.js) da flatList que recebeu como dado o state feed que é uma array(ver linha 14 app.js)
        };
    }

    showLikes(like){  // 5 - funcao para mostrar e receber likes, (verifique linha 56) 
        let feed = this.state.feed  // variável feed recebe os dados de feed(linha 14 app.js)  

        if(feed.like <= 0){
            return;   // 5 - se like for igual menor que zero retorna vazio
        
        } else {  // 5 - senão  obs: o return tem que vir com () em seguida neste caso    

            return( // 5 - recebe numero de likes e depois uma arrow function dizendo que se numero de curtidas
                    // for maior que 1 retorna string curtidas senão retorna a string curtida    
                    <Text style={styles.likers}>{feed.like} {feed.like > 1 ? 'curtidas' : 'cuertida'}</Text>
            )       
            }
    }


    render(){
        return(
            <View style={styles.containerFeed}>  
                {/*Regra basica primeiro montra a estrutura depois aplicas os dados*/}
                <View style={styles.viewPerfil}>
                    <Image
                        source={this.state.feed.imgPerfil} // 4  source recebe endereco do state feed que recebeu dados do feed do App.js (leia linha 12)
                        style={styles.fotoPerfil}
                    />

                    {/* 4  recebe  do state feed.nome que recebeu dados do feed do App.js (leia linha 12) */}
                    <Text style={styles.nomeUser}>{this.state.feed.nome}</Text> 
                </View>

                <Image
                        resizeMode="cover"
                        source={this.state.feed.imgPublicacao} // 4  source recebe endereco do state feed que recebeu dados do feed do App.js (leia linha 12)
                        style={styles.fotoPublicacao}
                    />
                <View style={styles.containerBtn}>
                    <TouchableOpacity> 
                        <Image 
                            source={require('../../assets/image/like.png')}  //  importando foto direto da pasta do arquivo usando require
                            style={styles.iconeLike}  
                        />
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.btnSend}> 
                        <Image 
                            source={require('../../assets/image/send.png')}  //  importando foto direto da pasta do arquivo usando require
                            style={styles.iconeLike}  
                        />
                    </TouchableOpacity>        
                </View> 

                {/* 5 funcao que mostra a quantidade de likes que recebe como parametro o state.feed.like (linha 14 do app.js) */}
                {this.showLikes(this.state.feed.like)}  

                <View style={styles.containerFooter}>
                    <Text style={styles.nomeFooter}>
                        {/*  recebe dado do state feed que recebeu dados do feed do App.js (leia linha 12) */}
                        {this.state.feed.nome}  
                    </Text>
                    <Text style={styles.textFooter}>
                        {/*  recebe dado do state feed que recebeu dados do feed do App.js (leia linha 12) */}
                        {this.state.feed.descricao}
                    </Text>
                </View>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerFeed: {
      flex: 1,  // espaço da tela interia
       
    },
    viewPerfil: {
        flexDirection: 'row', // manter o container em uma linha(row)
        flex: 1, // ocupar todo espaco destinado
        alignItems: 'center', // manter itens ao centro 
        padding: 8, // espacamento interno de 8

     },
    nomeUser: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
        marginLeft: 10,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        
    }, 
    fotoPublicacao: {
        flex: 1,
        height: 400, // tamanho da foto
        alignItems: 'center', // centralizando imagem
        width: '100%',
    },
    containerBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 33,
        height: 33,
    },
    btnSend: {
        paddingLeft: 10,
    },
    containerFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFooter: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
    nomeFooter: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000',
        paddingLeft: 5,
    },
    likers:{
        fontWeight: 'bold',
        marginLeft: 5,
    }

 
  });


export default Lista;