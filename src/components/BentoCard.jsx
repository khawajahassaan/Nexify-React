import BorderGlow from './BorderGlow';

export default function BentoCard({ icon, colorClass, title, description }) {
  return (
    <BorderGlow className="bento-card" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={16}>
      <i className={`fa-solid ${icon} ${colorClass}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </BorderGlow>
  );
}