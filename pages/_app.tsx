import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../modules";
import ReduxThunk from "redux-thunk";
function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
