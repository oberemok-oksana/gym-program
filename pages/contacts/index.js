import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "../../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className="bg">
      <div className="container">
        <Header />
        <div className="wrapper">
          <h1 className="center-title">Our Contacts</h1>
        </div>
        <div className="padding">
          <p className={styles.text}>
            Welcome to our workout website! We are dedicated to helping you
            achieve your fitness goals through expert guidance, effective
            training programs, and a supportive community. Our team of
            experienced trainers and coaches is passionate about helping you
            lead a healthier, happier life. Whether you're a beginner or a
            seasoned athlete, we have everything you need to reach your full
            potential. Join us today and start your journey to a stronger,
            fitter you!
          </p>
          <h4 className={styles.title}>
            We have different ways how you can contact us:
          </h4>
          <ul className={styles.list}>
            <li>
              <a href="https://www.facebook.com/">
                <img
                  src="/images/facebook.svg"
                  alt="facebook"
                  className={styles.image}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img
                  src="/images/instagram.svg"
                  alt="instagram"
                  className={styles.image}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                {" "}
                <img
                  src="/images/twitter.svg"
                  alt="twitter"
                  className={styles.image}
                />
              </a>
            </li>
          </ul>
          <p className={styles.text}>or just call us. Tel : +38096588445585</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
