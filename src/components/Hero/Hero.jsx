import "./Hero.scss";

// Displays the hero texts
export default function Hero({ isActive }) {
    return (
        <section className="hero">
            <h4 className={ `${isActive ? "hero__header-filters" : "hero__header"}` }>Our mission:</h4>
            <div className={ `${isActive ? "hero__texts-filters" : "hero__texts"}` }>Provide photographers a space to share photos of the neighbourhoods they cherish,
                <span className="hero__texts-span"> expressed in their unique style.</span></div>
        </section>
    )
}
