import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Hero Image */}
      

      {/* Content */}
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

        {/* Start Button */}
        <TouchableOpacity
          onPress={() => {
            console.log('Start button pressed 🚀');
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>🎮 Start Game</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});
