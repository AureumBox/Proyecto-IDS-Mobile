import React from "react";
import { List } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../../components/HeaderComponent";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { setIndex } from "../../../state/albumSlice.js";

export default function AlbumFilter({ teams = [] }) {
    console.log(JSON.stringify(teams))
  const { height } = Dimensions.get("window");
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const dispatch = useDispatch()

  const theme = {
    ...DefaultTheme,
    colors: {
      text: "#fff",
    },
  };


  function selectTeam(idTeam = 0) {
    console.log(idTeam);
    dispatch(setIndex(idTeam))
  }

  return (
    <PaperProvider theme={theme}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {
          <List.Section>
            <List.Accordion style={styles.accordion} title="Indice de equipos">
              <ScrollView style={{ maxHeight: 408 }}>
                {teams.map((team) => (
                  <TouchableOpacity onPress={() => selectTeam(team?.id)}>
                    {console.log(team?.name+' g '+team?.badge)}
                    <List.Item
                      style={styles.item}
                      title={team?.name}
                      left={(props) => (
                        <Image
                          style={styles.flag}
                          source={{ uri: team?.badge }}
                        />
                      )}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </List.Accordion>
          </List.Section>
        }
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
  },
  accordion: {
    width: 300,
    backgroundColor: "#34545D",
    color: "#fff",
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  fondo: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#70ABAF",
  },
  textSt: {
    color: "#C10001",
    fontWeight: "bold",
    fontSize: 26,
  },
});
