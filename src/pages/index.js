import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img width="250" src="img/kygekteam.png" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocsIndex() {
  return (
    <>
      <center>
        <br /><h2>KygekTeam Docs Index</h2>
        <Link to="/docs/php-coding-standards" className="button button--primary button--lg">PHP Coding Standards</Link><br /><br />
        <Link to="/docs/pm4" className="button button--primary button--lg">PocketMine-MP 4 Plugins</Link><br /><br />
      </center>
    </>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={''}
      description="Docs for KygekTeam">
      <HomepageHeader />
      <main>
          <DocsIndex />
      </main>
    </Layout>
  );
}
