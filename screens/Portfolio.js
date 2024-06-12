import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";
import { theme } from "../theme";
import { openBrowserAsync } from "expo-web-browser";




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

const photo = require("../assets/Tech-Stack/First-project.png")
const photo1 = require("../assets/Tech-Stack/Project-2.png")
const mail = require("../assets/Tech-Stack/envelope.png")
const insta = require("../assets/Tech-Stack/insta-ico.png")

const arrow = require("../assets/Tech-Stack/Arrow.jpg")
const commerce = require("../assets/Tech-Stack/E-commerce-pic.png")





export default function Portfolio({navigation}) {
  return (




    <View style={styles.container} className="bg-[#1C1A1A]  ">
      {/* <StatusBar style="dark" /> */}
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 h-50 w-screen">
            <View className="pt-20 px-3">
              <View className="px-7">
                <Text className="text-3xl text-[#C05621] font-semibold pb-10">
                  Hi There,
                </Text>
                <Text className="text-white text-lg">
                  I am
                  <Text className="font-bold text-2xl"> Hricheak Ghosh </Text>
                </Text>
                <Text className="text-white font-bold text-xl">
                  Frontend Developer
                </Text>
                <Text className="text-white font-bold text-xl">
                  based in Hyderabad, Telangana
                </Text>

                <View className="flex flex-row gap-4 py-3">
                  <Pressable
                    onPress={() =>
                      openBrowserAsync(
                        "https://www.linkedin.com/in/hricheak-ghosh/"
                      )
                    }
                  >
                    <Image source={linkedinImg} className="h-12 w-12 rounded-xl" />
                  </Pressable>

                  <Pressable
                    onPress={() => openBrowserAsync("https://github.com/Rich-1007")}
                  >
                    <Image source={githubImg} className="h-12 w-12 rounded-xl" />
                  </Pressable>
                </View>

                <View className="flex flex-row  h-24 w-3/5 items-center justify-between">
                  <Button
                    title="Hire Me"
                    color="#C05621"
                    onPress={() =>
                      openBrowserAsync("mailto:ghricheak@gmail.com?subject=&body=")
                    }
                    />
                  <Button
                      onPress={() =>
                        openBrowserAsync("https://drive.google.com/file/d/1kvnnRgsatqGwr7YSxQuPhhdukO88cXjI/view?usp=drivesdk")
                      }
                  
                  title="Download CV" color="#353434" />
                </View>
              </View>

              <View className="flex flex-row items-center flex-wrap gap-2 py-8">
                <Text className="text-white font-semibold py-6 text-lg">
                  Tech Stack{" "}
                </Text>

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

            <View className="py-10 px-3">
              <Text className="text-3xl text-white font-bold">My Skills</Text>

              <View className="flex flex-row flex-wrap gap-2 py-4">
                <View
                  className="py-5 px-4 rounded-md "
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">HTML</Text>
                </View>

                <View
                  className="py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">Css</Text>
                </View>

                <View
                  className=" py-5 px-4 rounded-md "
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">Tailwind</Text>
                </View>

                <View
                  className=" py-5 px-4 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">MySql</Text>
                </View>

                <View
                  className=" py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">Bootstrap</Text>
                </View>

                <View
                  className="py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">JavaScript</Text>
                </View>

                <View
                  className="py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">GitHub</Text>
                </View>

                <View
                  className="py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">FireBase</Text>
                </View>

                <View
                  className="py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">React.Js</Text>
                </View>

                <View
                  className=" py-5 px-5 rounded-md"
                  style={{ backgroundColor: theme.bgWhite(0.2) }}
                >
                  <Text className="text-xl text-white font-bold">React Native</Text>
                </View>
              </View>
            </View>

            <View className="py-8 px-3">
              <View className="border-b-4 pb-3 border-orange-500 w-72">
                <Text className="text-2xl text-white font-bold">My Projects</Text>
              </View>

              <View className="py-3">
                <Text className=" text-lg text-gray-300">
                  Here, you can explore my personal projects about my current
                  programming and technology skills. Each project represents a
                  unique blend of creativity, problem-solving, and technical
                  expertise.
                </Text>
              </View>



              

              <View className="pt-20 ">
                <Image source={photo} className="h-60 w-full rounded-lg" />
                <View className="flex flex-col items-center gap-4">
                  <Text className="pt-6 pb-3 text-2xl text-white text-center border-b-2 border-orange-400 w-72 ">
                    Consultancy Website
                  </Text>
                  <Text className="text-gray-300 text-lg text-center">
                    Developed a consultancy website using HTML, CSS, JavaScript,
                    TailwindCss and React.js. The website features a responsive
                    design, dynamic content management, a booking system, and an
                    interactive interface for clients and consultants. Demonstrated
                    front-end development skills.
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-center w-full">
                  <Text className="text-orange-600 text-lg py-5 font-semibold pr-2">
                    Tech Stack
                  </Text>
                  <View className="flex flex-col border-l-2 border-orange-600 pl-2">
                    <Text className="text-gray-300 text-sm font-light">
                      {" "}
                      Tailwind Css, Javascript, React,{" "}
                    </Text>
                    <Text className="text-gray-300 text-sm font-light">
                      {" "}
                      React Router, Context Api
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-300 text-sm font-light text-center">
                  Fully Responsive Design , Booking System , Dynamic Content
                  Management , Search and Filter
                </Text>

                <View className="flex flex-row justify-around py-7">
                  <Pressable
                    onPress={() =>
                      openBrowserAsync(
                        "https://github.com/Rich-1007/Consultant-Website-Using-React"
                      )
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold ">
                      Code
                    </Text>
                    <Image
                      source={githubImg}
                      className="h-5 w-5 rounded-xl opacity-70"
                    />
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      openBrowserAsync("https://consultant-site.netlify.app/")
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold text-center">
                      Live Demo
                    </Text>
                    <Image
                      source={arrow}
                      className="h-5 w-5 rounded-xl opacity-80"
                    />
                  </Pressable>
                </View>
              </View>

              <View className="pt-2 flex w-full items-center pb-12">
                <View className="border-b border-gray-300 w-full"></View>
              </View>

              <View className="pt-20">
                <View className="h-56 w-full overflow-hidden flex items-center ">
                  <Image
                    source={commerce}
                    className="w-96 h-44  rounded-lg object-cover"
                  />
                </View>

                <View className="flex flex-col items-center gap-4">
                  <Text className="pb-3 text-2xl text-white text-center border-b-2 border-orange-400 w-72 ">
                    Ecommerce Website
                  </Text>
                  <Text className="text-gray-300 text-lg text-center">
                    Developed a Ecommerce Web application using HTML, CSS,
                    JavaScript. The application provides real-time weather updates,
                    forecasts. It features a responsive design, and an intuitive
                    user interface. Implemented API integration to fetch weather
                    data and demonstrated proficiency in front-end development and
                    asynchronous programming.
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-center w-full">
                  <Text className="text-orange-600 text-lg py-5 font-semibold pr-2">
                    Tech Stack
                  </Text>
                  <View className="flex flex-col border-l-2 border-orange-600 pl-2">
                    <Text className="text-gray-300 text-sm font-light w-64">
                      {" "}
                      Html, Css, Javascript , API, React, Redux Toolkit, React
                      Router,{" "}
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-300 text-sm font-light text-center">
                  Fully Responsive Design, Dynamic Content Management, real-time
                  weather updates, Implemented API integration{" "}
                </Text>

                <View className="flex flex-row justify-around py-7">
                  <Pressable
                    onPress={() =>
                      openBrowserAsync("https://github.com/Rich-1007/eCommerce")
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold ">
                      Code
                    </Text>
                    <Image
                      source={githubImg}
                      className="h-5 w-5 rounded-xl opacity-70"
                    />
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      openBrowserAsync(
                        "https://master--ecommerce-react-deploy.netlify.app/"
                      )
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold text-center">
                      Live Demo
                    </Text>
                    <Image
                      source={arrow}
                      className="h-5 w-5 rounded-xl opacity-80"
                    />
                  </Pressable>
                </View>
              </View>

              <View className="pt-2 flex w-full items-center">
                <View className="border-b border-gray-300 w-full"></View>
              </View>

              <View className="pt-24">
                <View className="h-72 w-full overflow-hidden flex items-center">
                  <Image
                    source={photo1}
                    className="h-64 w-52 rounded-2xl object-cover"
                  />
                </View>

                <View className="flex flex-col items-center gap-4">
                  <Text className="pt-0 pb-3 text-2xl text-white text-center border-b-2 border-orange-400 w-72 ">
                    Weather App
                  </Text>
                  <Text className="text-gray-300 text-lg text-center">
                    Developed a weather application using HTML, CSS, JavaScript. The
                    application provides real-time weather updates, forecasts. It
                    features a responsive design, and an intuitive user interface.
                    Implemented API integration to fetch weather data and
                    demonstrated proficiency in front-end development and
                    asynchronous programming.
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-center w-full">
                  <Text className="text-orange-600 text-lg py-5 font-semibold pr-2">
                    Tech Stack
                  </Text>
                  <View className="flex flex-col border-l-2 border-orange-600 pl-2">
                    <Text className="text-gray-300 text-sm font-light">
                      {" "}
                      Html, Css, Javascript , API
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-300 text-sm font-light text-center">
                  Fully Responsive Design, Dynamic Content Management, real-time
                  weather updates, Implemented API integration{" "}
                </Text>

                <View className="flex flex-row justify-around py-7">
                  <Pressable
                    onPress={() =>
                      openBrowserAsync("https://github.com/Rich-1007/Weather-App")
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold ">
                      Code
                    </Text>
                    <Image
                      source={githubImg}
                      className="h-5 w-5 rounded-xl opacity-70"
                    />
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      openBrowserAsync("https://rich-1007.github.io/Weather-App/")
                    }
                    className="px-3 py-1 flex flex-row items-center justify-center gap-2 bg-gray-800 rounded-lg"
                  >
                    <Text className="text-gray-300 text-xl font-semibold text-center">
                      Live Demo
                    </Text>
                    <Image
                      source={arrow}
                      className="h-5 w-5 rounded-xl opacity-80"
                    />
                  </Pressable>
                </View>
              </View>
            </View>

            <View className=" bg-gray-900 py-3">
              <View className="flex flex-row justify-around py-7">
                <View className="">
                  <Text className="text-white text-sm font-bold pb-4">
                    Hricheak Ghosh
                  </Text>

                  <Text className="text-white text-sm font-light">
                    ghricheak@gmail.com
                  </Text>
                  <Text className="text-white text-sm font-light">
                    +91-9155889801
                  </Text>
                  <Text className="text-white text-sm font-light">
                    Hyderabad, Telangana
                  </Text>
                </View>

                <View className="">
                  <Text className="text-white text-sm font-bold pb-4">SOCIAL</Text>

                  <View className="flex flex-row">
                    <View className="flex flex-row items-center gap-1">
                      <Pressable
                        onPress={() =>
                          openBrowserAsync(
                            "https://www.linkedin.com/in/hricheak-ghosh/"
                          )
                        }
                      >
                        <Image
                          source={linkedinImg}
                          className="h-7 w-7 rounded-xl"
                        />
                      </Pressable>

                      <Pressable
                        onPress={() =>
                          openBrowserAsync("https://github.com/Rich-1007")
                        }
                      >
                        <Image source={githubImg} className="h-7 w-7 rounded-xl" />
                      </Pressable>
                    </View>
                    <View className="flex flex-row items-center">
                      <Pressable
                        onPress={() =>
                          openBrowserAsync(
                            "mailto:ghricheak@gmail.com?subject=&body="
                          )
                        }
                      >
                        <Image source={mail} className="h-10 w-10  rounded-xl" />
                      </Pressable>

                      <Pressable
                        onPress={() =>
                          openBrowserAsync("https://www.instagram.com/ig_rich123/")
                        }
                      >
                        <Image source={insta} className="h-7 w-7 rounded-xl" />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex w-screen items-center">
                <View className="border-b border-gray-300 w-5/6"></View>
              </View>

              <View>
                <Text className="text-white text-xs text-center py-6 font-extralight">
                  © Copyright 2024. Made by <Text className="text-green-400 font-semibold">Hricheak Ghosh</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
