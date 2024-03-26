const coffeeCards = [
  {
    id: 1,
    title: "Café Las Peñas",
    description:
      "Notas de chocolate oscuro, nuez y un toque sutil de cítricos. Cuerpo medio con una acidez equilibrada.",
    imageUrl: "/images/cafe1.webp",
    imageAlt: "Paquete de Café Las Peñas",
  },
  {
    id: 2,
    title: "Café Tarrazú",
    description:
      "Perfil vibrante con notas de frutas rojas, manzana verde y un final limpio. Acidez brillante y cuerpo ligero.",
    imageUrl: "/images/cafe2.webp",
    imageAlt: "Paquete de Café Tarrazú",
  },
  {
    id: 3,
    title: "Café Monteverde",
    description:
      "Complejo con notas de caramelo, almendra y miel. Cuerpo cremoso con una acidez suave.",
    imageUrl: "/images/cafe3.webp",
    imageAlt: "Paquete de Café Monteverde",
  },
  {
    id: 4,
    title: "Café Naranjo",
    description:
      "Aromas de vainilla y cacao, con un perfil de sabor que incluye fruta madura y un cuerpo robusto.",
    imageUrl: "/images/cafe4.webp",
    imageAlt: "Paquete de Café Naranjo",
  },
  {
    id: 5,
    title: "Café Dota",
    description:
      "Notas florales y de frutas cítricas con un toque de té negro. Acidez vivaz y cuerpo ligero.",
    imageUrl: "/images/cafe5.webp",
    imageAlt: "Paquete de Café Dota",
  },
  {
    id: 6,
    title: "Café Monteverde",
    description:
      "Complejo con notas de caramelo, almendra y miel. Cuerpo cremoso con una acidez suave.",
    imageUrl: "/images/cafe3.webp",
    imageAlt: "Paquete de Café Monteverde",
  },
  {
    id: 7,
    title: "Café Naranjo",
    description:
      "Aromas de vainilla y cacao, con un perfil de sabor que incluye fruta madura y un cuerpo robusto.",
    imageUrl: "/images/cafe4.webp",
    imageAlt: "Paquete de Café Naranjo",
  },
  {
    id: 8,
    title: "Café Dota",
    description:
      "Notas florales y de frutas cítricas con un toque de té negro. Acidez vivaz y cuerpo ligero.",
    imageUrl: "/images/cafe5.webp",
    imageAlt: "Paquete de Café Dota",
  },
];

import React from "react";
import Card from "~/components/ui/Card";
import { api } from "~/utils/api";

export default function ProductCatalog() {
  const [addedProduct, setAddedProduct] = React.useState<number | null>(null);

  const utils = api.useUtils();

  const { mutate: addItem } = api.shoppingCart.addItem.useMutation({
    onSuccess: async () => {
      await utils.shoppingCart.invalidate();
      setAddedProduct(null);
    },
  });

  const handleAddToCart = (productId: number) => {
    const cartId = 1;
    addItem({ cartId, productId, quantity: 1 });
    setAddedProduct(productId);
  };

  return (
    <div className="grid grid-cols-1 gap-10 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {coffeeCards.map(({ id, title, description, imageUrl, imageAlt }) => (
        <div key={id}>
          <Card
            title={title}
            description={description}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            price="10.00"
            productId={String(id)}
            onClick={handleAddToCart}
            isAddingToShoppingCart={addedProduct === id}
          />
        </div>
      ))}
    </div>
  );
}
