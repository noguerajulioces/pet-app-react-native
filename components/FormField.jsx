import { View, Text } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-red-500 w-full h-16 px-4 bg-black-400">

      </View>
    </View>
  )
}

export default FormField