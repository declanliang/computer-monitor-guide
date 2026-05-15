const site = 'https://www.computer-monitor-guide.com';

export const schemaByPath: Record<string, unknown> = {
  '/docs/quick-guide/by-use-case': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What monitor specs do I need for office and study use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For office and study use, a 24-27 inch IPS monitor with 1080P on 24 inches or 2K on 27 inches, plus a 60-75Hz refresh rate, is the best value. Prioritize a blue light filter and height-adjustable stand for long sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What monitor specs do I need for competitive gaming?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For competitive gaming, prioritize 144Hz or higher refresh rate, under 1ms response time, and G-Sync or FreeSync support. A 24-27 inch monitor at 1080P to 2K resolution is sufficient.',
        },
      },
      {
        '@type': 'Question',
        name: 'What monitor do I need for graphic design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Graphic designers need a 27-32 inch professional IPS panel with 99% sRGB or Adobe RGB coverage, Delta-E under 2, and 2K to 4K resolution for fine detail work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a 4K monitor for watching videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For video entertainment, a 32-inch or larger 4K monitor with a VA panel and HDR support provides the best experience. 60Hz is sufficient because video content does not require high refresh rates.',
        },
      },
    ],
  },
  '/docs/fundamentals/size-and-resolution': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Monitor Size vs Resolution Guide: How to Match Screen Size with the Right Resolution',
        datePublished: '2026-03-24',
        dateModified: '2026-05-15',
        author: {
          '@type': 'Organization',
          name: 'Computer Monitor Guide',
          url: site,
        },
        about: [
          {'@type': 'Thing', name: 'Monitor Resolution'},
          {'@type': 'Thing', name: 'Pixel Density'},
          {'@type': 'Thing', name: 'Viewing Distance'},
          {'@type': 'Thing', name: '4K Monitor'},
          {'@type': 'Thing', name: '1440p Monitor'},
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${site}/docs/fundamentals/size-and-resolution`,
        },
      },
      {
        '@type': 'HowTo',
        name: 'How to match monitor size with resolution',
        step: [
          {'@type': 'HowToStep', name: 'Measure viewing distance and desk depth'},
          {'@type': 'HowToStep', name: 'Choose 24, 27, or 32 inches based on distance'},
          {'@type': 'HowToStep', name: 'Match 1080P, 2K, or 4K to reach 90-120 PPI'},
          {'@type': 'HowToStep', name: 'Confirm GPU performance and budget'},
        ],
      },
    ],
  },
  '/docs/fundamentals/interfaces': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do more expensive HDMI cables actually make a difference?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For standard desk setups, expensive HDMI cables do not improve image quality if the cheap cable is certified for the required bandwidth. Cable quality mainly matters for very long runs or uncertified cables.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is DisplayPort better than HDMI for PC gaming?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DisplayPort is usually better for PC gaming because it more commonly supports high refresh rates such as 2K at 144Hz and 4K at 120Hz. HDMI is still the standard choice for consoles and TVs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does every USB-C port support monitor output?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. USB-C is only the connector shape. The laptop or device must support DisplayPort Alt Mode or Thunderbolt for video output.',
        },
      },
    ],
  },
  '/docs/fundamentals/panel-types': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is IPS better than VA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPS is usually better for office work, design, and general use because it has better viewing angles and color consistency. VA is better for movies and dark rooms because it has much higher contrast.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are TN panels still worth it in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TN panels are still worth considering for competitive gaming and extreme budgets. They have weak colors and viewing angles, but their response time and high refresh rate options remain useful.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does panel type determine everything about monitor quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Panel type sets the baseline behavior, but product tuning, backlight quality, overdrive implementation, and factory calibration can matter more between specific monitors.',
        },
      },
    ],
  },
  '/docs/advanced/sync-technologies': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is screen tearing and why does it happen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Screen tearing happens when the monitor refreshes while the GPU is partway through sending a new frame. The display shows parts of two frames at once, creating a visible horizontal tear line.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is G-Sync Compatible worth it compared with hardware G-Sync?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most gamers, G-Sync Compatible is the better value because it uses FreeSync hardware with NVIDIA certification and performs close to hardware G-Sync without the $40-70 hardware module premium.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between FreeSync, FreeSync Premium, and FreeSync Premium Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FreeSync provides basic variable refresh rate. FreeSync Premium adds at least 120Hz and low framerate compensation. FreeSync Premium Pro adds stricter HDR, color, and latency requirements.',
        },
      },
    ],
  },
};
