import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Button,
} from 'react-native';
import Usabilla from './src/utils/usabilla/Usabilla';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const formId = '';
  const eventName = '';

  const handleOpenForm = (formId: string): void => {
    Usabilla.showForm(formId)
  }

  const handleSendEvent = (event: string): void => {
    Usabilla.sendEvent(event)
  }

  const handleResetCampaign = (): void => {
    Usabilla.resetCampaignData();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <Button title="Open form" onPress={() => handleOpenForm(formId)} />
          <Button title="Send Event" onPress={() => handleSendEvent(eventName)} />
          <Button title="Reset Campaign" onPress={handleResetCampaign} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
