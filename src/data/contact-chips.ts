import type { ContactChip } from "@/types/contact-chip";
import githubLogo from "@/assets/contacts/GitHub_Invertocat_Black.svg";
import gmailLogo from "@/assets/contacts/gmail-icon.svg";
import yamailLogo from "@/assets/contacts/Yandex_Mail_icon.svg";
import tgLogo from "@/assets/contacts/telegram-icon.svg";
import vkLogo from "@/assets/contacts/vk-icon.svg";

export const contactChips: ContactChip[] = [
  {
    label: "GitHub",
    href: "https://github.com/shchurofff",
    icon: githubLogo,
    external: true,
  },
  {
    label: "Yandex Mail",
    href: "mailto:shchuroffff@yandex.ru",
    icon: yamailLogo,
  },
  {
    label: "Gmail",
    href: "mailto:shchurov.oleg27@gmail.com",
    icon: gmailLogo,
  },
  {
    label: "Telegram",
    href: "https://t.me/shchuroff",
    icon: tgLogo,
    external: true,
  },
  {
    label: "VK",
    href: "https://vk.com/shchuroff",
    icon: vkLogo,
    external: true,
  },
];
