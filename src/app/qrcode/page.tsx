import { DesktopGenerator } from "@/components/generators";

export default async function QRCode() {
  // await generateQR("someting");
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10 opacity-40 bg-lavender-blue/30" />

      <section className="max-w-screen-xl flex flex-col items-center text-center justify-center gap-3 mx-auto px-4 md:px-0 min-h-[20em]">
        <h1 className="font-bold text-4xl max-w-xl">
        Create QR Codes That Connect
        </h1>
        <p className="text-lg max-w-xl">
        Generate custom QR codes for any purpose, effortlessly.
        </p>
      </section>

      <DesktopGenerator/>
    </main>
  );
}
