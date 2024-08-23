import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/prakhar-kumar-singh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/prakhar0007" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://github.com/prakhar00007" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;