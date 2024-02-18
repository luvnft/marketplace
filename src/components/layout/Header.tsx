import { type Connector, type ConnectVariables } from "@starknet-react/core";

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
    <div className="flex flex-row items-center justify-between">
      <div>
        {address ? (
                <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            JL
          </span>
        </div>
        ) : (
            <div className="font-bold text-primary text-xl">
                Welcome to CofiBlocks ☕️
            </div>
        )}
    
      </div>
      <div>
        {!address ? (
          <ul>
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
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => disconnect()}
              className="bg-primary text-secondary w-[8.125rem] rounded-xl p-4 font-bold shadow-md"
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
