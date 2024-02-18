import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import StarknetProvider from "~/utils/starknet/provider";
import Fonts from "~/components/layout/Fonts";



const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Fonts />
      <StarknetProvider>
        <Component {...pageProps} />
      </StarknetProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
