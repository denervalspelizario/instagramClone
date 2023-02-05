import react from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'; // 1 importando imagem, TouchableOpacity(botão sem design) e flatlist para  lista do feed
import { Component } from 'react/cjs/react.production.min';

// import das imagens do feed
import FotoPerfil1 from './assets/image/imageFeed/d1.jpeg';  // importacao de imagem perfil
import FotoPublicacao1 from './assets/image/imageFeed/d2.jpeg'; // importacao de imagem publicacao

class App extends Component{  
  constructor(props){
    super(props);
    this.state={
      feed : [  // array de objetos com os dados que vão ser usados para simular o feed instagram 
        {
          id: '1', 
          nome: 'Denerval  S Pelizario',
          imgPerfil: FotoPerfil1,  // uso da foto importada
          imgPublicacao:  FotoPublicacao1, // uso da foto importada
          likeada: false,
          liker: 0
        },
        {
          id: '2', 
          nome: 'Jessika',
          imgPerfil: FotoPerfil1,
          imgPublicacao:  FotoPublicacao1,
          likeada: false,
          liker: 0
        },
        {
          id: '3', 
          nome: 'Gabi Chagas',
          imgPerfil: FotoPerfil1,
          imgPublicacao:  FotoPublicacao1,
          likeada: false,
          liker: 0
        },
        {
          id: '4', 
          nome: 'Pedrão',
          imgPerfil: FotoPerfil1,
          imgPublicacao:  FotoPublicacao1,
          likeada: false,
          liker: 0
        },
        {
          id: '5', 
          nome: 'Tom',
          imgPerfil: FotoPerfil1,
          imgPublicacao:  FotoPublicacao1,
          likeada: false,
          liker: 0
        },
      ]
    }
  }
  
  
  
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('./assets/image/logo.png')}  // importando foto direto da pasta do arquivo usando require
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
              source={require('./assets/image/send.png')} // importando foto direto da pasta do arquivo usando require
              style={styles.send}
            />
          </TouchableOpacity>
          

        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // espaço da tela interia
    paddingVertical: 30, // espaçamento interno vertical
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    shadowColor: '#000',  // cor da sombra
    elevation: 1, // cria um nivel acima pra dar sensação de sombra

  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,

  }
});


export default App;