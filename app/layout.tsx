import "./globals.css";
import Link from "next/link";
import { MobileNav, ToastProvider } from "@/components/feedback";
export const dynamic = "force-dynamic";
const links = [["/dashboard","Dashboard","dashboard"],["/prospects","Prospects","prospects"],["/pipeline","Pipeline","pipeline"],["/follow-ups","Follow-ups","follow-ups"],["/import-export","Import / Export","import-export"],["/niches","Niches","niches"],["/settings","Settings","settings"]] as const;
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><ToastProvider><div className="shell"><MobileNav links={links}/><main className="main">{children}</main></div></ToastProvider></body></html> }
