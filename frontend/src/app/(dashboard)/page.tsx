import { redirect } from "next/navigation";

export default function Dashboard() {
  const role = "users";

  if (role === "admin") {
    redirect("/admin");
  }

  redirect("/users");
}
