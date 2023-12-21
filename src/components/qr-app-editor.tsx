"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Icons } from "./icons";

const qrType = [{ name: "URL" }, { name: "vCard" }, { name: "Text" }];

export function QrAppEditor() {
  return (
    <section className="max-w-screen-lg min-h-[14em] mx-auto grid grid-cols-[0.4fr_1fr_0.5fr] gap-3 mb-4">
      <aside className="min-h-full relative rounded-md bg-qrbg">
        <header className="border-b border-main py-3 sticky top-0 left-0 right-0 flex flex-col items-center justify-start">
          <h3>QR Code Type</h3>
        </header>
        <div className="min-h-[20em] flex flex-col space-y-1 px-1 py-2">
          {qrType.map((qt, idx) => (
            <button
              key={`${qt.name}-${idx}`}
              className="flex items-center rounded-md bg-main p-2 text-qrbg"
            >
              <p className="font-medium">{qt.name}</p>
            </button>
          ))}
        </div>
      </aside>
      <main className="min-h-full relative rounded-md bg-qrbg">
        <header className="py-2 sticky top-0 left-0 right-0 flex flex-col items-center justify-start">
          <h3>QR Code Type</h3>
        </header>
      </main>
      <aside className="min-h-full relative rounded-md space-y-4">
        <div className="w-full aspect-square rounded-md overflow-hidden bg-white">
          Qr code preview
          <div></div>
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
