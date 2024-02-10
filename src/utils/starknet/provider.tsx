import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
} from "@starknet-react/core";
import { WebWalletConnector } from "starknetkit/webwallet";

export default function StarknetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
 const chains = [sepolia];
 const provider = publicProvider();
 const connectors = [
   // argent(),
   new WebWalletConnector({ url: "https://web.argent.xyz" }),
 ];

  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}
