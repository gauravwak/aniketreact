// // Screens/LoginScreen.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login Screen</Text>
//       {/* add your login form here later */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e2f' },
//   title: { fontSize: 22, color: '#fff', fontWeight: '700' },
// });

// import React, { useState } from 'react';
// const LogoIcon = require('../assets/LogoImage.png');
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// export default function Example() {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   });
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#232222ff' }}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Image
//             source={LogoIcon} style= {{width:100, height:100}} />

//           <Text style={styles.title}>
//             Sign in to <View style={styles.appName}>
//                         <Text style={styles.appNameText1}>MONOPOLY</Text>
//                       </View>
//           </Text>

//           <Text style={styles.subtitle}>
//             Get access to your portfolio and more
//           </Text>
//         </View>

//         <View style={styles.form}>
//           <View style={styles.input}>
//             <Text style={styles.inputLabel}>Email address</Text>

//             <TextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               clearButtonMode="while-editing"
//               keyboardType="email-address"
//               onChangeText={email => setForm({ ...form, email })}
//               placeholder="john@example.com"
//               placeholderTextColor="#6b7280"
//               style={styles.inputControl}
//               value={form.email} />
//           </View>

//           <View style={styles.input}>
//             <Text style={styles.inputLabel}>Password</Text>

//             <TextInput
//               autoCorrect={false}
//               clearButtonMode="while-editing"
//               onChangeText={password => setForm({ ...form, password })}
//               placeholder="********"
//               placeholderTextColor="#6b7280"
//               style={styles.inputControl}
//               secureTextEntry={true}
//               value={form.password} />
//           </View>

//           <View style={styles.formAction}>
//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <View style={styles.btn}>
//                 <Text style={styles.btnText}>Sign in</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity
//             onPress={() => {
//               // handle link
//             }}>
//             <Text style={styles.formLink}>Forgot password?</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity
//         onPress={() => {
//           // handle link
//         }}>
//         <Text style={styles.formFooter}>
//           Don't have an account?{' '}
//           <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     padding: 24,
//   },
//   title: {
//     fontSize: 31,
//     fontWeight: '700',
//     color: '#f6f9faff',
//     marginBottom: 6,
//     textAlign:'center'
//   },
//     appName: {
//     backgroundColor: '#ff4655',
//     paddingHorizontal: 16,
//     paddingVertical: 6,
//     borderRadius: 8,
//     fontSize:'50',
//     transform: [{ rotate: '-3deg' }],
//     marginBottom: 12,
//   },
//   appNameText1: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#fff',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 2, height: 2 },
//     textShadowRadius: 4,
//   },
//   subtitle: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#929292',
//   },
//   /** Header */
//   header: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 36,
//   },
//   headerImg: {
//     width: 200,
//     height: 200,
//     alignSelf: 'center',
//     marginBottom: 36,
//   },
//   /** Form */
//   form: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   formAction: {
//     marginTop: 4,
//     marginBottom: 16,
//   },
//   formLink: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#075eec',
//     textAlign: 'center',
//   },
//   formFooter: {
//     paddingVertical: 24,
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#f7f2f2ff',
//     textAlign: 'center',
//     letterSpacing: 0.15,
//   },
//   /** Input */
//   input: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#f9f7f7ff',
//     marginBottom: 8,
//   },
//   inputControl: {
//     height: 50,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#222',
//     borderWidth: 1,
//     borderColor: '#C9D3DB',
//     borderStyle: 'solid',
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     backgroundColor: '#075eec',
//     borderColor: '#075eec',
//   },
//   btnText: {
//     fontSize: 18,
//     lineHeight: 26,
//     fontWeight: '600',
//     color: '#fff',
//   },
// });
// 
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LogoIcon = require('../assets/LogoImage.png');
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

