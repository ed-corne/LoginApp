import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
    props.handleSearch(search);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSubContainer}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          style={styles.search2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    top: -1,
    backgroundColor: "black",
    height: 65,
  },
  searchSubContainer: {
    backgroundColor: "#111111",
    height: 70,
  },
});

export default Search;
