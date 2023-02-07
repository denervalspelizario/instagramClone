import react from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'; // 1 importando imagem, TouchableOpacity(botão sem design) e flatlist para  lista do feed
import { Component } from 'react/cjs/react.production.min';
import Lista from './Components/Lista';  // 2 - importando component Lista que será iusado no renderItem(linha 88) para formatar e estilizar lista do flatlist (no caso so dados do feed)

// import das imagens do feed
import FotoPerfil1 from './assets/image/imageFeed/d1.jpeg';  // 1 - importacao de imagem perfil
import FotoPublicacao1 from './assets/image/imageFeed/d2.jpeg'; // 1 - importacao de imagem publicacao
import FotoPerfil2 from './assets/image/imageFeed/j1.jpg' // 1 - importacao de imagem perfil
import FotoPublicacao2 from './assets/image/imageFeed/j2.jpeg'; // 1 - importacao de imagem publicacao
import FotoPerfil3 from './assets/image/imageFeed/g1.jpg';  // 1 - importacao de imagem perfil
import FotoPublicacao3 from './assets/image/imageFeed/g2.jpg'; // 1 - importacao de imagem publicacao
import FotoPerfil4 from './assets/image/imageFeed/p1.jpg';  // 1 - importacao de imagem perfil
import FotoPublicacao4 from './assets/image/imageFeed/p2.jpeg'; // 1 - importacao de imagem publicacao
import FotoPerfil5 from './assets/image/imageFeed/t1.jpeg';  // 1 - importacao de imagem perfil
import FotoPublicacao5 from './assets/image/imageFeed/t2.jpeg'; // 1 - importacao de imagem publicacao


class App extends Component{  
  constructor(props){
    super(props);
    this.state={
      feed : [  // array de objetos com os dados que vão ser usados para simular o feed instagram 
        {
          id: '1', 
          nome: 'Denerval  S Pelizario',
          descricao: '#tbt barbecue family',
          imgPerfil: FotoPerfil1,  // uso da foto importada
          imgPublicacao:  FotoPublicacao1, // uso da foto importada
          likeada: false,
          like: 10
        },
        {
          id: '2', 
          nome: 'Jessika',
          descricao: 'Tom nao gosta de tirar fotos',
          imgPerfil: FotoPerfil2,
          imgPublicacao:  FotoPublicacao2,
          likeada: false,
          like: 5
        },
        {
          id: '3', 
          nome: 'Gabi Chagas',
          descricao: 'comendo um miojão',
          imgPerfil: FotoPerfil3,
          imgPublicacao:  FotoPublicacao3,
          likeada: false,
          like: 0
        },
        {
          id: '4', 
          nome: 'Pedrão',
          descricao: 'No parque da cidade',
          imgPerfil: FotoPerfil4,
          imgPublicacao:  FotoPublicacao4,
          likeada: false,
          like: 32
        },
        {
          id: '5', 
          nome: 'Tom',
          descricao: 'Eu e gabi no parque',
          imgPerfil: FotoPerfil5,
          imgPublicacao:  FotoPublicacao5,
          likeada: false,
          like: 12
        },
      ]
    }
  }
  
  
  
  
  render(){
    return(
      <View style={styles.container}>
        {/* 1 - Header */}
        <View style={styles.header}>
          {/*TouchableOpacity um botao sem estilizacao */}
          <TouchableOpacity>  
            <Image 
              source={require('./assets/image/logo.png')}  // 1 - importando foto direto da pasta do arquivo usando require
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
              source={require('./assets/image/send.png')} // 1- importando foto direto da pasta do arquivo usando require
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
 
        {/*2 - Flatlist */}
        <FlatList 
          showsHorizontalScrollIndicator={false} // 2 - desligando barrinha de rolagem na horizontal
          keyExtractor={(item) => item.id} // 2 - garantir que o flatlist vai reconhecer as ids - (item) contem this.state.feed logo ao item.id recebe o id do feed(linha 14)
          data={this.state.feed} // 2 -  data(dado) recebe as infos do feed(linha 14)
          renderItem={ ({item}) => <Lista  data={item} />} // 2 - renderItem responsavel por mostrar dados e
                                                           // 2 - renderiza uma arrow function que tem uma  componente Lista,
                                                           // 2 - que usa como props data que recebe item(dados percorridos do state array feed linha 14 )

        />
        
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