import { Button, View } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile')}
      />
    </View>
  );
}

export default Home;