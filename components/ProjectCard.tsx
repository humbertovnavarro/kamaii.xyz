type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <a className="project-card">
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );
}
export default ProjectCard;
