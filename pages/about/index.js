import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <div className="bg">
      <div className="container">
        <Header />
        <div className="wrapper">
          <h1 className="center-title">About us</h1>
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
            Join us today and discover how we can help you reach your full
            potential!
          </h4>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
