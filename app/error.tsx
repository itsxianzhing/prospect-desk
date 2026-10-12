"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="card card-pad" style={{ maxWidth: 680, margin: "8vh auto" }}><h1>Database connection unavailable</h1><p className="subtle">ProspectDesk could not reach MySQL at the configured address. Start MySQL, verify DATABASE_URL in .env, then retry.</p><div className="actions" style={{ justifyContent: "flex-start" }}><button className="button primary" onClick={() => reset()}>Retry</button></div></main>;
}
