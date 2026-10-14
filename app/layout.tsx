import "./globals.css";
import Link from "next/link";
import { MobileNav, ToastProvider } from "@/components/feedback";
import { LogoutButton } from "@/components/logout-button";
import { getSession } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const links = [["/dashboard","Dashboard","dashboard"],["/prospects","Prospects","prospects"],["/pipeline","Pipeline","pipeline"],["/follow-ups","Follow-ups","follow-ups"],["/import-export","Import / Export","import-export"],["/niches","Niches","niches"],["/settings","Settings","settings"]] as const;
export default async function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { const path=(await headers()).get("x-pathname") || "/"; const session=await getSession(); if(path !== "/login" && !session) redirect("/login"); if(path === "/login" && session) redirect("/dashboard"); return <html lang="en"><body><ToastProvider><div className="shell">{path !== "/login" && <><MobileNav links={links}/><LogoutButton/></>}<main className={path === "/login" ? "main login-main" : "main"}>{children}</main></div></ToastProvider></body></html> }
