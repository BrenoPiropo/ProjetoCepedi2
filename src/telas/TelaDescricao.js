import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaDescricao = ({ route }) => {
  const { nome, descricao, prazo, categoria } = route.params;
  const navigation = useNavigation();

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Descricao</Text>
      </TouchableOpacity>
        
      <View style={styles.descricaoContainer}>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Nome da Tarefa:</Text>
          <View style={styles.nomeBox}>
            <Text style={styles.valor}>{nome}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Descrição da Tarefa:</Text>
          <View style={styles.descricaoBox}>
            <Text style={styles.valor}>{descricao}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Prazo:</Text>
          <View style={styles.prazoBox}>
            <Text style={styles.valor}>{prazo}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Categoria:</Text>
          <View style={styles.categoriaBox}>
            <Text style={styles.valor}>{categoria}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.voltarBotao} onPress={handleVoltarPress}>
          <Text style={styles.voltarTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 30,
    alignItems: 'center',
  },
  botao: {
    width: '80%',
    height: 50,
    borderRadius: 15,
    backgroundColor: '#73C5BF',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  descricaoContainer: {
    width: '80%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 20,
  },
  rotulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nomeBox: {
    width: 150,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF511A',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
  },
  descricaoBox: {
    width: 345,
    height: 197,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF511A',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
  },
  prazoBox: {
    width: 180,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF511A',
    backgroundColor: '#FFF',
    padding: 10,
  },
  categoriaBox: {
    width: 150,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF511A',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoria: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  voltarBotao: {
    width: '100%',
    height: 110,
    borderRadius: 15,
    backgroundColor: '#FF511A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  voltarTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TelaDescricao;
