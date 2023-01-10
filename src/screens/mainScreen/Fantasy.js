import React from "react";
import {
    StyleSheet,
    Text,
    TextComponent,
    View,
    ScrollView
} from "react-native";
import { Avatar } from 'react-native-paper';

export default function Fantasy() {
    return (
        <View style={styles.fondo}>
          <ScrollView>
          <View>
                  <Text style={styles.title}>Ranking</Text>
          </View>
            <View style={styles.contentContainer}>

              <View style={styles.myFirstCard}>
                <View style={styles.myNumber}>
                  <Text style={styles.myNumberText}>2</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.myTextCard}>Chocopaula</Text>
                  <Text style={styles.myTextCard}>45 pts</Text>
                </View>
              </View>

              <View style={{marginTop: 50}}/>

              <View style={styles.firstCard}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>1</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Milo</Text>
                  <Text style={styles.textCard}>50 pts</Text>
                </View>
              </View>
              <View style={styles.myCard}>
                <View style={styles.myNumber}>
                  <Text style={styles.myNumberText}>2</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.myTextCard}>Paula</Text>
                  <Text style={styles.myTextCard}>45 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>3</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Cristini</Text>
                  <Text style={styles.textCard}>43 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>4</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>feredev</Text>
                  <Text style={styles.textCard}>40 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>5</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Yisus</Text>
                  <Text style={styles.textCard}>37 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>6</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Alvin</Text>
                  <Text style={styles.textCard}>33 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>7</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Simon</Text>
                  <Text style={styles.textCard}>30 pts</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>8</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>teodoro</Text>
                  <Text style={styles.textCard}>28 pts</Text>
                </View>
              </View>
              <View style={styles.lastCard}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>9</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>pan y agua</Text>
                  <Text style={styles.textCard}>27 pts</Text>
                </View>
              </View>
              <View style={styles.lastCard}>
                <View style={styles.myNumber}>
                  <Text style={styles.numberText}>10</Text>
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.textCard}>Peña</Text>
                  <Text style={styles.textCard}>24 pts</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70ABAF',
    },
    contentContainer: {
      paddingHorizontal: 0,
      marginTop: 75,
    },
    myTextCard: {
      color: '#fff',
      marginRight: 30,
    },
    textCard: {
      marginRight: 40,
    },
    title: {
      marginLeft:80,
      marginTop:50,
      fontSize:40,
      color:"#FFFF",
    },
    myCard: {
      height: 74,
      flexDirection: 'row',
      backgroundColor: 'red',
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      height: 74,
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    firstCard: {
      height: 74,
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    myFirstCard: {
      height: 74,
      flexDirection: 'row',
      backgroundColor: 'red',
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop:-50,
    },
    lastCard: {
      height: 74,
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius:0,
    },
    myNumber: {
      position: 'absolute',
      left: 0,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    myNumberText: {
      fontSize: 50,
      marginLeft: 6,
      color: '#fff'
    },
    numberText: {
      fontSize: 50,
      marginLeft: 6,
    },
    containerText: {
      marginLeft: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
})
