"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function ShortenInput() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Input
          isClearable
          type="text"
          label="Enter loooooooog url"
          size="sm"
          labelPlacement="inside"
          variant="flat"
          onClear={() => console.log("input cleared")}
          placeholder="https://marketplace.visualstudio.com/items?itemName=ElvisNdubuisi.work-stamp"
          className="hover:outline-tertiary focus-within:outline-primary bg-card-bg text-main"
        />
        <Button
          size="lg"
          radius="sm"
          className="font-medium bg-tertiary text-main"
        >
          Shorten It!
        </Button>
      </div>
      <span className="text-xs text-center font-medium">
        The shortened URL will be valid for only 30days.{" "}
        <Link href="/" className="text-tertiary underline hover:no-underline">
          Register
        </Link>{" "}
        to specify custom duration
      </span>
    </>
  );
}
