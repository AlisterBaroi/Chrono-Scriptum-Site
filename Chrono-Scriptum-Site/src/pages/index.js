import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero', styles.heroBanner)}>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <p className={styles.dummyText}>{siteConfig.tagline}</p> */}
        <p className={styles.dummyText}>Releases on Windows, Linux & macOS</p>
        {/* Download Buttons */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            // to="/docs/intro">
            to="https://github.com/AlisterBaroi/Chrono-Scriptum-Site">
            Windows
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://example.com/linux-download">
            Linux
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://example.com/mac-download">
            macOS
          </Link>
        </div>
        {/* <p className={styles.dummyText2}>Free and Open-Source screen recorder. Build for simplicty, leting you focus on the screen activity.</p> */}
        <br />
        <p className={styles.dummyText2}>Free and Open-Source screen recorder.</p>
        <p className={styles.dummyText2}>Build for simplicty, letting you focus on what matters on the screen.</p>
      </div>
      <div className={styles.heroImage}>
        <img src="..\img\undraw_docusaurus_tree.svg" alt="Hero illustration" />
      </div>

    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
