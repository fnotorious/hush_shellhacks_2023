import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView 
            style={{ flex: 1, backgroundColor: "white" }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "white" },
                    headerShadowVisible: false
                }}
            >

            </Stack.Screen>
        </SafeAreaView>
    )
}

export default Home;