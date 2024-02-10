import Head from "next/head";
import { api } from "~/utils/api";

import { useAccount } from "@starknet-react/core";
import {useConnect} from "@starknet-react/core";
import { useDisconnect } from "@starknet-react/core";

export default function Home() {
  // TODO: This is an example of a TRPC query, let's keep it there for now.
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <Head>
        <title>CofiBlocks ☕️</title>
        <meta name="description" content="CofiBlocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center font-mono">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-brown text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            CofiBlocks POC ☕️
          </h1>
          {!address ? (
            <ul>
              {connectors.map((connector) => (
                <li key={connector.id}>
                  <button
                    onClick={() => connect({ connector })}
                    className="rounded-xl bg-green-700 p-4 font-bold text-white shadow-2xl"
                  >
                    Ingresa aquí ☕️
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold">Hola</h2>
              <p>Esta es tu dirección <span className="bg-gray-200">{address}</span></p>
              <button onClick={() => disconnect()} className="rounded-xl bg-green-700 p-4 font-bold text-white shadow-2xl">
                Salir
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
