import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick Selection Guide',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.features.quickGuide.description">
          Find the perfect monitor for your specific needs - gaming, office work, creative design, or entertainment.
          Get recommendations based on your use case, not marketing hype.
        </Translate>
        <div style={{marginTop: '1rem'}}>
          <Link
            className="button button--outline button--primary"
            to="/docs/quick-guide/by-use-case">
            Start Quick Guide →
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Learn the Fundamentals',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.features.fundamentals.description">
          Understand what monitor specs actually mean and how they affect your experience.
          Master concepts like resolution, refresh rate, panel types, and color accuracy.
        </Translate>
        <div style={{marginTop: '1rem'}}>
          <Link
            className="button button--outline button--primary"
            to="/docs/fundamentals/size-and-resolution">
            Learn Fundamentals →
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Advanced Topics',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.features.advanced.description">
          Deep dive into professional features like HDR, color accuracy, sync technologies, and ergonomics.
          Perfect for enthusiasts and professionals.
        </Translate>
        <div style={{marginTop: '1rem'}}>
          <Link
            className="button button--outline button--primary"
            to="/docs/advanced/sync-technologies">
            Explore Advanced →
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
