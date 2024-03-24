const coffeeCards = [
  {
    id: 1,
    title: "Café de Especialidad 1",
    description: "Descripción del Café de Especialidad 1.",
    imageUrl: "/images/cafe1.webp",
    imageAlt: "Paquete de Café de Especialidad 1",
  },
  {
    id: 2,
    title: "Café de Especialidad 2",
    description: "Descripción del Café de Especialidad 2.",
    imageUrl: "/images/cafe2.webp",
    imageAlt: "Paquete de Café de Especialidad 2",
  },
  {
    id: 3,
    title: "Café de Especialidad 3",
    description: "Descripción del Café de Especialidad 3.",
    imageUrl: "/images/cafe3.webp",
    imageAlt: "Paquete de Café de Especialidad 3",
  },
  {
    id: 4,
    title: "Café de Especialidad 4",
    description: "Descripción del Café de Especialidad 4.",
    imageUrl: "/images/cafe4.webp",
    imageAlt: "Paquete de Café de Especialidad 4",
  },
  {
    id: 5,
    title: "Café de Especialidad 5",
    description: "Descripción del Café de Especialidad 5.",
    imageUrl: "/images/cafe5.webp",
    imageAlt: "Paquete de Café de Especialidad 5",
  },
  {
    id: 6,
    title: "Café de Especialidad 3",
    description: "Descripción del Café de Especialidad 3.",
    imageUrl: "/images/cafe3.webp",
    imageAlt: "Paquete de Café de Especialidad 3",
  },
  {
    id: 7,
    title: "Café de Especialidad 4",
    description: "Descripción del Café de Especialidad 4.",
    imageUrl: "/images/cafe4.webp",
    imageAlt: "Paquete de Café de Especialidad 4",
  },
  {
    id: 8,
    title: "Café de Especialidad 5",
    description: "Descripción del Café de Especialidad 5.",
    imageUrl: "/images/cafe5.webp",
    imageAlt: "Paquete de Café de Especialidad 5",
  },
];

import React from "react";
import  Card  from "~/components/ui/Card";
import { api } from "~/utils/api";

export default function ProductCatalog() {


  const [isAddingToShoppingCart, setIsAddingToShoppingCart] = React.useState<string | null>(null);

  const utils = api.useUtils();

  const {mutate : addItem} = api.shoppingCart.addItem.useMutation({
    onSuccess: async () => {
      await utils.shoppingCart.invalidate();
      setIsAddingToShoppingCart(null);
    }
  });

  const handleAddToCart = (productId: string) => {
    // Aquí necesitas obtener el `cartId` del usuario actual. Esto es solo un placeholder.
    const cartId = 1; // Placeholder: reemplaza esto con la lógica para obtener el ID del carrito real del usuario
    addItem({ cartId, productId, quantity: 1});
    setIsAddingToShoppingCart(productId);

  }

  return (
    <div className="grid grid-cols-1 gap-10 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {coffeeCards.map(({ id, title, description, imageUrl, imageAlt }) => (
        <div key={id}>
          <Card
            loading={isAddingToShoppingCart}
            title={title}
            description={description}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            price="10.00"
            productId={id}
            onClick={handleAddToCart}
            isAddingToShoppingCart={isAddingToShoppingCart === id}
          />
        </div>
      ))}
    </div>
  );
}