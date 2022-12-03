const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-gray-800 p-3 text-xl text-white ">
      <p>Copyright &#169; Complexlity</p>
      <a
        href="https://github.com/Complexlity"
        target="_blank"
        className="pointer"
      >
        <img className="w-6" src="../src/assets/github.png" alt="" />
      </a>
    </div>
  );
};

export default Footer;
