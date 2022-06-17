import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Jazz One</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});