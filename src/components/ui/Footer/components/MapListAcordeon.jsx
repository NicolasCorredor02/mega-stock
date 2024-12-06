import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import MapAcordeon from "./MapAcordeon"

function MapListAcordeon({footerNavs}) {
    return(
        <Accordion type="single" collapsible className="w-full">
            {footerNavs.map(footerNavs => (
                <AccordionItem key={footerNavs.id} value={footerNavs.id}>
                    <AccordionTrigger className="text-secondary">{footerNavs.label}</AccordionTrigger>
                    <MapAcordeon items={footerNavs.items}></MapAcordeon>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default MapListAcordeon