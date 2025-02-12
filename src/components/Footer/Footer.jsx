import "./Footer.scss";
import NavLogo from "../NavLogo/NavLogo";

export default function Footer() {
    return (
        <article className="footer">
            <section>
                <NavLogo />
            </section>
            <section className="footer__container">
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
                    <img src="../../assets/Icons/Facebook.svg" alt="Facebook" />
                    <img src="../../assets/Icons/X_twitter.svg" alt="Twitter" />
                    <img src="../../assets/Icons/Facebook.svg" alt="Instagram" />
                    <img src="../../assets/Icons/Pinterest.svg" alt="Pinterest" />
                </div>
            </section>
            <section className="footer__securities">
                <div>&copy;2024 Snaps</div>
                <div>Terms</div>
                <div>Privacy</div>
                <div>Cookies</div>
            </section>
        </article>
    )
}