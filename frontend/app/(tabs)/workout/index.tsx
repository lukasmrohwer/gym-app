import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Workout Page</Text>
      <Button title="New Workout" onPress={() => router.navigate('/workout/new')} />
      <Button title="profile" onPress={() => router.navigate('/profile')} />
    </View>
  );
}