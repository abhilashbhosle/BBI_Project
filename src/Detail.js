import React from "react"
import { Text,View } from "react-native"
import { useSelector } from "react-redux"

export const Detail=()=>{
    const data=useSelector(state=>state.data.car_detail)
    if(data?.Country){
        return(
            <View style={{padding:20,flex:1,backgroundColor:'#f9faf5'}}>
            <Text style={{color:'#7a9c09',fontSize:22,fontWeight:'700'}}>{data.Country}</Text>
            <Text style={{fontSize:16,color:'#333'}}>Mfr_CommonName: 
            <Text style={{color:'#777',fontSize:14}}> {data?.Mfr_CommonName}</Text>
            </Text>
            <Text style={{fontSize:16,color:'#333'}}>Mfr_Name: 
            <Text style={{color:'#777',fontSize:14}}> {data?.Mfr_Name}</Text>
            </Text>
            <Text style={{fontSize:16,color:'#333'}}>Mfr_ID: 
            <Text style={{color:'#777',fontSize:14}}> {data?.Mfr_ID}</Text>
            </Text>
            {
                data?.VehicleTypes?.length>0?
            <Text style={{color:'#333',fontSize:18,marginVertical:10,fontWeight:'700'}}>Vehicle Types</Text>
            :
            null
            }
            {
                data?.VehicleTypes?.map((e,i)=><Text key={i} style={{color:'#777',fontSize:14}}>{e.Name}</Text>)
            }
            </View>
        )
    }
}