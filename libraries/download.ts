// import { toJpeg, toPng, toSvg } from "html-to-image";

// export const downloadJpeg = (name: string, quality: number = 0.95) => {
//   toJpeg(document.querySelector("#qr-code") as any, { quality: quality }).then(
//     (dataUri) => {
//       const link = document.createElement("a");
//       link.download = `${name}.jpg` || "qr-gen.jpg";
//       link.href = dataUri;
//       link.click();
//     }
//   );
// };

// export const downloadPng = (name: string) => {
//   toPng(document.querySelector("#qr-code") as any).then((dataUri) => {
//     const link = document.createElement("a");
//     link.download = `${name}.png` || "qr-gen.png";
//     link.href = dataUri;
//     link.click();
//   });
// };

// export const downloadSvg = (name: string) => {
//   toPng(document.querySelector("#qr-code") as any).then((dataUri) => {
//     const link = document.createElement("a");
//     link.download = `${name}.svg` || "qr-gen.svg";
//     link.href = dataUri;
//     link.click();
//   });
// };
export {};
