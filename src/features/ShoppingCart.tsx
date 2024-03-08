import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "~/components/ui/Button";

interface ShoppingCartProps {
    closeCart: () => void;
}


export default function ShoppingCart({ closeCart }: ShoppingCartProps) {
  return (
    <div className="absolute right-0 top-14 w-96 bg-white p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Shopping Cart</h3>
        <button onClick={closeCart}><XMarkIcon className="w-6 text-primary font-bld" /></button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Product 1</p>
          <p>$100</p>
        </div>
        <div className="flex justify-between">
          <p>Product 2</p>
          <p>$100</p>
        </div>
        <div className="flex justify-between">
          <p>Product 3</p>
          <p>$100</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <p>Total</p>
        <p>$300</p>
      </div>
      <button className="mt-4 w-full rounded-xl bg-primary p-4 text-white">
        Checkout
      </button>
    </div>
  );
}