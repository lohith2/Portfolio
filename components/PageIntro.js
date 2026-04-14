import Reveal from "@/components/Reveal";

export default function PageIntro({ label, title, copy }) {
  return (
    <Reveal className="page-intro" y={22}>
      <p className="mini-label">{label}</p>
      <h1>{title}</h1>
      {copy ? <p className="page-intro-copy">{copy}</p> : null}
    </Reveal>
  );
}
