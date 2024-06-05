import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const logoImg = require("./adaptive-icon.png")
const profileImg = require("../assets/Profile-Photo (2).png")
const linkedinImg = require("../assets/Linkedin-icon-1.png")
const githubImg = require("../assets/github-icons-1.png")





export default function Portfolio() {
  return (
    <View style={styles.container} className="bg-[#1C1A1A]  ">
      {/* <StatusBar style="dark" /> */}
      <SafeAreaView >
        <ScrollView >
          <View className="flex-1 h-50 w-full ">
            <View className="pt-20">
              <Text className="text-3xl text-[#C05621] font-semibold pb-10  ">Hi There,</Text>
              <Text className="text-white text-lg">
                I am
                <Text className="font-bold text-xl"> Hricheak Ghosh </Text>
              </Text>
              <Text className="text-white font-bold text-xl">
                Frontend Developer
              </Text>
              <Text className="text-white font-bold text-xl">
                based in Hyderabad, Telangana..
              </Text>
              <View className="flex flex-row gap-4 py-5">
                <Image source={linkedinImg} className="h-7 w-7 rounded-full" />
                <Image source={githubImg} className="h-7 w-7 rounded-full" />

              </View>




















