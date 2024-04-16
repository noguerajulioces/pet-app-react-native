import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants'
import CustomButtom from '../components/CustomButtom';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possilities with{' '}
            <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativy meets innnovation: embark on a jouney of limitless explorations with Aora</Text>

          <CustomButtom
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161522' style="light" />
    </SafeAreaView>
  );
}
