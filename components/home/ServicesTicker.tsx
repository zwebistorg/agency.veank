const services = ["GOOGLE ADS", "META ADS", "TIKTOK ADS", "SEO", "SOCIAL MEDIA"];
const doubled = [...services, ...services];

export default function ServicesTicker() {
  return (
    <div className="overflow-hidden border-y-2 border-ag-yellow py-4">
      <div className="ticker-track flex w-max items-center gap-12">
        {doubled.map((service, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-syne font-semibold uppercase tracking-widest text-ag-yellow">
              {service}
            </span>
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-ag-yellow"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}
