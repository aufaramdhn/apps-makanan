import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RefreshControl = () => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default RefreshControl;

const styles = StyleSheet.create({});
