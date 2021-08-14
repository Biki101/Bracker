import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/index.css";
import { store } from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={store}> */}
      <Component {...pageProps} />;{/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
