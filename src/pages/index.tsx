import { useAccount } from "@starknet-react/core";
import { useConnect } from "@starknet-react/core";
import { useDisconnect } from "@starknet-react/core";
import Header from "~/components/layout/Header";
import Main from "~/components/layout/Main";

export default function Home() {
  // TODO: This is an example of a TRPC query, let's keep it there for now.
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <Main>
      <Header
        address={address}
        connect={connect}
        connectors={connectors}
        disconnect={disconnect}
      />
      <div className="bg-primary my-20 flex w-full flex-col items-center">
        <div className="text-secondary flex h-60 flex-col items-center justify-center p-5">
          <h1 className="text-center text-4xl font-bold mb-10">
            Welcome Coffee Lover
          </h1>
          <div className="flex flex-row items-center w-full space-x-1">
            <input className="rounded-xl border-none border-0 text-xl text-primary font-bold p-1" type="text" />
            <button className="text-bold bg-secondary text-black  rounded-full p-2 shadow-sm text-sm">
               🔎
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}
