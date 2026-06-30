import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const nodes = await prisma.node.findMany({
    where: { workflowId: "cmr0q8wi90001o19wyrk37he0" },
  });
  console.log(JSON.stringify(nodes, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
