import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to the /work page
  redirect("/home");
}
