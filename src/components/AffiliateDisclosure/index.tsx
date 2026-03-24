import type {ReactNode} from 'react';

type AffiliateDisclosureProps = {
  children?: ReactNode;
};

export default function AffiliateDisclosure({
  children,
}: AffiliateDisclosureProps) {
  return (
    <div className="affiliateDisclosure">
      <p>
        <strong>Disclosure:</strong>{' '}
        {children ??
          'This page may contain affiliate links. If you buy through our links, we may earn a commission at no extra cost to you.'}
      </p>
    </div>
  );
}
