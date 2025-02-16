import { AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router";

function MapAcordeon({ items }) {
  return (
    <>
      {items.map((item) => (
        <Link to={item.href}>
          <AccordionContent key={item.id} className="text-secondary">
            {item.name}
          </AccordionContent>
        </Link>
      ))}
    </>
  );
}

export default MapAcordeon;
