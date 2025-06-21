import Logo from "/images/logo.png";
export const Header = () => {
  return (
    <nav className="pt-10 px-4 border-b border-dark/20">
      <img src={Logo} alt="logo" />
    </nav>
  );
};
