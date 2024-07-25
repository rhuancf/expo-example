import { Movie } from "@/types/Movie";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <View style={styles.card} key={movie.id}>
      <Link href={{
          pathname: "/movie",
          params: { id: movie.id },
        }}>
        <View>
          <Text style={styles.title}>{movie.name}</Text>
          <Text style={styles.details}>Year: {movie.yearOfPublication}</Text>
          <Text style={styles.details}>
            In Theaters: {movie.isInTheaters ? "Yes" : "No"}
          </Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default MovieCard;
