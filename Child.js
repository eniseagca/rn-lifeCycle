import React, { useEffect, useState }  from 'react'
import {Box,Text ,HStack,FlatList} from 'native-base'
import {ActivityIndicator} from 'react-native'

const Child = ({value}) => {
const [status,setStatus] = useState(false)
const [childValue, setChildValue] = useState([])
  useEffect(()=>{
        console.log('child calisti')
        setChildValue(value)
        setStatus(!status)
        }
,[value])

 
        return (
                <Box>
        {status == true ? <ActivityIndicator  size="large"/> : null }
               

        {status == false ? <Box> <Box mx="10">
        <HStack space={'3'} >
          <Text fontWeight={'bold'} w="4">Id</Text>
          <Text fontWeight={'bold'} w="40" h="10">Name</Text>
          <Text fontWeight={'bold'} w="40" h="10">Company Name</Text>
        </HStack>
        </Box>
        
        <FlatList data={childValue} keyExtractor={(item)=>item.id} renderItem={({item,id}) =>(
      
         <Box mx="10">
                 <HStack space={'3'} >
                        <Text w="4">{item.id}</Text>
                        <Text w="40" h="10"> {item.name}</Text>
                        <Text w="40" h="10">{item.company.name}</Text>
                </HStack>
         </Box>
         ) }
         />
        </Box> : null}
               
               </Box>
               
                )

        }
   

export default Child
