import { useAccount } from "@starknet-react/core";
import { useConnect } from "@starknet-react/core";
import { useDisconnect } from "@starknet-react/core";
import Header from "~/components/layout/Header";
import Main from "~/components/layout/Main";
import Hero from "~/components/ui/Hero";
import ProductCatalog from "~/features/ProductCatalog";
import { api } from "~/utils/api";

export default function Home() {
  // TODO: This is an example of a TRPC query, let's keep it there for now.
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // get the cart items from api.shoppingCart.getItems.useQuery
  const { data: cartItems } = api.shoppingCart.getItems.useQuery({ cartId: 1 });


  return (
    <Main>
      <Header
        address={address}
        connect={connect}
        connectors={connectors}
        disconnect={disconnect}
        cartItems={cartItems?.length}
      />
      <Hero 
        title="Welcome Coffee Lover" 
        description="Find the best coffee in the world" 
        buttonText="Search" 
        buttonOnClick={() => console.log("Button clicked")}
      />
    <ProductCatalog />  

    </Main>
  );
}
