'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { certifications } from '../../data/certifications';
import { isoIntroSupport } from '../../data/isoIntroSupport';

export function useCertificationContent() {
  const pathname = usePathname();
  const certification = certifications.find(
    ({ href }) => href.split('?')[0] === pathname
  );
  const code = certification?.code;
  const [result, setResult] = useState({ code: null, content: null });

  useEffect(() => {
    if (!code) return undefined;

    const controller = new AbortController();
    let active = true;

    fetch(`/api/certifications?code=${encodeURIComponent(code)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Certification content request failed (${response.status}).`);
        }
        return response.json();
      })
      .then(({ certification: content }) => {
        if (active) setResult({ code, content });
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error(`Unable to load certification "${code}" content:`, error);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [code]);

  const content = result.code === code ? result.content : null;
  const introSupport = isoIntroSupport[code];

  return introSupport ? { ...content, introSupport } : content;
}

export function mergeCertificationPillars(pillars, fallbackPillars) {
  if (!Array.isArray(pillars) || pillars.length === 0) return fallbackPillars;
  if (fallbackPillars.length === 0) return [];

  return pillars.map((pillar, index) => {
    const fallback = fallbackPillars[index % fallbackPillars.length];
    return {
      ...fallback,
      id: String(index + 1).padStart(2, '0'),
      title: pillar.title || fallback.title,
      desc: pillar.description || fallback.desc,
    };
  });
}
