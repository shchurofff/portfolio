import type { SkillChip } from "@/types/skill-chip";
import axiosLogo from "@/assets/skills/axios-icon.svg";
import chakraUiLogo from "@/assets/skills/chakra-ui-icon.svg";
import javascriptLogo from "@/assets/skills/javascript-logo-svgrepo-com.svg";
import reduxLogo from "@/assets/skills/js_redux-icon.svg";
import nextJsLogo from "@/assets/skills/next-js-svgrepo-com.svg";
import postgresqlLogo from "@/assets/skills/postgresql-icon.svg";
import prismaLogo from "@/assets/skills/prisma-svgrepo-com.svg";
import reactLogo from "@/assets/skills/react-svgrepo-com.svg";
import reactRouterLogo from "@/assets/skills/reactrouter-icon.svg";
import sassLogo from "@/assets/skills/sass-lang-icon.svg";
import tailwindLogo from "@/assets/skills/tailwindcss-icon.svg";
import tanstackLogo from "@/assets/skills/tanstack-logo.png";
import tsLogo from "@/assets/skills/typescript-svgrepo-com.svg";
import viteLogo from "@/assets/skills/vitejsdev-icon.svg";
import vueLogo from "@/assets/skills/vuejs-icon.svg";
import htmlLogo from "@/assets/skills/w3_html5-icon.svg";
import shadcnLogo from "@/assets/skills/shadcn-ui-seeklogo.svg";

export const skillChips: SkillChip[] = [
  { icon: htmlLogo, label: "HTML5" },
  { icon: javascriptLogo, label: "JavaScript" },
  { icon: tsLogo, label: "TypeScript" },
  { icon: vueLogo, label: "Vue" },
  { icon: reactLogo, label: "React" },
  { icon: nextJsLogo, label: "Next.js" },
  { icon: reactRouterLogo, label: "React Router" },
  { icon: reduxLogo, label: "Redux" },
  { icon: tanstackLogo, label: "TanStack" },
  { icon: sassLogo, label: "Sass" },
  { icon: tailwindLogo, label: "Tailwind CSS" },
  { icon: shadcnLogo, label: "Shadcn/ui" },
  { icon: chakraUiLogo, label: "Chakra UI" },
  { icon: axiosLogo, label: "Axios" },
  { icon: prismaLogo, label: "Prisma" },
  { icon: postgresqlLogo, label: "PostgreSQL" },
  { icon: viteLogo, label: "Vite" },
];
