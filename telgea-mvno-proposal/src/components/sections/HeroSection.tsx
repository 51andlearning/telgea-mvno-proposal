import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HeroSection() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-start justify-between mb-8">
          {/* Logo placeholder */}
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Digital Solutions Group (Pty) Ltd</p>
            <p>158 Jan Smuts Avenue</p>
            <p>Rosebank, 2196</p>
          </div>
          <Badge variant="outline">Confidential</Badge>
        </div>

        <Separator className="mb-10" />

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Proposal for the Licensing of the<br />
          DSG Digital Mobile Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          A profit-share MVNO arrangement for Telgea
        </p>
        <p className="text-sm text-muted-foreground">Dated: 25 March 2026</p>
      </div>
    </section>
  );
}
