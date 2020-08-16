import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      {state.length === null ? (
        <ActivityIndicator size='large' color='#00ff00' />
      ) : (
        <Text style={styles.text}>All Tracks</Text>
      )}
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} style={styles.flatlist} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
  },
  flatlist: {
    marginBottom: 1,
    borderBottomWidth: 1,
    borderColor: '#20232a',
  },
  empthText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: '50%',
  },
});

export default TrackListScreen;
