import React, { useState ,useEffect ,useLayoutEffect, Children} from 'react'
import {Box,FlatList,HStack, NativeBaseProvider, Text } from 'native-base'
import { ActivityIndicator } from 'react-native'

const App = () => {
const [value, setValue] = useState([])
const [status, setStatus]=useState(true)

function getData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {return response.json()}).then(res=>{setValue(res)})
  setStatus(false)
}


useEffect(() => {
  setTimeout(()=> {
    getData()
  }, 1000)
  },[])

return(
  <NativeBaseProvider>
  <Box mt="20">
  {status  ? <ActivityIndicator  size="large"/> : 
               

                <Box> <Box mx="10">
               <HStack space={'3'} >
                 <Text fontWeight={'bold'} w="4">Id</Text>
                 <Text fontWeight={'bold'} w="40" h="10">Name</Text>
                 <Text fontWeight={'bold'} w="40" h="10">Company Name</Text>
               </HStack>
               </Box>
               
               <FlatList data={value} keyExtractor={(item)=>item.id} renderItem={({item,id}) =>(
             
                <Box mx="10">
                        <HStack space={'3'} >
                               <Text w="4">{item.id}</Text>
                               <Text w="40" h="10"> {item.name}</Text>
                               <Text w="40" h="10">{item.company.name}</Text>
                       </HStack>
                </Box>
                ) }
                />
               </Box>}
  </Box>
  </NativeBaseProvider>
)

}
export default App