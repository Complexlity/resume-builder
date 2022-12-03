const Header = () => {
  return (
    <div className="main-header flex h-16 items-center justify-center bg-blue-700 px-6 text-center text-3xl font-bold text-gray-200">
    <style>
    {`@media print {.main-header{display: none;}}`}
  </style>
      <h1 className="header-text flex-1">Build Your Resume</h1>
      <a
        href="https://github.com/Complexlity"
        target="_blank"
        className="pointer ml-auto"
      >
        <img className="w-8" src="../src/assets/github.png" alt="" />
      </a>{" "}
    </div>
  );
};

export default Header;
