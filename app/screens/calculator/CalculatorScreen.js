// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const CalculatorScreen = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState(null);

//   const calculateSum = () => {
//     const sum = parseFloat(num1) + parseFloat(num2);
//     setResult(sum);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Number 1"
//         keyboardType="numeric"
//         value={num1}
//         onChangeText={setNum1}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Number 2"
//         keyboardType="numeric"
//         value={num2}
//         onChangeText={setNum2}
//       />
//       <Button title="Calculate" onPress={calculateSum} />
//       {result !== null && <Text style={styles.result}>Result: {result}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   result: {
//     marginTop: 20,
//     fontSize: 20,
//   },
// });

// export default CalculatorScreen;





import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleClear} style={styles.button}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('/')} style={styles.button}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('*')} style={styles.button}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('-')} style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('7')} style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('8')} style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('9')} style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('+')} style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('4')} style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('5')} style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('6')} style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleEqual} style={styles.buttonEqual}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('1')} style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('2')} style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('3')} style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('0')} style={styles.buttonZero}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('.')} style={styles.button}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#000',
  },
  display: {
    fontSize: 48,
    color: '#fff',
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  buttonEqual: {
    width: 70,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9500',
    borderRadius: 35,
  },
  buttonZero: {
    width: 160,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 35,
  },
});

export default CalculatorScreen;
