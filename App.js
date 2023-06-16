import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import ScanNPay from './src/ScanNPay';
import PaymentAdvice from './src/PaymentAdvice';
import PaymentDetail from './src/PaymentDetail';
import BankSelection from './src/BankSelection';
import PaymentResult from './src/PaymentResult';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        headerTintColor: 'blue',
        headerStyle: { backgroundColor: 'white' }
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ScanNPay" component={ScanNPay} options={{title: 'Scan & Pay', headerShown: true}} />
        <Stack.Screen name="PaymentAdvice" component={PaymentAdvice} options={{title: 'Your Payment Advices', headerShown: true}} />
        <Stack.Screen name="PaymentDetail" component={PaymentDetail} options={{title: 'Your Payment Detail', headerShown: true}} />
        <Stack.Screen name="BankSelection" component={BankSelection} options={{title: 'Select Bank', headerShown: true}} />
        <Stack.Screen name="PaymentResult" component={PaymentResult} options={{title: 'Payment', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;