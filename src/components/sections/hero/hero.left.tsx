import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from "helpers/data";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

const HeroLeft = () => {
  const { t } = useTranslation();

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCV = () => {
    try {
      const cvPath = "/Nguyen_Quoc_Doan_CV.pdf";
      window.open(cvPath, "_blank");
      console.log("CV opened successfully!");
    } catch (error) {
      console.error("Error opening CV:", error);
      alert("Không thể mở CV. Vui lòng thử lại!");
    }
  };

  return (
    <div className="hero-left">
      <h3>
        Hello!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'M &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: [
            "Beginner Today, Builder Tomorrow",
            "Small Steps, 1% Progress",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          facebook={APP_DATA.FACEBOOK_URL}
          github={APP_DATA.GIT_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
          onClick={handleSkillsClick}
        />
        <ResizeButton
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
          onClick={handleOpenCV}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
