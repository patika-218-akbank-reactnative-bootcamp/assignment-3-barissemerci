import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {UserContext} from '../../context/user';
import {ThemeContext} from '../../context/theme';

import {Picker} from '@react-native-picker/picker';

const LoginPage = props => {
  const {theme} = useContext(ThemeContext);

  const {handleUser} = useContext(UserContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [selectedCountry, setSelectedCountry] = useState();
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.textContainer}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }>
          <Picker.Item label="Turkey" value="+90" />
          <Picker.Item label="USA" value="+1" />
          <Picker.Item label="Bulgaria" value="+359" />
        </Picker>
        <TextInput
          onChangeText={phone => {
            setPhoneNumber(phone);
          }}
          keyboardType="numeric"
          placeholder="Phone Number"
          style={styles.textPhone}
        />

        <TextInput
          onChangeText={nameNew => setName(nameNew)}
          placeholder="Name"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={surnameNew => setSurname(surnameNew)}
          placeholder="Surname"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={usernameNew => setUserName(usernameNew)}
          placeholder="Username"
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => {
            const userNew = {
              name: name,
              username: username,
              phoneNumber: phoneNumber,
              surname: surname,
            };

            handleUser(userNew);
          }}>
          <Text style={styles.buttonTextStyle}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textContainer: {marginTop: 100},
  textPhone: {
    backgroundColor: 'white',
    padding: 10,
    width: 270,
    marginTop: 40,
    height: 50,
    borderRadius: 10,
    borderColor: '#0088cc',
    borderWidth: 2,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    width: 270,
    height: 50,
    marginTop: 40,
    borderRadius: 10,
    borderColor: '#0088cc',
    borderWidth: 2,
  },
  buttonStyle: {
    backgroundColor: '#0088cc',
    width: 270,
    height: 50,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  pickerStyle: {
    borderColor: '#0088cc',
    borderWidth: 2,
    backgroundColor: 'white',
  },
});
export default LoginPage;
