import type {ReactNode} from 'react';
import clsx from 'clsx';
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
    title: 'Systematic Learning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.features.systematic.description">
          From basic concepts to advanced technology, a progressive knowledge system.
          Understand technical principles, not just simple parameter comparisons.
          Develop independent thinking and judgment skills.
        </Translate>
      </>
    ),
  },
  {
    title: 'Technologically Neutral',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.features.neutral.description">
          Not biased toward any brand, only focus on technology itself.
          Objectively analyze the advantages, disadvantages, and applicable scenarios of each technology.
          Avoid marketing-oriented misleading information.
        </Translate>
      </>
    ),
  },
  {
    title: 'Practical Orientation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.features.practical.description">
          Theory combined with actual use cases, providing specific purchasing advice.
          For different needs and budgets, provide the most suitable solutions.
          Long-term effective knowledge that won't become outdated due to product updates.
        </Translate>
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
