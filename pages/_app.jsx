import store from "@/redux/store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppBar } from "@/components/Index";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Provider store={store}>
        <AppBar />
        {getLayout(<Component {...pageProps} />)};
      </Provider>
    </GoogleOAuthProvider>
  );
}
