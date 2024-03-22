import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/ButtonRegister";

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>REGISTER</Text>
            <Text style={styles.subTitle}>Bienvenido</Text>
            <TextInput style={styles.textInput}
                placeholder="Nombre"
            />
            <TextInput style={styles.textInput}
                placeholder="Correo"
            />
            <TextInput style={styles.textInput}
                placeholder="Contraseña"
                secureTextEntry={true}
            />
            <TextInput style={styles.textInput}
                placeholder="Confirmar Contraseña"
                secureTextEntry={true}
            />
            <Button />
            <Text style={styles.text}>¿Ya tienes una cuenta? Inicia Sesion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 60,
        color: '#000',
        fontWeight: 'bold',
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 14,
        color: 'gray',
        marginTop: 20,
    },
    subTitle: {
        fontSize: 20,
        color: '#f1f1f1',
    }
});
    
export default RegisterScreen;