import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col gap-1 text-xs ">
      <select
        value={i18n.language} // current language
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded px-2 py-1 "
      >
        <option value="en">English</option>
        <option value="hi">हिंदी (Hindi)</option>
        <option value="mr">मराठी (Marathi)</option>
        <option value="ta">தமிழ் (Tamil)</option>
        <option value="te">తెలుగు (Telugu)</option>
        <option value="kn">ಕನ್ನಡ (Kannada)</option>
        <option value="bn">বাংলা (Bengali)</option>
        <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
        <option value="gu">ગુજરાતી (Gujarati)</option>
      </select>
    </div>
  );
};

export default LanguageSelect;