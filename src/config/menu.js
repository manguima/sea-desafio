import { BellIcon } from "../assets/bell-icon";
import { DocIcon } from "../assets/doc-icon";
import { EditIcon } from "../assets/edit-icon";
import { EnterpriseIcon } from "../assets/enterprise-icon";
import { SitemapIcon } from "../assets/sitemap-icon";
import { TimeLoopIcon } from "../assets/time-loop-icon";
import { UserIcon } from "../assets/user-icon";

export const menuItems = [
  {
    key: "enterprise",
    icon: EnterpriseIcon,
    href: "/",
    view: true,
  },
  {
    key: "edit",
    icon: EditIcon,
    href: "/funcionario/lista",
    view: true,
  },
  {
    key: "sitemap",
    icon: SitemapIcon,
    href: "/em-breve",
    view: true,
  },
  {
    key: "bell",
    icon: BellIcon,
    href: "/em-breve",
    badge: DocIcon,
    view: true,
  },
  {
    key: "time",
    icon: TimeLoopIcon,
    href: "/em-breve",
    view: true,
  },
  {
    key: "user",
    icon: UserIcon,
    href: "/em-breve",
    view: true,
  },
  {
    key: "add",
    icon: null,
    href: "/funcionario/adiciona",
    view: false,
  },
];
