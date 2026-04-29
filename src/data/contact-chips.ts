import type { ContactChip } from "@/types/contact-chip";
import githubLogo from "@/assets/contacts/GitHub_Invertocat_Black.svg";
import gmailLogo from "@/assets/contacts/gmail-icon.svg";
import yamailLogo from "@/assets/contacts/Yandex_Mail_icon.svg";
import tgLogo from "@/assets/contacts/telegram-icon.svg";
import vkLogo from "@/assets/contacts/vk-icon.svg";
import { personalLinks } from "@/constants/links";

export const contactChips: ContactChip[] = [
  {
    label: "GitHub",
    href: personalLinks.github,
    icon: githubLogo,
    external: true,
  },
  {
    label: "Yandex Mail",
    href: personalLinks.email.yandex,
    icon: yamailLogo,
  },
  {
    label: "Gmail",
    href: personalLinks.email.gmail,
    icon: gmailLogo,
  },
  {
    label: "Telegram",
    href: personalLinks.telegram,
    icon: tgLogo,
    external: true,
  },
  {
    label: "VK",
    href: personalLinks.vk,
    icon: vkLogo,
    external: true,
  },
];
