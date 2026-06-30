import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const updated = await prisma.node.update({
    where: { id: "a1cnq3qyeu8x29ptm5ufyldg" },
    data: {
      data: {
        credentialId: "cmr0qm3qo0004o19w8a8qc2pq",
        systemPrompt: "you are a feedback reviewer",
        variableName: "myGemini",
        userPrompt:
          "The applicant selected: {{googleForm.responses.[Which work model do you currently prefer?]}}\n\nExplain what onboarding setup is needed for this preference.\n",
      },
    },
  });
  console.log("Updated node:", JSON.stringify(updated, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
