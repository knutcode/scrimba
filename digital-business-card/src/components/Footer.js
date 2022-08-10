import facebookIcon from "../icons/Facebook-Icon.png";
import githubIcon from "../icons/GitHub-Icon.png";
import instagramIcon from "../icons/Instagram-Icon.png";
import twitterIcon from "../icons/Twitter-Icon.png";

function Footer() {
  return (
    <footer>
      <img src={facebookIcon} alt="facebook icon" className="footer--icon" />
      <img src={githubIcon} alt="github icon" className="footer--icon" />
      <img src={instagramIcon} alt="instagram icon" className="footer--icon" />
      <img src={twitterIcon} alt="twitter icon" className="footer--icon" />
    </footer>
  );
}

export default Footer;
