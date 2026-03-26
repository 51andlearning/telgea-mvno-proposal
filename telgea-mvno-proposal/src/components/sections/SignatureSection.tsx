import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignatureSection() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2">Proposal Acceptance</h2>
        <p className="text-muted-foreground mb-8">
          This document, along with the SOW, represents the full understanding between Digital Mobile and Telgea.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="font-semibold">For Digital Mobile (Pty) Ltd</p>
              <Separator />
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium">Yaron Assabi</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Position</p>
                  <p className="font-medium">CEO</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Signature</p>
                  <div className="h-12 border-b border-dashed mt-2" />
                </div>
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <div className="h-6 border-b border-dashed mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="font-semibold">For Telgea</p>
              <Separator />
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <div className="h-6 border-b border-dashed mt-2" />
                </div>
                <div>
                  <p className="text-muted-foreground">Position</p>
                  <div className="h-6 border-b border-dashed mt-2" />
                </div>
                <div>
                  <p className="text-muted-foreground">Signature</p>
                  <div className="h-12 border-b border-dashed mt-2" />
                </div>
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <div className="h-6 border-b border-dashed mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12">
          © 2026 Digital Solutions Group (Pty) Ltd · Confidential · All rights reserved
        </p>
      </div>
    </section>
  );
}
