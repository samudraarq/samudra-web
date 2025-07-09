const ContactSection = () => {
  return (
    <div className="custom-container pt-24 pb-24">
      <h2>Contact Me</h2>
      <p className="mt-4 mb-8">
        Have an idea or need help building your next product? I'd love to
        collaborate—whether it's launching something new or improving what you
        already have.
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span>📧</span>
          <a href="mailto:samudrafaris@gmail.com" className="hover:underline">
            samudrafaris@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span>💼</span>
          <a href="https://github.com/samudrafaris" className="hover:underline">
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span>💼</span>
          <a
            href="https://youtube.com/@samudrafaris?si=_zRCjjBaiv9nHU2k"
            className="hover:underline"
          >
            YouTube
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span>💼</span>
          <a
            href="https://www.linkedin.com/in/samudra-faris-arqam/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
