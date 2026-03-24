import type {ReactNode} from 'react';
import styles from './styles.module.css';

type RecommendationCardProps = {
  title: string;
  subtitle: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  cta?: ReactNode;
};

export default function RecommendationCard({
  title,
  subtitle,
  specs,
  pros,
  cons,
  bestFor,
  cta,
}: RecommendationCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className={styles.section}>
        <strong>Core Specs</strong>
        <ul>
          {specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>
      <div className={styles.grid}>
        <div className={styles.section}>
          <strong>Pros</strong>
          <ul>
            {pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <strong>Cons</strong>
          <ul>
            {cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.bestFor}>
        <strong>Best for:</strong> {bestFor}
      </p>
      {cta ? <div className={styles.cta}>{cta}</div> : null}
    </article>
  );
}
