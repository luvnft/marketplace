import { type Connector, type ConnectVariables } from "@starknet-react/core";
import Button from "../ui/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import BlockiesSvg from "blockies-react-svg";
import ShoppingCart from "~/features/ShoppingCart";
import { useState } from "react";


interface HeaderProps {
  address: string | undefined;
  connect: (args?: ConnectVariables | undefined) => void;
  connectors: Connector[];
  disconnect: () => void;
}

export default function Header({
  address,
  connect,
  connectors,
  disconnect,
}: HeaderProps) {

  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div>
        <div className="text-xl font-bold text-primary">
          Welcome to CofiBlocks ☕️
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ShoppingCartIcon 
          onClick={ () => setIsCartOpen(!isCartOpen) }
          className="h-6 w-6 cursor-pointer text-gray-600" 
         />
        {isCartOpen && 
          <ShoppingCart 
            closeCart={ () => setIsCartOpen(false) }
          /> 
          }
        {!address ? (
          <ul className="flex gap-2">
            {connectors.map((connector) => (
              <li key={connector.id}>
                <div className="flex flex-row items-center space-x-2">
                  <button
                    onClick={() => connect({ connector })}
                    className="w-[8.125rem] rounded-xl bg-primary p-4 font-bold text-secondary shadow-md"
                  >
                    CONNECT
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
              <BlockiesSvg address={address} size={8} scale={4} />
            </div>
            <Button onClick={disconnect}>Disconnect </Button>
          </>
        )}
      </div>
    </header>
  );
}
