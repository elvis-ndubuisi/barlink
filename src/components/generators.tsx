"use client";
import React from "react";
// import QRcode from 'qrcode'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { Icons } from "./icons";

type Qtype =
  | "wifi"
  | "url"
  | "text"
  | "email"
  | "location"
  | "vcard"
  | "mobile"
  | "sms"
  | "custom";

const btnTypes = [
  { title: "Website URL", type: "url" },
  { title: "Text", type: "text" },
  { title: "Email", type: "email" },
  { title: "Phone Number", type: "mobile" },
  { title: "SMS", type: "sms" },
  { title: "VCard", type: "vcard" },
  { title: "Event", type: "event" },
  { title: "Wifi", type: "wifi" },
  { title: "Geolocation", type: "location" },
  { title: "Custom Data", type: "custom" },
];

export function DesktopGenerator() {
  const [selectedType, setSelectedType] = React.useState<Qtype>("url");
  const [selectFormat, setSelectedFormat] = React.useState("png");
  const [content, setContent] = React.useState("");

  const formatLabels = { png: "png", jpeg: "jpeg", svg: "svg" };

  return (
    <section className="max-w-screen-lg mx-auto p-5 rounded-md grid grid-cols-[0.3fr_1fr_0.5fr] gap-3 bg-dark text-light">
      <aside>
        <h3 className="font-bold mb-3">QR Type</h3>
        <div className="flex flex-col space-y-2">
          {btnTypes.map((btn) => (
            <Button
              size="sm"
              radius="none"
              className="rounded-sm bg-mid-light text-dark"
              key={btn.type}
              onPress={() => setSelectedType(btn.type)}
            >
              {btn.title}
            </Button>
          ))}
        </div>
      </aside>

      <main>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold capitalize">{selectedType}</h4>
        </div>
        <section className="flex flex-col space-y-3">
          <Input
            placeholder="input here"
            radius="none"
            size="sm"
            className="rounded-md"
          />
          <div className="flex items-center gap-3">
            <Input
              placeholder="input here"
              radius="none"
              size="sm"
              className="rounded-md"
            />
            <Input
              placeholder="input here"
              radius="none"
              size="sm"
              className="rounded-md"
            />
          </div>
        </section>
      </main>

      <aside className="flex flex-col space-y-2">
        <Preview />
        <section className="flex flex-col space-y-2">
          <h4 className="font-semibold">Logo</h4>
          <div>
            <span className="border-2 text-sm text-center border-dashed border-tangerine bg-tangerine/30 p-3 rounded-md block">
              <Icons.fileEarmark className="fill-light w-5 h-5 inline-block mr-1" />
              Drag & drop or select image
            </span>
            <input type="file" name="" hidden />
          </div>
        </section>
        <ButtonGroup variant="solid">
          <Button>
            Download as <span className="uppercase">{selectFormat}</span>
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly>
                <Icons.chevronBarExpand />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Download format options"
              selectedKeys={selectFormat}
              selectionMode="single"
              onSelectionChange={setSelectedFormat}
              className="max-w-[300px]"
            >
              <DropdownItem key="png">PNG</DropdownItem>
              <DropdownItem key="jpeg">JPEG</DropdownItem>
              <DropdownItem key="svg">SVG</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
      </aside>
    </section>
  );
}

function Preview() {
  return <div className="w-12 aspect-square bg-light">{/* <canvas /> */}</div>;
}
