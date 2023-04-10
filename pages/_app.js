import store from "@/redux/store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </GoogleOAuthProvider>
  );
}
