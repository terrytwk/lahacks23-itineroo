import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import colors from "../theme/colors";

const OAuth = () => {
  const logos = ["google", "facebook"];

  return (
    <View>
      <View style={styles.barContainer}>
        <View style={styles.bar}></View>
        <Text>
          {"  "}or{"  "}
        </Text>
        <View style={styles.bar}></View>
      </View>
      <View style={styles.logosContainer}>
        {logos.map((l, i) => (
          <Logo icon_name={l} key={i} />
        ))}
      </View>
    </View>
  );
};

const Logo = ({ icon_name }) => {
  const logos = {
    google: {
      icon: <AntDesign name="google" size={24} color="#3b5998" />,
      color: "#3b5998",
    },
    facebook: {
      icon: <FontAwesome name="facebook" size={24} color="#4285F4" />,
      color: "#4285F4",
    },
  };

  return (
    <View
      style={{ ...styles.logoContainer, borderColor: logos[icon_name].color }}
    >
      {logos[icon_name].icon}
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 5,
  },
  bar: {
    borderWidth: 1,
    width: "40%",
    height: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
  logosContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logoContainer: {
    borderWidth: 1,
    borderRadius: 100,
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
});

export default OAuth;
