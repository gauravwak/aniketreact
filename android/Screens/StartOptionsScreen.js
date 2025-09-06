// // Screens/StartOptionsScreen.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function StartOptionsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//               <View style={styles.contentHeader}>
//                 <Text style={styles.title}>Welcome to</Text>
//                 <View style={styles.appName}>
//                   <Text style={styles.appNameText}>MONOPOLY</Text>
//                 </View>
//                 <Text style={styles.subtitle}>
//                   Buy Properties • Build Houses • Become the KING of the Board 🏆
//                 </Text>

//               </View>

//               {/* Start Button */}

//             </View>

//       <TouchableOpacity
//         style={styles.startButton}
//         onPress={() => navigation.navigate('StartOptions')}
//       >
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => console.log('Sign Up pressed')}
//       >
//         <Text style={styles.buttonText}>Log In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => console.log('Sign Up pressed')}
//       >
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => console.log('Play as Guest pressed')}
//       >
//         <Text style={styles.buttonText}>Play as Guest</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff', // keep same theme color if you already have
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 12,
//     marginVertical: 10,
//     width: '70%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },

//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingBottom: 100,
//     backgroundColor: '#1e1e2f', // dark gaming background
//   },
//   /** Hero */
//   hero: {
//     backgroundColor: '#fff',
//     margin: 16,
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   heroImage: {
//     width: '100%',
//     height: 320,
//     borderRadius: 12,
//   },
//   /** Content */
//   content: {
//     flex: 1,
//     justifyContent: 'space-between',
//     paddingVertical: 32,
//     paddingHorizontal: 24,
//   },
//   contentHeader: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '500',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   appName: {
//     backgroundColor: '#ff4655',
//     paddingHorizontal: 16,
//     paddingVertical: 6,
//     borderRadius: 8,
//     transform: [{ rotate: '-3deg' }],
//     marginBottom: 12,
//   },
//   appNameText: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#fff',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 2, height: 2 },
//     textShadowRadius: 4,
//   },
//   subtitle: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: '400',
//     color: '#ccc',
//     textAlign: 'center',
//     paddingHorizontal: 12,
//   },
//   /** Button */
//   button: {
//     backgroundColor: '#00c853',
//     paddingVertical: 10,
//     paddingHorizontal: 24,
//     marginBottom:20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 6,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: '800',
//     color: '#fff',
//   },

// });

// Screens/StartOptionsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FancyButton from '../Components/FancyButton'; // <-- ADDED import
const heroImage = require('../assets/LandHeroImage.png');

export default function StartOptionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Welcome to</Text>
          <View style={styles.appName}>
            <Text style={styles.appNameText}>MONOPOLY</Text>
          </View>
          <Text style={styles.subtitle}>
            Buy Properties • Build Houses • Become the KING of the Board 🏆
          </Text>
        </View>
        <Image source={heroImage} style={{ width: 400, height: 400 }} />
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('StartOptions')}
      ></TouchableOpacity>
      {/* Replaced plain TouchableOpacity with FancyButton (no other changes) */}
      // inside StartOptionsScreen component's return
      <FancyButton
        title="Log In"
        onPress={() => navigation.navigate('Login')}
      />
      <FancyButton
        title="Sign Up"
        onPress={() => console.log('Sign Up pressed')}
      />
      <FancyButton
        title="Play as Guest"
        onPress={() => console.log('Play as Guest pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // keep same theme color if you already have
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 100,
    backgroundColor: '#1e1e2f', // dark gaming background
  },
  /** Hero */
  hero: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  heroImage: {
    width: '100%',
    height: 320,
    borderRadius: 12,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  contentHeader: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 8,
  },
  appName: {
    backgroundColor: '#ff4655',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    transform: [{ rotate: '-3deg' }],
    marginBottom: 12,
  },
  appNameText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#ccc',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  /** Button */
  button: {
    backgroundColor: '#00c853',
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
});
