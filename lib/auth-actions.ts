"use server";
import { login as performLogin, logout as performLogout } from "./auth";
export async function login(previous: unknown, form: FormData) { return performLogin(previous, form); }
export async function logout() { return performLogout(); }
