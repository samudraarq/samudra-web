import { Mail, Github, Youtube, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="custom-container pt-24 pb-24">
      <h2>Contact Me</h2>
      <p className="mt-4 mb-8">
        Have an idea or need help building your next product? I'd love to
        collaborate—whether it's launching something new or improving what you
        already have.
      </p>

      <div className="flex gap-4">
        <a
          href="mailto:samudrafaris@gmail.com"
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          title="Email"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://github.com/samudrafaris"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          title="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://youtube.com/@samudrafaris?si=_zRCjjBaiv9nHU2k"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          title="YouTube"
        >
          <Youtube size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/samudra-faris-arqam/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
