const ProjectsIcon = ({ stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    alt="projects"
    title="projects"
    className="other-menu__icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
    <line x1="6" y1="9" x2="6" y2="21"></line>
  </svg>
);

export default ProjectsIcon;
