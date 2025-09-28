import { useTranslation } from "react-i18next"
import { useRouter } from "@tanstack/react-router"
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
  const router = useRouter()

  const handleNavigation = (route: string) => {
    router.navigate({ to: route })
  }

  if (isMobile) {
    // Simple stacked version for mobile
    return (
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{t("navbar.DDOrgs")}</span>
        <div className="flex flex-col border-l pl-2">
          <div onClick={() => handleNavigation('/kisan')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs1")}</div>
          <div onClick={() => handleNavigation('/processor')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs2")}</div>
          <div onClick={() => handleNavigation('/lab')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs3")}</div>
          <div onClick={() => handleNavigation('/manufacturer')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs4")}</div>
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
              <div onClick={() => handleNavigation('/kisan')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs1")}</div>
              <div onClick={() => handleNavigation('/processor')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs2")}</div>
              <div onClick={() => handleNavigation('/lab')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs3")}</div>
              <div onClick={() => handleNavigation('/manufacturer')} className="hover:bg-accent px-4 py-2 cursor-pointer">{t("navbar.ddorgs4")}</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default DropdownMenu
