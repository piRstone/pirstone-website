const Footer = () => {
  return (
    <footer className="w-full flex flex-row items-center gap-4 text-gray-400 mt-auto">
      <p>© {new Date().getFullYear()} piRstone</p>
      <a
        className="underline"
        href="https://github.com/pirstone"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>
      <a className="underline" href="mailto:contact@pirstone.com">
        Contact
      </a>
    </footer>
  );
};

export default Footer;
