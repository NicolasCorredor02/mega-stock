import { AccordionContent } from "@/components/ui/accordion";

function MapAcordeon({ items }) {
  return (
    <>
      {items.map((item) => (
        <AccordionContent key={item.id} className="text-secondary">
          {item.name}
        </AccordionContent>
      ))}
    </>
  );
}

export default MapAcordeon;
