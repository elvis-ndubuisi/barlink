export default function clipboard(str: string): boolean {
  if (str) {
    navigator.clipboard.writeText(str);
    return true;
  }
  return false;
}

//   const copyToClipboard = () => {
//     if (shortenedLink) {
//       navigator.clipboard.writeText(shortenedLink);
//       setCopied(true);
//     }
//     setTimeout(() => {
//       setCopied(false);
//     }, 2000);
//   };
