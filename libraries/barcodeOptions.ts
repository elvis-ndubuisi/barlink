export interface BarcodeOptions {
  label: string;
}

export const allOptions = [
  { label: "Details" },
  { label: "Customize" },
  { label: "Advanced" },
  { label: "Preview" },
  { label: "Banana" },
  { label: "Blueberries" },
  { label: "Champers?" },
];

const [details, customize, advanced, preview] = allOptions;
export const initialTabs = [details, customize, advanced, preview];

export function getNextOption(
  options: BarcodeOptions[]
): BarcodeOptions | undefined {
  const existing = new Set(options);
  return allOptions.find((option) => !existing.has(option));
}
