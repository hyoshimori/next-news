import "normalize.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.body}>
      <h1 className={styles.about}>About NextNews</h1>
      <p>
        Welcome to our News App, a personal non-commercial portfolio project
        that aggregates and presents news articles using the New York Times API.
        By using our app, you agree to these simplified terms.
      </p>
      <b>
        Please note that some of the New York Times API features are
        experimental and might contain inaccuracies, errors, or bugs. The API is
        provided as is without any warranties, express or implied. Use of this
        app is at your own discretion and risk, and we are not responsible for
        any damage or loss resulting from its use.:
      </b>
      <ol>
        <li>
          <b>Personal Portfolio: </b>
          <span>
            This app is created as a personal portfolio project and is not
            intended for commercial use.
          </span>
        </li>
        <li>
          <b>Non-commercial use: </b>
          <span>
            Our app is for personal, non-commercial use only, in accordance with
            the New York Times API terms.
          </span>
        </li>
        <li>
          <b>Intellectual Property: </b>
          <span>
            All content provided by the New York Times API is the property of
            The New York Times Company and protected by copyrights, trademarks,
            and other proprietary rights.
          </span>
        </li>
        <li>
          <b>No modification allowed: </b>
          <span>
            Users are not allowed to modify, reproduce, or redistribute the
            content provided by the New York Times API in any way.
          </span>
        </li>
      </ol>
      <p>
        By using this website and accessing the news section, you acknowledge
        and agree to the above terms related to the news content. I strive to
        maintain transparency and compliance with New York Times terms of
        service while providing users with an informative and engaging
        experience.
      </p>
      <p>
        If you have any questions or concerns about the news content or its
        attribution, please have a look at the term of service.
      </p>
      <p>
        Thank you for visiting our portfolio website and exploring our projects.
        We hope you enjoy your stay and find the content interesting and
        valuable.
      </p>

      <div className={styles.right_icon}>
        <a href="./">
          <ArrowBackIosNewIcon className={styles.back} />
        </a>
      </div>
    </div>
  );
}
