import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect ,useState} from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";





export default function Details() {  
  const params = useLocalSearchParams();
  console.log(params.name);    

  useEffect(() => {},[]);

  async function fetchPokemonByName(name: string) {
    try {
      
    } catch (error) {
      
    }
    
  }

  return (
    <>
    <Stack.Screen options={{title:params.name as string}}>

   <ScrollView 
    contentContainerStyle={{
      gap:16,padding:16
    }}
    >
    
   </ScrollView>
     </Stack.Screen>
      </>
  );
}


const styles = StyleSheet.create({

})

