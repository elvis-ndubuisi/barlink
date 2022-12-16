export interface BarcodeOptions {
  label: string;
}

export const allOptions = [
  { label: "Details" },
  { label: "Customize" },
  { label: "Download" },
  { label: "Carrot" },
  { label: "Banana" },
  { label: "Blueberries" },
  { label: "Champers?" },
];

const [details, customize, download] = allOptions;
export const initialTabs = [details, customize, download];

export function getNextOption(
  options: BarcodeOptions[]
): BarcodeOptions | undefined {
  const existing = new Set(options);
  return allOptions.find((option) => !existing.has(option));
}
