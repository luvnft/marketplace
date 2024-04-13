import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.shoppingCartItem.deleteMany();
  await prisma.shoppingCart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Insert new users
  const user1 = await prisma.user.create({
    data: {
      walletAddress: "0xUniqueWalletAddress1",
      phone: "123-456-7890",
      address: "123 User Street",
      name: "Alice",
      role: "COFFEE_BUYER",
    },
  });

  // Insert new products
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

  // Create a shopping cart for user1 with products
  const cart = await prisma.shoppingCart.create({
    data: {
      userId: user1.id,
      items: {
        create: [
          { productId: product1.id, quantity: 1 },
          { productId: product2.id, quantity: 2 },
        ],
      },
    },
  });

  // Create an order for user1 with both products
  const order = await prisma.order.create({
    data: {
      userId: user1.id,
      total: product1.price + 2 * product2.price, // Simplify total calculation
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
    `Seed data inserted: Order ${order.id} created for ${user1.name}, shopping cart ${cart.id} created for ${user1.name}`,
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


