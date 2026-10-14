import { logout } from "@/lib/auth-actions";
export function LogoutButton(){return <form action={logout} className="logout-form"><button className="button" type="submit">Sign out</button></form>}
