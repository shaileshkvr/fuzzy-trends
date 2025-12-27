import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground space-y-4">
      <h1 className="text-6xl font-bold tracking-tighter">fuzzy trends</h1>
      <p className="text-muted-foreground">Under Development</p>
      <Button variant="default">Get Started</Button>
    </div>
  );
}
