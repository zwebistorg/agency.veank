import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start px-6 py-24 lg:px-8">
      <p className="font-mono text-[clamp(4rem,12vw,8rem)] font-medium leading-none text-ag-yellow">
        404
      </p>
      <h1 className="mt-6 font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
        This page does not convert.
      </h1>
      <p className="mt-4 text-lg text-ag-muted">
        It does not exist either. Head back to something that makes money.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="secondary">
          Get a Free Audit
        </Button>
      </div>
    </div>
  );
}
