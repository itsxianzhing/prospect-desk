export const dynamic = "force-dynamic";
import { db } from "@/lib/db"; import { PageHeader } from "@/components/ui"; import { BusinessForm } from "@/components/business-form";
export default async function NewProspect(){const [niches,stages]=await Promise.all([db.niche.findMany({orderBy:{name:"asc"}}),db.pipelineStage.findMany({orderBy:{sortOrder:"asc"}})]);return <><PageHeader title="New prospect" description="Save a business to start researching and contacting it."/><BusinessForm niches={niches} stages={stages}/></>}
