import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')

const HeaderComp = ({
    goBack = () => { },
    text
}) => {
    return (
        <View style={styles.container}>
            <View></View>
            <TouchableOpacity
                onPress={goBack}
            >
                <Text>GoBack</Text>
            </TouchableOpacity>
                <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 60,
        backgroundColor: 'white',
    },
})

export default HeaderComp