"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Icons } from "./icons";

const qrType = [{ name: "URL" }, { name: "vCard" }, { name: "Text" }];

export function QrAppEditor() {
  return (
    <section className="mx-auto mb-4 grid min-h-[14em] max-w-screen-lg grid-cols-[0.4fr_1fr_0.5fr] gap-3">
      <aside className="bg-qrbg relative min-h-full rounded-md">
        <header className="border-main sticky left-0 right-0 top-0 flex flex-col items-center justify-start border-b py-3">
          <h3>QR Code Type</h3>
        </header>
        <div className="flex min-h-[20em] flex-col space-y-1 px-1 py-2">
          {qrType.map((qt, idx) => (
            <button
              key={`${qt.name}-${idx}`}
              className="bg-main text-qrbg flex items-center rounded-md p-2"
            >
              <p className="font-medium">{qt.name}</p>
            </button>
          ))}
        </div>
      </aside>
      <main className="bg-qrbg relative min-h-full rounded-md">
        <header className="sticky left-0 right-0 top-0 flex flex-col items-center justify-start py-2">
          <h3>QR Code Type</h3>
        </header>
      </main>
      <aside className="relative min-h-full space-y-4 rounded-md">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-white">
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
