export const dynamic = "force-dynamic";
import { db } from "@/lib/db"; import Link from "next/link"; import { PageHeader, Badge, Empty } from "@/components/ui"; import { updateStage } from "@/lib/actions";
import { MutationForm, SubmitButton } from "@/components/feedback";
export default async function Pipeline(){
  let stages;
  try {
    stages=await db.pipelineStage.findMany({orderBy:{sortOrder:"asc"},include:{businesses:{orderBy:{updatedAt:"desc"},include:{niche:true,stage:true}}}});
  } catch {
    return <><PageHeader title="Pipeline" description="Move prospects through your outreach workflow."/><div className="notice" role="alert">We could not load pipeline stages. Check the database connection and try again.</div></>;
  }
  return <><PageHeader title="Pipeline" description="Move prospects through your outreach workflow."/>{!stages.length?<div className="card card-pad"><Empty text="No pipeline stages are configured yet. Apply the latest database migrations, then refresh this page."/></div>:<div className="stage-grid">{stages.map(s=><div className="stage-col" key={s.id}><div className="stage-head"><span>{s.name}</span><span>{s.businesses.length}</span></div>{s.businesses.map(b=><div className="prospect-card" key={b.id}><Link className="link" href={`/prospects/${b.id}`}>{b.name}</Link><p>{b.niche?.name||"Uncategorized"}</p><MutationForm action={updateStage} style={{marginTop:9}}><input type="hidden" name="id" value={b.id}/><select name="stageId" defaultValue={b.stageId} style={{padding:5,fontSize:11}}>{stages.map(option=><option key={option.id} value={option.id}>{option.name}</option>)}</select><SubmitButton className="button small">Move</SubmitButton></MutationForm></div>)}{!s.businesses.length&&<div className="subtle" style={{padding:10}}>Empty</div>}</div>)}</div>}</>;
}
