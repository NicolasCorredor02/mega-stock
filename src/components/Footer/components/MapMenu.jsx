import { Link } from "react-router";

function MapMenu({ items }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={item.href}>
            <a className="font-extralight text-secondary duration-150">
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default MapMenu;
