import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const SocialMedia = (props) => {
  const { youtube, tiktok, udemy, facebook, github } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Nguyễn Quốc Đoàn"
      >
        <FaFacebook size={30} />
      </a>

      <a
        href={github}
        target="_blank"
        className="highlight"
        title="iNguyenQuocDoan"
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
