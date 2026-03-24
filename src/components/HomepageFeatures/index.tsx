import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Guide',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn the fundamentals behind monitor size, resolution, panel
        technology, refresh rate, interfaces, and image quality so you can
        judge products on your own.
        <div style={{marginTop: '1rem'}}>
          <Link className="button button--outline button--primary" to="/docs/intro">
            Explore the Guide
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Our Picks',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Curated recommendation hubs for office work, programming, gaming, color
        work, and budget ranges. The architecture is ready for evergreen buying
        guides and affiliate-safe layouts.
        <div style={{marginTop: '1rem'}}>
          <Link
            className="button button--outline button--primary"
            to="/recommendations">
            View Recommendation Hub
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Reviews',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Long-form comparisons, product reviews, and buying updates live in the
        blog section. This keeps evergreen guides separate from time-sensitive
        publishing.
        <div style={{marginTop: '1rem'}}>
          <Link className="button button--outline button--primary" to="/blog">
            Visit the Blog
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.card)}>
        <Svg className={styles.featureSvg} role="img" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
