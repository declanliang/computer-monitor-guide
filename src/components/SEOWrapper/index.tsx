import React from 'react';
import Head from '@docusaurus/Head';

interface SEOWrapperProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'article' | 'website';
  publishedTime?: string;
  modifiedTime?: string;
  children: React.ReactNode;
}

export default function SEOWrapper({
  title,
  description,
  keywords,
  image = '/img/computer-monitor-guide-social-card.jpg',
  url,
  type = 'article',
  publishedTime,
  modifiedTime,
  children
}: SEOWrapperProps) {
  const siteUrl = 'https://www.computer-monitor-guide.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "Article" : "WebPage",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "url": fullUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Computer Monitor Guide",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/img/logo.svg`
      }
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime })
  };

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}

        {/* Open Graph */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:site_name" content="Computer Monitor Guide" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={fullImageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      {children}
    </>
  );
}