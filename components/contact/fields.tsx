export const inputClass =
  "w-full border-2 border-ag-border bg-ag-surface px-4 py-3 text-ag-white placeholder:text-ag-muted/60 focus:border-ag-yellow focus:outline-none";

export const budgets = [
  "Under $500",
  "$500-$2,000",
  "$2,000-$10,000",
  "$10,000+",
];

export const platforms = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "None yet",
  "Other",
];

export const goals = [
  "More leads",
  "More ecommerce sales",
  "Brand awareness",
  "Not sure yet",
];

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-ag-muted"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
