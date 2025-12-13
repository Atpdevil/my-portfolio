import { socialLinks } from "../constants";

const SocialIcons = () => {
  return (
    <div className="w-full flex justify-center items-center gap-5 mt-16">
      {socialLinks
        .filter(link =>
          ["GitHub", "LinkedIn", "Instagram"].includes(link.name)
        )
        .map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-14 flex items-center justify-center"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="w-full h-full object-contain hover:opacity-75 transition"
            />
          </a>
        ))}
    </div>
  );
};

export default SocialIcons;
