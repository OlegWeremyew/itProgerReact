import {
    StyleSheet, Text, TouchableOpacity,
} from 'react-native';

export default function ListItem({el, deleteHandler}) {

    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#d2a5a5',
        borderWidth: 4,
        width: '60%',
        marginTop: 20,
        marginLeft: '20%'
    },
});
