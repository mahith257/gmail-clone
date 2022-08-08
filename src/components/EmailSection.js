import './EmailSection.css'

export default function EmailSection({ Icon,title, color, selected }) {
  return (
    <div className={`email-section ${selected && "selected-section"}`} style={{borderBottom:`3px solid ${color}`, color:`${selected && color}`}}>
        <Icon />
        <h4>{title}</h4>
    </div>
  );
}
