import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Demo() {
  const { t, i18n } = useTranslation();
  const [langStatus, setLangStatus] = useState(true);
  const toggle = () => {
    setLangStatus(!langStatus);
  };
  useEffect(() => {
    i18n.changeLanguage(langStatus ? "zh" : "en");
  }, [langStatus]);
  return (
    <>
      <div>{t("name")}</div>
      <Button onClick={toggle} variant="contained">
        中英切换
      </Button>
    </>
  );
}
