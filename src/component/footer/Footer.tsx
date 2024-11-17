const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-16 text-gray-200 bg-gray-900 font-maven">
      <span className="text-sm ">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <a
          href="https://github.com/ManSOorcode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          ManSOorcode
        </a>
      </span>
    </footer>
  );
};

export default Footer;
