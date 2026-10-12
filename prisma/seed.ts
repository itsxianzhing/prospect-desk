import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const stages = ["New", "Researching", "Qualified", "Ready to Contact", "Contacted", "Responded", "Meeting Scheduled", "Proposal Sent", "Won", "Lost"];
async function main() {
  for (const [sortOrder, name] of stages.entries()) await prisma.pipelineStage.upsert({ where: { name }, update: { sortOrder }, create: { name, sortOrder } });
  for (const name of ["Restaurant & Cafe", "Professional Services", "Retail", "Health & Wellness", "Education"]) await prisma.niche.upsert({ where: { name }, update: {}, create: { name } });
  const stage = await prisma.pipelineStage.findUniqueOrThrow({ where: { name: "New" } });
  const niche = await prisma.niche.findUniqueOrThrow({ where: { name: "Restaurant & Cafe" } });
  await prisma.business.upsert({ where: { id: "seed-aurora-cafe" }, update: {}, create: { id: "seed-aurora-cafe", name: "Aurora Bean Cafe", address: "South Jakarta", websiteStatus: "NO_WEBSITE", leadSource: "Seed data", priority: "HIGH", stageId: stage.id, nicheId: niche.id, notes: "Fictional seed business for demonstration." } });
  await prisma.business.upsert({ where: { id: "seed-lumen-studio" }, update: {}, create: { id: "seed-lumen-studio", name: "Lumen Studio", address: "Bandung", websiteStatus: "NEEDS_VERIFICATION", leadSource: "Seed data", priority: "MEDIUM", stageId: stage.id, nicheId: niche.id, notes: "Fictional seed business for demonstration." } });
}
main().finally(() => prisma.$disconnect());
