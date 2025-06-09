import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '系统性学习',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        从基础概念到进阶技术，循序渐进的知识体系。
        理解技术原理，而不是简单的参数对比。
        培养独立思考和判断能力。
      </>
    ),
  },
  {
    title: '技术中立',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        不偏向任何品牌，只专注技术本身。
        客观分析每种技术的优劣势和适用场景。
        避免营销导向的误导信息。
      </>
    ),
  },
  {
    title: '实用导向',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        理论结合实际使用场景，提供具体的选购建议。
        针对不同需求和预算，给出最适合的方案。
        长期有效的知识，不会因产品更新而过时。
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
