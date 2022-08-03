import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NewsContext } from "../API/Context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  const { darkTheme, setDarkTheme, fetchNews } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#1c1e21" : "white",
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
          onPress={() => setDarkTheme(!darkTheme)}
          style={styles.left}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              style={{ color: darkTheme ? "#5df250" : "#ff110a" }}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={15}
            color="#ff110a"
            style={{ color: darkTheme ? "#5df250" : "#ff110a" }}
          />
          <Text
            style={{ ...styles.text, color: darkTheme ? "#97f0cf" : "black" }}
          >
            Discover
          </Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          ...styles.bbm,
          borderBottomColor: darkTheme ? "#5df250" : "#ff110a",
        }}
      >
        <Text
          style={{
            ...styles.center,
            color: darkTheme ? "#97f0cf" : "black",
          }}
        >
          {index ? "All News" : "Discover"}
        </Text>
      </View>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>
            <AntDesign
              name="reload1"
              size={24}
              color="#ff110a"
              style={{ color: darkTheme ? "#5df250" : "#ff110a" }}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "#97f0cf" : "black" }}
          >
            All News
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={15}
            color="#ff110a"
            style={{ color: darkTheme ? "#5df250" : "#ff110a" }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  center: {
    paddingBottom: 1,
    borderBottomColor: "#20fa62",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
  bbm: {
    borderBottomColor: "#ff110a",
    borderBottomWidth: 5,
    borderRadius: 10,
  },
});
