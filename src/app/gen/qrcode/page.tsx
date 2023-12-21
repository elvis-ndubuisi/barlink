import { QrAppEditor } from "@/components/qr-app-editor";
import qrcode from "qrcode";

const generateQR = async (text: string) => {
  try {
    console.log(qrcode.toDataURL(text));
  } catch (err: any) {
    console.log(err);
  }
};

export default async function QRCode() {
  // await generateQR("someting");
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10" />

      <section className="max-w-screen-xl flex flex-col items-center text-center justify-center gap-3 mx-auto px-4 md:px-0 min-h-[20em]">
        <h1 className="font-bold text-4xl max-w-xl">
          Generate <span className="text-tertiary">dynamic</span> QRcode and
          custom images for free
        </h1>
        <p className="text-lg max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          exercitationem odio porro quisquam facere dolorum praesentium
          explicabo repellendus! Nisi, aliquid.
        </p>
      </section>

      <QrAppEditor />
    </main>
  );
}
