import Link from "next/link";
import { label, badgeClass } from "@/lib/labels";
export function Badge({ value }: {value:string}) { return <span className={`badge ${badgeClass(value)}`}>{label(value)}</span> }
export function PageHeader({ title, description, action }: {title:string;description?:string;action?:React.ReactNode}) { return <div className="topbar"><div><h1>{title}</h1>{description && <div className="subtle">{description}</div>}</div>{action}</div> }
export function LinkButton({ href, children, primary=false }: {href:string;children:React.ReactNode;primary?:boolean}) { return <Link className={`button ${primary?"primary":""}`} href={href}>{children}</Link> }
export function Empty({ text="Nothing here yet." }) { return <div className="empty">{text}</div> }