export default function Example() {
  // login form
  const [form, setForm] = useState({ email: '', password: '' });
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // register modal state + form
  const [showRegister, setShowRegister] = useState(false);
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [regFocused, setRegFocused] = useState(null);
  const navigation = useNavigation();


  // animations
  const scale = useRef(new Animated.Value(1)).current; // sign-in button
  const regScale = useRef(new Animated.Value(1)).current; // register button

  const pressIn = () =>
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  const pressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();

  const regPressIn = () =>
    Animated.spring(regScale, { toValue: 0.97, useNativeDriver: true }).start();
  const regPressOut = () =>
    Animated.spring(regScale, { toValue: 1, useNativeDriver: true }).start();

  // pulsing glow for register modal's create button (optional)
  const glowAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1, duration: 1500, useNativeDriver: false }),
        Animated.timing(glowAnim, { toValue: 0, duration: 1500, useNativeDriver: false }),
      ])
    ).start();
  }, [glowAnim]);

  // open / close register modal
  const openRegister = () => setShowRegister(true);
  const closeRegister = () => {
    setShowRegister(false);
    // optional: clear form
    setRegForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  // simple register validation
  const handleRegisterSubmit = () => {
    const { name, email, password, confirmPassword } = regForm;
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Missing fields', 'Please fill name, email and password.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Password and Confirm Password do not match.');
      return;
    }
    // TODO: call your API here to create account
    Alert.alert('Account created', `Welcome, ${name}!`);
    closeRegister();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Image source={LogoIcon} style={styles.logo} />
              <Text style={styles.title}>Welcome To</Text>

              <View style={styles.appName}>
                <Text style={styles.appNameText1}>MONOPOLY</Text>
              </View>

              <Text style={styles.subtitle}>Roll the dice, grow your fortune, own the board</Text>
            </View>

            {/* Login Card */}
            <View style={styles.card}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Email address</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(email) => setForm({ ...form, email })}
                  placeholder="john@example.com"
                  placeholderTextColor="#c2b280"
                  style={[styles.inputControl, focusedInput === 'email' && styles.inputControlFocused]}
                  value={form.email}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={(password) => setForm({ ...form, password })}
                    placeholder="Your password"
                    placeholderTextColor="#c2b280"
                    style={[
                      styles.inputControl,
                      styles.passwordInput,
                      focusedInput === 'password' && styles.inputControlFocused,
                    ]}
                    secureTextEntry={!showPassword}
                    value={form.password}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <TouchableOpacity activeOpacity={0.8} style={styles.showToggle} onPress={() => setShowPassword((s) => !s)}>
                    <Text style={styles.showToggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity activeOpacity={1} onPressIn={pressIn} onPressOut={pressOut} onPress={() => { /* handle sign in */ }}>
                  <Animated.View style={[styles.btn, { transform: [{ scale }] }]}>
                    <Text style={styles.btnText}>Sign in</Text>
                  </Animated.View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.formLink}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            {/* Footer with Sign up (opens modal) */}
            <TouchableOpacity onPress={openRegister}>
              <Text style={styles.formFooter}>
                Don’t have an account? <Text style={styles.signUpLink}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ===== Registration Modal (full-screen overlay) ===== */}
      <Modal visible={showRegister} animationType="fade" transparent={true} onRequestClose={closeRegister}>
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.modalInner}>
            <ScrollView contentContainerStyle={{ paddingVertical: 24 }} keyboardShouldPersistTaps="handled">
              <View style={styles.registerCard}>
                <View style={styles.registerHeaderRow}>
                  <Text style={styles.registerTitle}>Create Account</Text>
                  <TouchableOpacity onPress={closeRegister} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                {/* Name */}
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Full name</Text>
                  <TextInput
                    value={regForm.name}
                    onChangeText={(name) => setRegForm({ ...regForm, name })}
                    placeholder="Your full name"
                    placeholderTextColor="#c2b280"
                    style={[styles.inputControl, regFocused === 'name' && styles.inputControlFocused]}
                    onFocus={() => setRegFocused('name')}
                    onBlur={() => setRegFocused(null)}
                  />
                </View>

                {/* Email */}
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                    value={regForm.email}
                    onChangeText={(email) => setRegForm({ ...regForm, email })}
                    placeholder="name@example.com"
                    placeholderTextColor="#c2b280"
                    keyboardType="email-address"
                    style={[styles.inputControl, regFocused === 'remail' && styles.inputControlFocused]}
                    onFocus={() => setRegFocused('remail')}
                    onBlur={() => setRegFocused(null)}
                  />
                </View>

                {/* Password */}
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                    value={regForm.password}
                    onChangeText={(password) => setRegForm({ ...regForm, password })}
                    placeholder="Create a password"
                    placeholderTextColor="#c2b280"
                    secureTextEntry={true}
                    style={[styles.inputControl, regFocused === 'rpass' && styles.inputControlFocused]}
                    onFocus={() => setRegFocused('rpass')}
                    onBlur={() => setRegFocused(null)}
                  />
                </View>

                {/* Confirm Password */}
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Confirm Password</Text>
                  <TextInput
                    value={regForm.confirmPassword}
                    onChangeText={(confirmPassword) => setRegForm({ ...regForm, confirmPassword })}
                    placeholder="Repeat password"
                    placeholderTextColor="#c2b280"
                    secureTextEntry={true}
                    style={[styles.inputControl, regFocused === 'rpass2' && styles.inputControlFocused]}
                    onFocus={() => setRegFocused('rpass2')}
                    onBlur={() => setRegFocused(null)}
                  />
                </View>

                {/* Create Account (animated) */}
                <View style={{ marginTop: 6, marginBottom: 6 }}>
                  <TouchableOpacity activeOpacity={1} onPressIn={regPressIn} onPressOut={regPressOut} onPress={handleRegisterSubmit}>
                    <Animated.View
                      style={[
                        styles.registerBtn,
                        { transform: [{ scale: regScale }] },
                        {
                          shadowOpacity: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 0.95] }),
                          shadowRadius: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [8, 20] }),
                        },
                      ]}
                    >
                      <Text style={styles.registerBtnText}>Create Account</Text>
                    </Animated.View>
                  </TouchableOpacity>
                </View>

                {/* Already have account link */}
                <TouchableOpacity onPress={closeRegister}>
                  <Text style={[styles.formFooter, { marginTop: 8 }]}>
                    Already have an account? <Text style={styles.signUpLink}>Sign in</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

