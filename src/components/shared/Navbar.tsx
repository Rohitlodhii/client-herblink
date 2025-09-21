import { useTranslation } from "react-i18next";
import FontSizeButtons from "../custom/FontChangeButton";
import ChangeThemeBtn from "../custom/ChangeTheme";
import LanguageSelect from "../custom/LanguageSelect";
import { Button } from "../ui/button";
import DropdownMenu from "../custom/DropdownMenu";
import { useState } from "react";
import { Link } from "@tanstack/react-router";


const Navbar = () => {

  const { t } = useTranslation();
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="h-10 w-full bg-primary">
        <div className="h-full flex w-full items-center justify-center md:justify-between  max-w-[1116px] mx-auto">
            <div className=" items-center justify-center gap-2 font-medium text-background hidden md:flex">
                <img src="/flag.png" />
               {t("navbar.accessBarHeaderLeft")}</div>
            <div className="flex gap-2 text-xs md:text-base items-center">
                <div>
                  <span className="mx-2 text-background cursor-pointer  hidden md:block md:text-sm ">
                  {t("navbar.accessBarRightSkipButton")} 
                  </span>
                  <span>

                  </span>
                     
                </div>
                <div>
                 <FontSizeButtons/>
                </div>
                <div className="">
                  <ChangeThemeBtn/>
                </div>
                <div>
                 <LanguageSelect/>
                </div>
            </div>
        </div>
      </div>
      <div className="h-20 shadow-md">
      <div className="flex items-center h-full justify-between max-w-[1116px] mx-auto px-4">
        {/* Left Logo */}
        <div className="flex gap-1 items-center">
          <img src="/emblem.png" className="h-10 w-auto" />
          <img src="/ayush.png" width={40} className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu />
          <Link to="/" className="font-medium text-sm hover:underline">
            {t("navbar.DDScan")}
          </Link>
          <Link to="/" className="font-medium text-sm hover:underline">
            {t("navbar.DDcomplain")}
          </Link>
          <Link to="/" className="font-medium text-sm hover:underline">
            {t("navbar.DDHelp")}
          </Link>
          <Link to="/" className="font-medium text-sm hover:underline">
            {t("navbar.DDabout")}
          </Link>
         
        </div>

        <div className="hidden md:flex">
        <Button>{t("navbar.NavLoginBtn")}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-3xl font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "+"}
          </button>
        </div>
      </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-32 left-0 w-full bg-background shadow-md z-50 flex flex-col gap-4 p-4">

          <DropdownMenu isMobile />
          <Link to="/" className="font-medium hover:underline">
            {t("navbar.DDScan")}
          </Link>
          <Link to="/" className="font-medium hover:underline">
            {t("navbar.DDcomplain")}
          </Link>
          <Link to="/" className="font-medium hover:underline">
            {t("navbar.DDHelp")}
          </Link>
          <Link to="/" className="font-medium hover:underline">
            {t("navbar.DDabout")}
          </Link>
          <Button className="w-full">{t("navbar.NavLoginBtn")}</Button>
        </div>
      )}
        
    </div>
  )
}

export default Navbar
