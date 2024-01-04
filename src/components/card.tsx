import Image from "next/image";

export function Feature() {
  return (
    <div className="flex max-w-md flex-col items-center space-y-3 rounded-md bg-deep-sapphire-950/10 p-3">
      <div className="flex items-start gap-3">
        <Image src={""} alt="feature 1" width={50} height={60} />
        <h3 className="text-lg font-semibold">Effortless QR Code Generation</h3>
      </div>
      <p className="leading-tight">
        Barlink simplifies the process of creating QR codes for any URL. Just
        input your link, and with a click, you&apos;ll have a visually appealing
        and functional QR code ready to use. id?
      </p>
    </div>
  );
}
