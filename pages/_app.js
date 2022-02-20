import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl="https://bkyxfxvgbmfb.usemoralis.com:2053/server" appId="OiHbLg32XZHcwesvD42pzzojxR1mEsbvWxr4Jrc3">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
