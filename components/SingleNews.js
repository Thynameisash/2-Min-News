import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
  return (
    <View
      style={{
        height: 820,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#1c1e21" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          News by :
          <Text style={{ fontWeight: "bold" }}>
            {item.author ?? " Unknown"}
          </Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 15, color: "white" }}>
            '{item?.content?.slice(0, 50)}...'
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 16, paddingBottom: 10 },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1c1e21",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
