import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

import Home from '../pages/Home/index';
import Profile from '../pages/Profile/index';
import Settings from '../pages/Settings/index';
import Notifications from '../pages/Notifications/index';

class TabViewNew extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Home' },
      { key: 'second', title: 'Profile' },
      { key: 'third', title: 'Notifications' },
      { key: 'four', title: 'Settings' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Home,
          second: Profile,
          third: Notifications,
          four: Settings,
        })}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  }
});

export default TabViewNew;
