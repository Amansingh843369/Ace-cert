export default function CertificationHeroTitle({ title, highlightClass }) {
  const parts = title.trim().match(/^(.*?)\s+(Certification)$/i);

  if (!parts) return title;

  return (
    <>
      {parts[1]} <span className={highlightClass}>{parts[2]}</span>
    </>
  );
}
