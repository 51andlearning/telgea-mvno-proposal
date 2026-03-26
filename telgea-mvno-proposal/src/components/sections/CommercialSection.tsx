import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function CommercialSection() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2">Commercial Terms</h2>
        <p className="text-muted-foreground mb-8">
          Once-off setup fee plus monthly subscriber-based fees from Go Live.
        </p>

        {/* Setup fee highlight */}
        <Card className="mb-8 border-2 border-primary">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Once-off Setup Fee</p>
              <p className="text-4xl font-bold mt-1">R250,000</p>
              <p className="text-sm text-muted-foreground mt-1">Payable upon signing, before project commencement</p>
            </div>
            <Badge className="text-base px-4 py-2">Ex VAT</Badge>
          </CardContent>
        </Card>

        <Tabs defaultValue="monthly">
          <TabsList className="mb-6">
            <TabsTrigger value="monthly">Monthly Costs</TabsTrigger>
            <TabsTrigger value="example">Profit Model Example</TabsTrigger>
            <TabsTrigger value="oncost">Once-off Per Sale</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <Card>
              <CardHeader><CardTitle className="text-base">Monthly Cost Responsibility</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-medium">Item</th>
                        <th className="text-center py-2 px-3 font-medium">Telgea</th>
                        <th className="text-center py-2 px-3 font-medium">DM</th>
                        <th className="text-left py-2 pl-4 font-medium">Detail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { item: "Call Centre", dm: true, detail: "Run by CXG, managed by DM" },
                        { item: "Logistics", dm: true, detail: "R40 per SIM delivery" },
                        { item: "Airtime Recharges", dm: true, detail: "Via DM distribution channels" },
                        { item: "Management & Platform Fee", dm: true, detail: "R75k/month or R15/active subscriber (higher applies)" },
                        { item: "SIM Card Costs", dm: true, detail: "R12 per SIM card" },
                        { item: "Paperless RICA", dm: true, detail: "R21 per SIM card" },
                        { item: "Web Development", telgea: true, detail: "Covered by Telgea or DM white-label option" },
                      ].map((row) => (
                        <tr key={row.item}>
                          <td className="py-3 pr-4">{row.item}</td>
                          <td className="text-center py-3 px-3">{row.telgea ? "✓" : ""}</td>
                          <td className="text-center py-3 px-3">{row.dm ? "✓" : ""}</td>
                          <td className="py-3 pl-4 text-muted-foreground">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example">
            <Card>
              <CardHeader><CardTitle className="text-base">Net Profit Framework (per subscriber at R100 ARPU)</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-2 max-w-sm">
                  {[
                    { label: "ARPU", value: "R100.00", highlight: false },
                    { label: "Wholesale Costs", value: "– R50.00", highlight: false },
                    { label: "DM Cost", value: "– R15.00", highlight: false },
                    { label: "Call Centre Cost", value: "– R3.00", highlight: false },
                    { label: "Airtime Distribution", value: "– R7.00", highlight: false },
                    { label: "Net Profit", value: "R32.50", highlight: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between py-2 px-3 rounded ${row.highlight ? "bg-primary text-primary-foreground font-bold" : "border-b"}`}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="oncost">
            <Card>
              <CardHeader><CardTitle className="text-base">Once-off Costs Per New Sale</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-2 max-w-sm">
                  {[
                    { label: "Logistics (if applicable)", value: "R40.00" },
                    { label: "SIM Card", value: "R12.00" },
                    { label: "Paperless RICA", value: "R21.00" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between py-2 border-b">
                      <span>{row.label}</span>
                      <span className="font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
