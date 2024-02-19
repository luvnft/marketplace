import { type Connector, type ConnectVariables } from "@starknet-react/core";
import Button from "../ui/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

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
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div>
        {address ? (
          <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              JL
            </span>
          </div>
        ) : (
          <div className="text-primary text-xl font-bold">
            Welcome to CofiBlocks ☕️
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-gray-600" />
        {!address ? (
          <ul className="flex gap-2">
            {connectors.map((connector) => (
              <li key={connector.id}>
                <button
                  onClick={() => connect({ connector })}
                  className="bg-primary text-secondary w-[8.125rem] rounded-xl p-4 font-bold shadow-md"
                >
                  CONNECT
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <Button onClick={disconnect}>Disconnect </Button>
        )}
      </div>
    </header>
  );
}
