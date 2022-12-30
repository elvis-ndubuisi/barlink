import * as toImage from "html-to-image";
import { toast } from "react-toastify";

function link(dataurl: any, name: string, type: string): void {
  const link = document.createElement("a");
  link.download = `${name}.${type}`;
  link.href = dataurl;
  link.click();
}

// function checkDom(elem: string): HTMLElement | null {
//   let domElem = document.querySelector(`#${elem}`) as HTMLElement;
//   if (domElem) {
//     return domElem;
//   } else {
//     toast.error("download DOM");
//     return null;
//   }
// }

function download(format: "png" | "jpeg" | "svg", name: string): void {
  switch (format) {
    case "jpeg":
      toImage
        .toJpeg(document.querySelector("#qrcode") as HTMLElement)
        .then((dataurl) => {
          const link = document.createElement("a");
          link.download = `${name}.jpeg`;
          link.href = dataurl;
          link.click();
        });
      break;

    case "png":
      toImage
        .toPng(document.querySelector("#qrcode") as HTMLElement)
        .then((dataurl) => link(dataurl, name, "png"));
      break;

    case "svg":
      toImage
        .toSvg(document.querySelector("#qrcode") as HTMLElement)
        .then((dataurl) => link(dataurl, name, "svg"));
      break;

    default:
      toast.error("Format not supported yet!");
      break;
  }
}

export default download;
