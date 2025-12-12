import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className='cta w-full flex !flex-col items-center gap-7'>
      
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-5'>
        <p className='cta-text text-center md:text-left'>
          Got a project in mind? <br className='sm:block hidden' />
          I’d love to collaborate and help build it.
        </p>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-4 mt-2">
        {socialLinks
          .filter(link => ["GitHub", "LinkedIn", "Instagram"].includes(link.name))
          .map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className="w-10 h-14 flex justify-center items-center"
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className="w-full h-full object-contain hover:opacity-75 transition"
              />
            </a>
          ))}
      </div>
    </section>
  );
};

export default CTA;