import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        width: '100vw',
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24
    },
    image: {
        width: 300,
        height: 168.75,
        marginVertical: 16
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#000',
        marginTop: 24
    },
    paragraph: {
        fontSize: '1rem',
        fontWeight: 500,
        color: '#000',
        textAlign: 'center'
    }
});

export default style;