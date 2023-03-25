import "normalize.css";
import styles from "./about.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function About() {
  return (
  <div className={styles.body}>
    <h1 className={styles.about}>About NextNews</h1>
    <p>This portfolio website showcases various projects, including a news section that displays the latest news articles from various sources. The news data presented on this website is provided by News API, a powerful and easy-to-use service that aggregates and delivers news data from numerous reputable sources.</p>
    <b>Please note the following important information related to the news content displayed on this website:</b>
    <ol>
      <li>
        <b>News Data Attribution: </b>
        <span>All news data displayed on this website is sourced from News API. We acknowledge and attribute the news data to News API as the provider of this valuable information.</span>
      </li>
      <li>
        <b>Copyright and Proprietary Notices: </b>
        <span>Any copyright, trademark, or proprietary notices within the news content are retained and displayed as received from News API. We do not remove or obscure these notices and respect the intellectual property rights of the original creators and sources.</span>
      </li>
      <li>
        <b>Author Attributions and Source Information: </b>
        <span>We ensure that author names and source information, as provided by News API, are clearly displayed alongside the news content. This maintains proper credit to the original creators and sources of the news articles.</span>
      </li>
      <li>
        <b>Content Ownership and Source Representation: </b>
        <span>We do not claim ownership of the news content displayed on this website, nor do we misrepresent the source of the content. All news articles and associated data are attributed to their original sources and creators, as provided by News API.</span>
      </li>
    </ol>
    <p>By using this website and accessing the news section, you acknowledge and agree to the above terms related to the news content. We strive to maintain transparency and compliance with News API's terms of service while providing users with an informative and engaging experience.</p>
    <p>If you have any questions or concerns about the news content or its attribution, please have a look at the term of service.</p>
    <p>Thank you for visiting our portfolio website and exploring our projects. We hope you enjoy your stay and find the content interesting and valuable.</p>

    <div className={styles.right__icon}>
        <a href="./"><ArrowBackIosNewIcon className={styles.back} /></a>
    </div>
  </div>
)}
