import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tela1 = () => {
  const [categorias, setCategorias] = useState({
    pessoa: false,
    trabalho: false,
    tarefasDeCasa: false,
    faculdade: false,
    academia: false,
    dailys: false,
  });

  const [dadosTarefa, setDadosTarefa] = useState({
    nome: '',
    descricao: '',
    prazo: '',
    // Adicione outros campos conforme necessário
  });

  const navigation = useNavigation();

  const handleCategoriaPress = (categoria) => {
    setCategorias((prevCategorias) => ({
      ...prevCategorias,
      [categoria]: !prevCategorias[categoria],
    }));
  };

  const handleConcluidoPress = () => {
    // Atualize o objeto dadosTarefa com as informações dos inputs
    setDadosTarefa({
      nome: dadosTarefa.nome,
      descricao: dadosTarefa.descricao,
      prazo: dadosTarefa.prazo,
      // Atualize outros campos conforme necessário
    });

    // Execute qualquer lógica necessária antes de navegar para a tela 2
    // ...

    // Navegue para a tela 2 e passe os dados como parâmetro
    navigation.navigate('Tela2', { dadosTarefa });
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>CRIAR TAREFA</Text>
        </TouchableOpacity>

        <View style={styles.retangulo}>
          <Text style={styles.textoTarefa}>Nome da tarefa:</Text>
          <TextInput style={styles.input} placeholder="Digite sua tarefa" />

          <Text style={styles.textoTarefa}>Descrição:</Text>
          <TextInput style={styles.input} placeholder="Digite a descrição da tarefa" />

          <Text style={styles.textoTarefa}>Prazo:</Text>
          <TextInput style={styles.input} placeholder="Digite a data de prazo" />
        </View>

        <Text style={styles.categoriasText}>Categorias</Text>

        <TouchableOpacity
          style={[
            styles.pessoaBotao,
            categorias.pessoa ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('pessoa')}
        >
          <Text style={styles.botaoTexto}>Pessoa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.trabalhoBotao,
            categorias.trabalho ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('trabalho')}
        >
          <Text style={styles.botaoTexto}>Trabalho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tarefasDeCasaBotao,
            categorias.tarefasDeCasa ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('tarefasDeCasa')}
        >
          <Text style={styles.botaoTexto}>Tarefas de Casa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.faculdadeBotao,
            categorias.faculdade ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('faculdade')}
        >
          <Text style={styles.botaoTexto}>Faculdade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.academiaBotao,
            categorias.academia ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('academia')}
        >
          <Text style={styles.botaoTexto}>Academia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dailysBotao,
            categorias.dailys ? styles.pessoaSelecionada : null,
          ]}
          onPress={() => handleCategoriaPress('dailys')}
        >
          <Text style={styles.botaoTexto}>Dailys</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Concluido} onPress={handleConcluidoPress}>
          <Text style={styles.botaoTexto}>Concluido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
  },
  background: {
    backgroundColor: '#D0F0E8',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  categoriasText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 75,
    height: 17,
    flexShrink: 0,
    color: 'black',
    marginTop: 48,
  },
  botao: {
    width: 309,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#D0F0E8',
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
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  retangulo: {
    width: 309,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
    marginTop: 20,
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingRight: 21,
    paddingBottom: 14,
  },
  textoTarefa: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  pessoaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  pessoaSelecionada: {
    backgroundColor: '#73C5BF',
  },
  trabalhoBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  tarefasDeCasaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  faculdadeBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: -190,
    marginLeft: 190,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  academiaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  dailysBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  Concluido: {
    width: 150,
    height: 44,
    flexShrink: 0,
    backgroundColor: '#6BC785',
    borderRadius: 8,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default Tela1;
