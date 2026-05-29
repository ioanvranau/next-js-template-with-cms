import { cn } from "@/lib/cn";

/** Labeled input/textarea wrapper with inline error display. */
export function FormField({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>) {
  const fieldClass = cn(
    "w-full rounded-lg border bg-bg-elevated px-4 py-3 text-text placeholder:text-text-dim",
    "transition-colors focus:border-accent",
    error ? "border-error" : "border-line",
  );
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-text-muted">
        {label}
        {required && <span className="text-error"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} className={fieldClass} {...rest} />
      ) : (
        <input name={name} type={type} className={fieldClass} {...rest} />
      )}
      {error && <span className="text-error">{error}</span>}
    </label>
  );
}
