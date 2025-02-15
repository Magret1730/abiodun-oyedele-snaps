import "./Footer.scss";
import NavLogo from "../NavLogo/NavLogo";
import FacebookIcon from "../../assets/Icons/Facebook.svg";
import XIcon from "../../assets/Icons/X_twitter.svg";
import InstagramIcon from "../../assets/Icons/Instagram.svg";
import PinterestIcon from "../../assets/Icons/Pinterest.svg";

export default function Footer() {
    return (
        <article className="footer">
            <section className="footer__container">
                <section className="footer__logo">
                    <NavLogo />
                </section>

                <section className="footer__box">
                    <div className="footer__contents">
                        <p>For photographers</p>
                        <p>Hire talents</p>
                        <p>Inspiration</p>
                    </div>
                    <div className="footer__content">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Support</p>
                    </div>
                    <div className="footer__socials">
                        <img src={FacebookIcon} alt="Facebook Icon" />
                        <img src={XIcon} alt="Twitter Icon" />
                        <img src={InstagramIcon} alt="Instagram Icon" />
                        <img src={PinterestIcon} alt="Pinterest Icon" />
                    </div>
                </section>
            </section>

            <section className="footer__securities">
                <div className="footer__securities-socials">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                    <img src={XIcon} alt="Twitter Icon" />
                    <img src={InstagramIcon} alt="Instagram Icon" />
                    <img src={PinterestIcon} alt="Pinterest Icon" />
                </div>

                <div className="footer__securities-terms">
                    <p>&copy;2024 Snaps</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
            </section>
        </article>
    )
}