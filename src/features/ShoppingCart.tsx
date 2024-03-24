import { XMarkIcon } from "@heroicons/react/24/solid";
import { api } from "~/utils/api";

interface ShoppingCartProps {
  closeCart: () => void;
}

export default function ShoppingCart({ closeCart }: ShoppingCartProps) {
  const cartId = 1; // Asume que tienes la lógica para obtener el cartId

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
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Shopping Cart</h3>
        <button onClick={closeCart}>
          <XMarkIcon className="w-6 text-primary" />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {cartItems?.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <p>{item.product.name}</p>
            <p>${item.product.price}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
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
