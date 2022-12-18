export interface BarcodeOptions {
  label: string;
}

export const allOptions = [
  { label: "Details" },
  { label: "Customize" },
  { label: "Advanced" },
  { label: "Carrot" },
  { label: "Banana" },
  { label: "Blueberries" },
  { label: "Champers?" },
];

const [details, customize, advanced] = allOptions;
export const initialTabs = [details, customize, advanced];

export function getNextOption(
  options: BarcodeOptions[]
): BarcodeOptions | undefined {
  const existing = new Set(options);
  return allOptions.find((option) => !existing.has(option));
}
