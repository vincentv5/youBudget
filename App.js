import React, { useState } from 'react';

import Navigation from './src/navigations/Navigation';
import { enableScreens } from 'react-native-screens';
import { AppLoading, SplashScreen } from "expo";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import fontConfiguration from './src/configs/fontConfig';
export default function App() {
  enableScreens();
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fontConfiguration}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


