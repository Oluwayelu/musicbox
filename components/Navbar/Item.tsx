import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";

function NavItem({
  active,
  setActive,
  name,
  route,
}: InferProps<typeof NavItem.propTypes>) {
  return active !== name ? (
    <Link href={route}>
      <a
        onClick={() => setActive(name)}
        className="text-white mx-3 hidden md:inline-block"
      >
        {name}
      </a>
    </Link>
  ) : null;
}

NavItem.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavItem;
