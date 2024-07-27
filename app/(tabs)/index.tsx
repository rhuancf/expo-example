import MovieCard from "@/components/MovieCard";
import { View } from "@/components/Themed";
import { MovieList } from "@/data/MovieList";
import { useURL } from "expo-linking";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput } from "react-native";

export default function MovieListScreen() {
  const [searchText, setSearchText] = useState<string>("");
  const url = useURL();

  const filteredMovielist = MovieList.filter((movie) => {
    return movie.name.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    if (url) {
      const match = url.match(/\/movie\/(\d+)/); // Regex para extrair o id do link
      if (match) {
        const movieId = match[1];
        router.push(`/movie/?id=${movieId}`);
      }

      if (url.match(/\/modal\b/)) {
        router.push("/modal/");
      }
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Filter by name..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      {/* <Text>Current URL: {url}</Text> */}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredMovielist}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    width: "80%",
  },
  searchContainer: {
    padding: 20,
    width: "100%",
  },
  searchInput: {
    width: "100%",
    maxWidth: 400,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#a5a4a4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});
