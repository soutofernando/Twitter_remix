import { redirect } from "@remix-run/node";

const logado = true

export const loader = () => {
  if (logado) {
    return redirect("/home")
  }
  return redirect("/login")
}

export default function Index() {

  return (
    <div>

    </div>
  );
}
