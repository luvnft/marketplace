import { XMarkIcon } from "@heroicons/react/24/solid";
import { api } from "~/utils/api";

interface ShoppingCartProps {
  closeCart: () => void;
}

export default function ShoppingCart({ closeCart }: ShoppingCartProps) {
  const cartId = 2;

  const utils = api.useUtils();
  const { data: cartItems, isLoading } = api.shoppingCart.getItems.useQuery({
    cartId,
  });

  const { mutate: removeItem } = api.shoppingCart.removeItem.useMutation({
    onSuccess: async () => {
      await utils.shoppingCart.invalidate();
    },
  });

  const handleRemoveItem = (itemId: number) => {
    removeItem({ itemId });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="absolute right-0 top-14 w-96 bg-white p-4 shadow-xl">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-xl font-bold">Shopping Cart</h3>
        <button className="text-sm text-gray-600 underline" onClick={closeCart}>
          Close
        </button>
      </div>
      <div className="flex flex-col items-stretch gap-4 text-sm">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center  justify-start gap-6"
          >
            <p>{item.product.name}</p>
            <p>${item.product.price}</p>
            <button
              className="justify-self-end text-left text-sm"
              onClick={() => handleRemoveItem(item.id)}
            >
              <XMarkIcon className="w-6  text-red-600" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between border-t-2 pt-2 font-bold">
        <p>Total</p>
        <p>
          $
          {cartItems?.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0,
          )}
        </p>
      </div>
      <button className="mt-4 w-full rounded-xl bg-primary p-4 text-white">
        Checkout
      </button>
    </div>
  );
}
