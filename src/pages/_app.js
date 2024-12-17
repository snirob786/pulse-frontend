import "@/styles/globals.css";
import "@/assets/css/dashlite.css?ver=3.2.0";
import "@/assets/css/theme.css?ver=3.2.0";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "@/redux/store";
import { Themeing } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider theme={Themeing}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </>
  );
}
