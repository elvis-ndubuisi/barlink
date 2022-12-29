export default function clipboard(str: string): boolean {
  if (str) {
    navigator.clipboard.writeText(str);
    return true;
  }
  return false;
}
