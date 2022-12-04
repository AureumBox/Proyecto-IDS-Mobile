import * as React from 'react';
import {
    StatusBar, FlatList, Image, Text, View, Dimensions, StyleSheet,
    TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('screen');
const data = [
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://okdiario.com/img/2022/05/12/gato-655x368.jpg',
];

export default function Carousel() {
    return (
        <View style={styles.carousel}>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    ListEmptyComponent={
                        () => <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: 'gray' }}>No hay cromos disponibles para pegar</Text>
                        </View>
                    }
                    ListFooterComponent={
                        () => <View style={{ width: 20}} />
                    }
                    ListHeaderComponent={
                        () => <View style={{ width: 20}} />
                    }
                    ItemSeparatorComponent={
                        () => <View style={{ width: 35}} />
                    }
                    renderItem={({ item }) => {
                        return <View >
                            <View style={{ width: 150, height: '95%',  justifyContent: 'center' }}>
                                <Image source={{ uri: item }} style={{
                                    flex: 1,
                                    resizeMode: 'contain',
                                }} />
                            </View>
                        </View>
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    carousel: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '90%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        overflow: 'hidden',
    },
})