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

const EditProfileScreen = props => {
  const {user, handleUser} = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [username, setUserName] = useState(user.username);
  const {theme} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.textInputs}>
        <Text style={styles.textStyle}>First Name</Text>
        <TextInput
          value={name}
          onChangeText={nameNew => setName(nameNew)}
          style={styles.textInputStyles}
        />
        <Text style={styles.textStyle}>Last Name</Text>
        <TextInput
          value={surname}
          style={styles.textInputStyles}
          onChangeText={surnameNew => setSurname(surnameNew)}
        />
        <Text style={styles.textStyle}>User Name</Text>
        <TextInput
          value={username}
          style={styles.textInputStyles}
          onChangeText={usernameNew => setUserName(usernameNew)}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          const userNew = {
            name: name,
            username: username,
            phoneNumber: user.phoneNumber,
            surname: surname,
          };

          handleUser(userNew);
        }}>
        <Text style={styles.buttonTextStyle}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  textInputStyles: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#0088cc',
    marginBottom: 50,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  textInputs: {
    marginTop: 75,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 5,
    color: '#0088cc',
  },
  buttonStyle: {
    backgroundColor: '#0088cc',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});
export default EditProfileScreen;
