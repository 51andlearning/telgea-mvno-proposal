import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ScopeSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-2">Scope of Work</h2>
      <p className="text-muted-foreground mb-8">
        Two phases, approximately one month each, from signature date.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Phase 1 — Implementation Scoping</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="brs">
                <AccordionTrigger>Business Requirements Specification</AccordionTrigger>
                <AccordionContent>Both parties to sign off on the BRS document.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech">
                <AccordionTrigger>Technical Specifications</AccordionTrigger>
                <AccordionContent>DM to develop; both parties to sign off.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="journey">
                <AccordionTrigger>Customer Journey Mapping</AccordionTrigger>
                <AccordionContent>Telgea and DM to sign off.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="dare">
                <AccordionTrigger>DARE Model Development</AccordionTrigger>
                <AccordionContent>Telgea and DM to sign off.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Phase 2 — Implementation & Business Simulation</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="build">
                <AccordionTrigger>DM Builds MVNO Services</AccordionTrigger>
                <AccordionContent>DM builds the MVNO services on its platforms.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="mno">
                <AccordionTrigger>MNO Configuration</AccordionTrigger>
                <AccordionContent>Mobile Network Operator/s configures the MVNO services.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="sims">
                <AccordionTrigger>First SIM Batch Order</AccordionTrigger>
                <AccordionContent>SIMs are ready for the MVNO services.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="golive">
                <AccordionTrigger>Go Live</AccordionTrigger>
                <AccordionContent>Launch to the market.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
