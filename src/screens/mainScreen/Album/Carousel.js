import * as React from 'react';
import {
    StatusBar, FlatList, Image, Text, View, Dimensions, StyleSheet,
    TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('screen');
const data = [
    'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000',
    'https://okdiario.com/img/2022/05/12/gato-655x368.jpg',
    'https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcS8t5Qv9hoArKjwgA25zZgoNoKuhbVU2zc6-A & usqp=CAU',
    'https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-ungato-2.jpeg',
    'https://tucomunidad.com.pa/wp-content/uploads/2021/10/GATO.jpg',
    'https://petpillow.com.br/wp-content/uploads/2019/11/como-saber-se-o-gatoesta-com-dor.jpg',
    'https://styleandleisurenews.com/wp-content/uploads/2021/08/gatos-gestosm.jpeg'
];
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function Carousel(){
    return (
        <View style={styles.carousel}>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    ItemSeparatorComponent={
                        () => <View style={{ width: 20 }} />
                    }
                    renderItem={({ item }) => {
                        return <View>
                            <Image source={{ uri: item }} style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                            }} />
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