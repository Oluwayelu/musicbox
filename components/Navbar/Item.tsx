import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";

function NavItem({
  primary,
  active,
  setActive,
  name,
  route,
}: InferProps<typeof NavItem.propTypes>) {
  return primary ? (
    active.primary !== name ? (
      <Link href={route}>
        <a
          onClick={() => setActive({ ...active, primary: name })}
          className="text-white hover:text-primary-400 transform hover:scale-110 hidden md:inline-block"
        >
          {name}
        </a>
      </Link>
    ) : null
  ) : active.secondary !== name ? (
    <Link href={route} passHref>
      <div className="hidden md:flex flex-col items-center space-y-1 cursor-pointer">
        <a
          onClick={() => setActive({ ...active, secondary: name })}
          className="peer text-gray-100 hover:text-white focus:text-white transform transition-all duration-500 ease-in-out  hover:scale-110 focus:scale-110"
        >
          {name}
        </a>
        <div className="w-3/4 h-1 peer-hover:bg-gradient-to-r peer-hover:from-primary-400 peer-hover:to-secondary transform transition-all duration-500 ease-in-out  peer-hover:scale-110 peer-focus:scale-110 rounded-full" />
      </div>
    </Link>
  ) : (
    <Link href={route} passHref>
      <div className="hidden md:flex flex-col items-center space-y-1 cursor-pointer">
        <a
          onClick={() => setActive({ ...active, secondary: name })}
          className="text-white scale-110"
        >
          {name}
        </a>
        <div className="w-3/4 h-1 bg-gradient-to-r from-primary-400 to-secondary rounded-full" />
      </div>
    </Link>
  );
}

NavItem.propTypes = {
  primary: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  active: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};

export default NavItem;