/* -------------------- styles (kept consistent with your theme) -------------------- */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#013220', // deep velvet green
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f5f5dc',
    marginBottom: 8,
  },
  appName: {
    backgroundColor: '#ff4655',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    transform: [{ rotate: '-3deg' }],
    marginBottom: 12,
    shadowColor: '#ff4655',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  appNameText1: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#c2b280',
    textAlign: 'center',
  },

  card: {
    marginTop: 18,
    backgroundColor: '#022d18',
    borderRadius: 18,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 12,
  },

  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#033d25',
    paddingHorizontal: 14,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#444',
  },
  inputControlFocused: {
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  passwordInput: {
    paddingRight: 70,
  },
  showToggle: {
    position: 'absolute',
    right: 10,
    top: 12,
    paddingHorizontal: 6,
  },
  showToggleText: {
    color: '#FFD700',
    fontWeight: '600',
  },

  btn: {
    alignSelf: 'center',
    width: 220,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#013220',
  },

  formLink: {
    fontSize: 15,
    fontWeight: '600',
    color: '#7cc3ff',
    textAlign: 'center',
    marginTop: 10,
  },
  formFooter: {
    paddingVertical: 20,
    fontSize: 15,
    fontWeight: '600',
    color: '#f5f5dc',
    textAlign: 'center',
  },
  signUpLink: {
    textDecorationLine: 'underline',
    color: '#FFD700',
  },

  /* Modal overlay + register card */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end', // slide from bottom
  },
  modalInner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  registerCard: {
    backgroundColor: '#012816',
    padding: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: '#093b25',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 20,
  },
  registerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  registerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f5f5dc',
  },
  closeButton: {
    padding: 6,
    borderRadius: 6,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#f5f5dc',
  },
  registerBtn: {
    marginTop: 4,
    alignSelf: 'center',
    width: 220,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 12,
  },
  registerBtnText: {
    color: '#013220',
    fontWeight: '800',
    fontSize: 16,
  },
});


