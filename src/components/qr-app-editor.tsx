"use client";
import * as React from "react";
// import QRCodeStyling from "qr-code-styling";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Icons } from "./icons";

// const qrCode = new QRCodeStyling({
//   width: 300,
//   height: 300,
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
//   dotsOptions: {
//     color: "#4267b2",
//     type: "rounded",
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     margin: 20,
//   },
// });

export function QrAppEditor() {
  return (
    <section className="max-w-screen-lg min-h-[14em] mx-auto grid grid-cols-[0.4fr_1fr_0.5fr] gap-3 mb-4">
      <aside className="min-h-full relative rounded-md border border-secondary/20 backdrop-blur-lg">
        <header className="py-2 border-b border-main/30 sticky top-0 left-0 right-0 flex flex-col items-center justify-start">
          <h3>QR Code Type</h3>
        </header>
        <div className="min-h-[20em] flex flex-col gap-2 space-y-4">
          <button className="flex items-center">
            <Icons.link className="w-6 h-6 rounded-md bg-tertiary fill-main" />
            <p className="font-medium">URL address</p>
          </button>
          <button>Type 2</button>
          <button>Type 3</button>
          <button>Type 4</button>
        </div>
      </aside>
      <main className="min-h-full relative rounded-md border border-secondary/20 backdrop-blur-lg">
        <header className="py-2 border-b border-main/30 sticky top-0 left-0 right-0 flex flex-col items-center justify-start">
          <h3>QR Code Type</h3>
        </header>
      </main>
      <aside className="min-h-full relative rounded-md border border-secondary/20 backdrop-blur-lg space-y-4">
        <div className="w-full aspect-square rounded-md overflow-hidden bg-white">
          Qr code preview
        </div>
        <section>
          <h3>Select Framne</h3>
        </section>
        <section>Image drag zone</section>
        <Button>Download Code</Button>
      </aside>
    </section>
  );
}
