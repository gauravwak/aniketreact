// import React, { useRef } from "react";
// import { Pressable, Text, StyleSheet, Animated } from "react-native";

// export default function FancyButton({ title, onPress }) {
//   const scale = useRef(new Animated.Value(1)).current;

//   const onPressIn = () => {
//     Animated.spring(scale, {
//       toValue: 0.95,
//       useNativeDriver: true,
//     }).start();
//   };

//   const onPressOut = () => {
//     Animated.spring(scale, {
//       toValue: 1,
//       friction: 3,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <Animated.View style={{ transform: [{ scale }] }}>
//       <Pressable
//         style={({ pressed }) => [
//           styles.button,
//           { backgroundColor: pressed ? "#00e676" : "#00c853" },
//         ]}
//         onPressIn={onPressIn}
//         onPressOut={onPressOut}
//         onPress={onPress}
//       >
//         <Text style={styles.text}>{title}</Text>
//       </Pressable>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 10,
//   },
//   text: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
// android/Components/FancyButton.js
// android/Components/FancyButton.js
import React, { useRef } from "react";
import { Text, Pressable, Animated, StyleSheet } from "react-native";

export default function FancyButton({ title, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95, // shrink a bit
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, // back to normal
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#00e676" : "#00c853" },
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    width:200,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'center',
    elevation: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
});
