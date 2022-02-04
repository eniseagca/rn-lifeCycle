import React, { useState ,useEffect ,useLayoutEffect, Children} from 'react'
import Child from './Child'
import {Box,FlatList,HStack,Input, NativeBaseProvider, ScrollView, Text , ActivityIndicator} from 'native-base'


const App = () => {
const [value, setValue] = useState([])

function getData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {return response.json()}).then(res=>{setValue(res)})
}


useEffect(() => {
  console.log('parent calisti')
  getData()
  }
   , [])

return(
  <NativeBaseProvider>
  <Box mt="20">
   <Child value={value} />
  </Box>
  </NativeBaseProvider>
)

}
export default App