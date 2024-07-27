import { ImageBackground, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { MovieList } from "@/data/MovieList";
import { createURL } from 'expo-linking';


export default function MovieScreen() {
  const { id } = useLocalSearchParams();
  const { posterImage, name }  = MovieList.find((movie) => movie.id.toString() === id) || {};
  const url = createURL(`movie/${id}`);

  if (!posterImage) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Oops...</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>Sorry, the poster for movie "{name}" was not found</Text>
        <Text>Deep Link: {url}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: posterImage }}
        style={styles.image}
        imageStyle={{ resizeMode: "contain" }}
        ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    width: "80%",
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
