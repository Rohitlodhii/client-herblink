import { useTranslation } from "react-i18next"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "../ui/navigation-menu"

type Props = {
  isMobile?: boolean
}

const DropdownMenu = ({ isMobile }: Props) => {
  const { t } = useTranslation()

  if (isMobile) {
    // Simple stacked version for mobile
    return (
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{t("navbar.DDOrgs")}</span>
        <div className="flex flex-col border-l pl-2">
          <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs1")}</div>
          <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs2")}</div>
          <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs3")}</div>
          <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs4")}</div>
        </div>
      </div>
    )
  }

  // Desktop version (your original)
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("navbar.DDOrgs")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-52 flex flex-col">
              <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs1")}</div>
              <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs2")}</div>
              <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs3")}</div>
              <div className="hover:bg-accent px-4 py-2">{t("navbar.ddorgs4")}</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default DropdownMenu
