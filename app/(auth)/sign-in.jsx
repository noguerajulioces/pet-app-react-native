import { View, Text, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButtom from '../../components/CustomButtom'
import { Link } from 'expo-router'

import { createUser } from '../../lib/appwrite'


const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmiting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6 flex">
         <Image source={images.logo} 
         resizeMode='contain'
         className="w-[115px] h-[35px]"/>

         <Text className="text-white text-2xl text-semibold mt-10 font-psemibold"> Log in to Aora </Text>

         <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
         />

        <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
         />

         <CustomButtom 
          title="Sign In"
          handlePress={submit}
          containerStyles="w-full mt-7"
          isLoading={isSubmiting}
         />

         <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-gray-100 text-lg font-pregular">
            Don't have account?
          </Text>
          <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign up</Link>
         </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn