import React, { useEffect } from "react"
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { car_detail, cardetail, get_data } from "./features/Homecontroller";
export const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const loading = useSelector((state) => state.data.loading);
    const error = useSelector((state) => state.data.error);
    const [refreshing, setRefreshing] = React.useState(false);

    React.useEffect(() => {
        fetchedResponse();
    }, []);
    

    const fetchedResponse = async () => {
        setRefreshing(true);
        await dispatch(get_data());
        setRefreshing(false);
    };
    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <>
            
            <FlatList
                data={data?.Results}
                keyExtractor={(item) => item.Mfr_ID.toString()}
                ListHeaderComponent={() => <Text style={{ color: '#000', fontSize: 20, fontWeight: '700' }}>Vehicle Manufacturers</Text>}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(cardetail(item))
                            navigation.navigate('Detail')
                        }}
                    >
                        <View style={{ marginVertical: 15, borderBottomColor: '#f5f5f5', borderBottomWidth: 1, padding: 2 }}>
                            <Text style={{ fontSize: 16, color: '#7a9c09' }}>{item.Country}</Text>
                            <Text style={{ color: '#777', fontSize: 14, marginTop: 5 }}>
                                {item.Mfr_Name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                refreshing={refreshing}
                onRefresh={fetchedResponse}
                contentContainerStyle={{ backgroundColor: '#fff', padding: 20 }}
            />
        </>
    )
}