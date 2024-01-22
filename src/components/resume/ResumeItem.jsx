import parse from "html-react-parser";
const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <div className="resume__date">{year}</div>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <div className="resume__description">{parse(desc)}</div>
    </div>
  );
};

export default ResumeItem;
