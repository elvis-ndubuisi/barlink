"use client";
import { Input } from "@nextui-org/react";

export function ShortenInput() {
  return (
    <Input
      type="url"
      size="sm"
      label="Enter loooooooog url"
      labelPlacement="inside"
      variant="flat"
      placeholder="https://marketplace.visualstudio.com/items?itemName=ElvisNdubuisi.work-stamp"
      className=""
    />
  );
}
