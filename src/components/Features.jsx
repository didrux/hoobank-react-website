import styles from "../style";
import {Billing, Business, CardDeal, Clients, CTA, Stats, Testimonials} from "./index.js";

const Features = () => {
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
            </div>
        </div>
    );
};

export default Features;
