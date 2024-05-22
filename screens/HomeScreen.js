// import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { debounce } from "lodash";
// import { TouchableOpacity } from "react-native-web";

import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import { MapPinIcon } from "react-native-heroicons/solid";

import { useCallback, useState } from "react";
import { fetchLocations } from "../api/weather";

export default function HomeScreen() {
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log(loc);
  };

  const handleSearch = (value) => {
    // console.log(value);

    if (value.length > 2) {
      fetchLocations({ cityName: value }).then(data => {
        console.log(data);
      })
    }
    
  };

  const hanleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" backgroundColor="black" />
      <Image
        blurRadius={70}
        source={require("../assets/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView
        className="flex flex-1 "
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full "
            style={{ backgroundColor: theme.bgWhite(0.2) }}
          >
            <TextInput
              onChangeText={hanleTextDebounce}
              placeholder="Search City"
              placeholderTextColor={"lightgray"}
              className="pl-6 flex-1 h-14   text-white text-base"
            />
            <TouchableOpacity
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && true ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                //
                //
                let showBorder = index + 1 != locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";
                //
                //

                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    //
                    //
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      borderClass
                    }
                    //
                    //
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text className="text-black ml-2 text-lg">{loc}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        <View className="mx-4 flex justify-around flex-1 mb-2">
          <Text className="text-white text-center text-2xl font-bold">
            London,
            <Text className="text-lg font-semibold text-gray-300">
              United Kingom
            </Text>
          </Text>

          <View className="flex-row justify-center">
            <Image
              source={require("../assets/partlycloudy.png")}
              className="w-52 h-52"
            />
          </View>

          <View className=" space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center  text-white text-xl tracking-widest">
              Partly Cloudy
            </Text>
          </View>
          {/* other satts */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/wind.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">22km</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/drop.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">23%</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/sun.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">
                6:10 AM
              </Text>
            </View>
          </View>
        </View>
        {/* forcast for next days */}

        <View className="mb-2 space-y-3 ">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size={28} color="white" />

            <Text className="text-white text-base">Daily forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Monday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Tuesday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Wednesday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Thursday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Friday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Saturday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>

            <View
              style={{ backgroundColor: theme.bgWhite(0.15) }}
              className="flex justify-center items-centerw-24 rounded-3xl py-3 space-y-1 mr-4 px-3"
            >
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-16 w-20"
              />
              <Text className="text-white text-center">Sunday</Text>
              <Text className="text-white text-xl font-semibold text-center">
                23&#176;
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
