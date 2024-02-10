import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import StarknetProvider from "~/utils/starknet/provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StarknetProvider>
      <Component {...pageProps} />;
    </StarknetProvider>
  );
};

export default api.withTRPC(MyApp);
