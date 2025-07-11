import type { Route } from "./+types/home";
import { Index } from "../pages/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LUFILMS" },
    { name: "description", content: "Aumenta ventas" },
    { rel: "icon", type: "image/png", href: "img/logoLu.png" },
  ];
}

export default function Home() {
  return <Index/>;
}
