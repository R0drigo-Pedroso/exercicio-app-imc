import { Alert, Button, StatusBar } from "react-native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const nomeDigitado = (nomeDigitado) => {
    setNome(nomeDigitado);
  };

  const pesoDigitado = (pesoDigitado) => {
    setPeso(pesoDigitado);
  };

  const alturaDigitado = (alturaDigitado) => {
    setAltura(alturaDigitado);
  };

  const calcular = () => {
    const imc = peso / (altura * altura);

    let calc;
    if (imc < 20) {
      calc = imc;
    } else if (imc > 20 && imc <= 25) {
      calc = imc;
    } else if (imc > 25 && imc <= 30) {
      calc = imc;
    } else if (imc > 30 && imc <= 35) {
      calc = imc;
    } else if (imc > 35 && imc <= 40) {
      calc = imc;
    } else if (imc > 40 && imc <= 50) {
      calc = imc;
    } else {
      calc = imc;
    }

    Alert.alert("Resultado", `resultados: ${nome} ${calc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar />
        <Text style={styles.text}>Calcular IMC</Text>

        <TextInput
          style={styles.input}
          onChangeText={nomeDigitado}
          value={nome}
          placeholder="Digite seu Nome"
          keyboardType="text"
        />

        <TextInput
          style={styles.input}
          onChangeText={pesoDigitado}
          value={peso}
          placeholder="Digite seu Peso"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={alturaDigitado}
          value={altura}
          placeholder="Digite sua altura"
          keyboardType="numeric"
        />
        <Button title="calcular" onPress={calcular} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 24,
  },
});
