import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-black p-4 flex lg:flex-row-reverse justify-between items-center gap-4 sm:gap-8">
      <NavLinks />

      <SearchBar />

      <Logo />
    </header>
  );
};
export default Header;
