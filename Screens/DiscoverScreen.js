import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      <Search />
      <View
        style={{
          ...styles.bbm,
          borderBottomColor: darkTheme ? "#5df250" : "#ff110a",
        }}
      >
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? "#97f0cf" : "black" }}
        >
          Categories
        </Text>
      </View>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={styles.category}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{
                  ...styles.name,
                  color: darkTheme ? "#97f0cf" : "black",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <View
        style={{
          ...styles.bbm,
          borderBottomColor: darkTheme ? "#5df250" : "#ff110a",
        }}
      >
        <Text
          style={{
            ...styles.subtitle,
            color: darkTheme ? "#97f0cf" : "black",
          }}
        >
          Sources
        </Text>
      </View>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#20fa62",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    paddingTop: 5,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  sourceContainer: {
    height: 100,
    width: "35%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  bbm: {
    paddingTop: 15,
    borderBottomColor: "#ff110a",
    borderBottomWidth: 5,
    borderRadius: 10,
  },
});
