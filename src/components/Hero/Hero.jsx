import "./Hero.scss";

export default function Hero() {
    return (
        <section className="hero">
            <h4 className="hero__header">Our mission:</h4>
            <div className="hero__texts">Provide photographers a space to share photos of the neighbourhoods they cherish,
                <span className="hero__texts-span"> expressed in their unique style.</span></div>
        </section>
    )
}