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

const profileImg = require("../assets/Tech-Stack/Profile-Photo.png")
const linkedinImg = require("../assets/Tech-Stack/LinkedIn.png")
const githubImg = require("../assets/Tech-Stack/Github.jpg")

const icon1 = require("../assets/Tech-Stack/html-5--v1.png")
const icon2 = require("../assets/Tech-Stack/css3.png")
const icon3 = require("../assets/Tech-Stack/bootstrap.png")
const icon4 = require("../assets/Tech-Stack/Tailwind CSS.png")
const icon5 = require("../assets/Tech-Stack/javascript--v1.png")


const icon6 = require("../assets/Tech-Stack/mysql-logo.png")
const icon7 = require("../assets/Tech-Stack/React.png")
const icon8 = require("../assets/Tech-Stack/nodejs.png")
const icon9 = require("../assets/Tech-Stack/ios.png")
const icon10 = require("../assets/Tech-Stack/android.png")



export default function Portfolio() {
  return (
    <View style={styles.container} className="bg-[#1C1A1A]  ">
      {/* <StatusBar style="dark" /> */}
      <SafeAreaView >
        <ScrollView >
          <View className="flex-1 h-50 w-full px-3">
            <View className="pt-20">
              <Text className="text-3xl text-[#C05621] font-semibold pb-10">Hi There,</Text>
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
              <View className="flex flex-row gap-4 py-3">
                <Image source={linkedinImg} className="h-12 w-12 rounded-xl" />
                <Image source={githubImg} className="h-12 w-12 rounded-xl" />

              </View>

              <View className="flex flex-row h-24 w-1/2 items-center justify-between">
                <Button title="Hire Me" color="#C05621" />
                <Button title="Download CV" color="#353434" />
              </View>

              <View className="flex flex-row items-center flex-wrap gap-2 py-8">
                <Text className="text-white font-semibold py-6 text-lg">Tech Stack </Text>

                <View className="h-16 border-2 rounded-3xl border-green-400"></View>

                <Image source={icon1} className="h-14 w-14 " />
                <Image source={icon2} className="h-14 w-14" />
                <Image source={icon3} className="h-14 w-14" />
                <Image source={icon4} className="h-14 w-14" />
                <Image source={icon5} className="h-14 w-14" />


                <Image source={icon6} className="h-14 w-14" />
                <Image source={icon7} className="h-14 w-14 " />
                <Image source={icon8} className="h-14 w-14" />
                <Image source={icon9} className="h-14 w-14" />
                <Image source={icon10} className="h-14 w-14" />

              </View>
            </View>

            <View className="flex justify-center items-center">

              <View className="bg-[#C05621]  my-10 h-60 w-60 rounded-full overflow-hidden flex justify-center items-center">
                <Image source={profileImg} className="h-60 w-60 " />
              </View>
            </View>


            <View className="py-10">
              <Text className="text-3xl text-white font-bold">My Skills</Text>


              <View className="flex flex-row flex-wrap gap-2 py-4">

                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">HTML</Text>
                </View>


                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">Css</Text>
                </View>

                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">Tailwind</Text>
                </View>


                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">Bootstrap</Text>
                </View>


                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">Javascript</Text>
                </View>



                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">MySql</Text>
                </View>



                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">GitHub</Text>
                </View>



                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">FireBase</Text>
                </View>



                <View className="bg-slate-200 opacity-40 py-5 px-5 rounded-md">
                  <Text className="text-xl text-white font-bold">React Native</Text>
                </View>


              </View>
            </View>

            <View className="py-8">

              <View className="border-b-4 pb-3 border-orange-500 w-72">
                <Text className="text-2xl text-white font-bold">
                  My Projects
                </Text>
              </View>


              <View className="py-3">
                <Text className="text-white text-lg">Here, you can explore my personal projects about my current programming and technology skills. Each project represents a unique blend of creativity, problem-solving, and technical expertise.</Text>
              </View>




            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
