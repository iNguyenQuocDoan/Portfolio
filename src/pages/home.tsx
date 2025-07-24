import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "../components/sections/hero/hero.left";
import HeroRight from "../components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import bg from "../assets/section.svg";
import Introduction from "../components/sections/introduction";
import ResizeButton from "../components/sections/resize.button";
import { useTranslation } from "react-i18next";
import Divider from "../components/sections/divider";
import Experience from "../components/sections/experience";
import Skill from "../components/sections/skill";

const HomePage = () => {
  const { t } = useTranslation();

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCV = () => {
    window.open(
      `${process.env.PUBLIC_URL}/assets/Nguyen_Quoc_Doan_CV.pdf`,
      "_blank"
    );
  };

  return (
    <div className="homepage-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-md-7 mt-2">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
            <Col
              xs={12}
              className="d-md-none d-flex mt-4 justify-content-center gap-3"
            >
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
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Introduction />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          <Experience />
        </Container>
      </section>
      <Divider />
      <section id="skills-section">
        <Container>
          <Skill />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
