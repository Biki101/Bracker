import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/index.css";
import { store } from "../redux/store.js";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
