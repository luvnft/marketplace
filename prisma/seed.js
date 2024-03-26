import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Usuarios de ejemplo
  const user1 = await prisma.user.create({
    data: {
      walletAddress: "0xUniqueWalletAddress1",
      phone: "123-456-7890",
      address: "123 User Street",
      name: "Alice",
      role: "COFFEE_BUYER",
    },
  });

  // Productos de ejemplo
  const product1 = await prisma.product.create({
    data: {
      name: "Cafe Las Peñas",
      price: 10.5,
      nftMetadata: JSON.stringify({
        origin: "Costa Rica",
        producer: "Cafe Las Peñas",
        roast: "Medium",
      }),
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Café Yirgacheffe Etiopía",
      price: 12.75,
      nftMetadata: JSON.stringify({
        origin: "Etiopía",
        producer: "Cooperative Banko Gotiti",
        roast: "Light",
      }),
    },
  });

  // Crear una orden para el usuario1 con ambos productos
  const order = await prisma.order.create({
    data: {
      userId: user1.id,
      total: product1.price + product2.price, // Simplicidad en el cálculo del total
      status: "PENDING",
      items: {
        create: [
          { productId: product1.id, quantity: 1, price: product1.price },
          { productId: product2.id, quantity: 2, price: product2.price },
        ],
      },
    },
  });

  console.log(
    `Seed data inserted: Order ${order.id} created for ${user1.name}`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
