import socialLinks from '../json/social-links.json'

function SocialLinks() {
  return (
    <ul className="py-6">
      {socialLinks.map(link => (
        <li className="mr-3 inline" key={link.icon}>
          <a
            className="text-blue-600  hover:text-blue-600"
            href={link.url}
            target="_blank"
            rel="noopener"
            alt={link.icon}
          >
            <i className={`fa fa-2x fa-${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
