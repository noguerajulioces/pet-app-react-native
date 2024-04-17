import { View, Text, ScrollView, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButtom from '../../components/CustomButtom'
import { Link, router } from 'expo-router'

import { createUser } from '../../lib/appwrite'


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmiting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false)
    }
  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6 flex">
         <Image source={images.logo} 
         resizeMode='contain'
         className="w-[115px] h-[35px]"/>

         <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Sign up in to Aora </Text>

         <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-10"
         />

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
          title="Sign Up"
          handlePress={submit}
          containerStyles="w-full mt-7"
          isLoading={isSubmiting}
         />

         <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-gray-100 text-lg font-pregular">
            Have an account already?
          </Text>
          <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign in</Link>
         </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp