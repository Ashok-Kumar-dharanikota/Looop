import { View, Text } from 'react-native'
import React from 'react'

const IconCircleView = ({children}) => {
  return (
    <View className=' bg-orange-600 rounded-full w-10 h-10 items-center justify-center'>
        {children}
    </View>
  )
}

export default IconCircleView