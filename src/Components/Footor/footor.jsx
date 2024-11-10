import "./footor.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";

const Footor = () => {
  return (
    <div className="footor">
      <div className="footorIcons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={youtubeIcon} alt="YouTube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Accessibility</li>
        <li>Help Center</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footor;
