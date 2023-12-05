import Image from "next/image";

export function Feature() {
  return (
    <div className="rounded-md max-w-md p-3 bg-card-bg flex items-center flex-col space-y-3">
      <div className="flex items-start gap-3">
        <Image src={""} alt="feature 1" width={50} height={60} />
        <h3 className="font-semibold text-lg">Effortless QR Code Generation</h3>
      </div>
      <p className="leading-tight">
        Barlink simplifies the process of creating QR codes for any URL. Just
        input your link, and with a click, you&apos;ll have a visually appealing
        and functional QR code ready to use. id?
      </p>
    </div>
  );
}
