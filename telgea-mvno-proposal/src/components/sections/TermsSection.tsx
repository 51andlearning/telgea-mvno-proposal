import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const terms = [
  {
    id: "validity",
    title: "1. Validity",
    content: "All proposals from DSG are valid for thirty (30) days unless otherwise stated.",
  },
  {
    id: "agreements",
    title: "2. Additional Agreements",
    content: "The agreement is subject to the signature of a comprehensive contract.",
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    content:
      "All services are payable within thirty (30) days of the invoice date. Late payments are subject to a 2% penalty per month.",
  },
  {
    id: "pricing",
    title: "4. Pricing Adjustments",
    content:
      "Pricing is indicative and subject to foreign currency exchange rate fluctuations. Should any significant changes occur in the USD rate, DSG reserves the right to recalibrate the pricing.",
  },
  {
    id: "invoicing",
    title: "5. Invoicing Schedule",
    content:
      "Upfront fees will be invoiced upon signing, with payment due before project commencement. Ongoing fees are payable monthly in arrears upon presentation of the invoice.",
  },
  {
    id: "timeline",
    title: "6. Service Timeline",
    content:
      "It is estimated that the full integration of services will take approximately two months to complete.",
  },
];

export default function TermsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-2">Terms &amp; Conditions</h2>
      <p className="text-muted-foreground mb-8">
        Upon acceptance, both parties agree to the terms set out in this proposal and the detailed SOW.
      </p>
      <Accordion type="multiple" className="w-full">
        {terms.map((term) => (
          <AccordionItem key={term.id} value={term.id}>
            <AccordionTrigger>{term.title}</AccordionTrigger>
            <AccordionContent>{term.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
