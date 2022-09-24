const { PrismaClient } = require("@prisma/client");

const bcrypt = require("bcryptjs").default;

const prisma = new PrismaClient();

async function seed() {
  const email = "adam@adamgr.dev";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const user = await prisma.user.create({
    data: {
      email
    },
  });

  await prisma.post.create({
    data: {
      name: "Test Post",
      body: "Hello, world!",
      userId: user.id,
      status: 0,
      scheduledFor: null
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
