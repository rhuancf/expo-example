import { FlatList, StyleSheet, TextInput } from "react-native";

import MovieCard from "@/components/MovieCard";
import { View } from "@/components/Themed";
import { MovieList } from "@/data/MovieList";
import { useState } from "react";

export default function MovieListScreen() {
  const [searchText, setSearchText] = useState<string>("");

  const filteredMovielist = MovieList.filter((movie) => {
    return movie.name.toLowerCase().includes(searchText.toLowerCase());
  })

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
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredMovielist}
        renderItem={({ item }) => <MovieCard movie={item} />}
      ></FlatList>
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
