"use client";
import { Input, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { Icons } from "./icons";
import React from "react";
// import confetti from 'canvas-confetti';

export function ShortenInput() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false);

  function shortenLink() {
    fetch("http://localhost:3000/api/gen/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longURL:
          "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
      }),
    }).then(async (res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Button isIconOnly radius="sm" size="lg" onPress={onOpen}>
          <Icons.settings className="w-6 h-6" />
        </Button>

        <Input
          type="text"
          label="Enter loooooooog url"
          size="sm"
          labelPlacement="inside"
          variant="flat"
          onClear={() => console.log("input cleared")}
          className="hover:outline-tertiary focus-within:outline-primary bg-card-bg text-main min-w-md"
        />
        <Button
          size="lg"
          radius="sm"
          className="font-medium bg-tertiary text-main"
          onPress={() => shortenLink()}
        >
          Shorten It!
        </Button>
      </div>
      {isInvalid && (
        <span className="text-xs text-center font-medium">
          The shortened URL will be valid for only 30days.{" "}
          <Link href="/" className="text-tertiary underline hover:no-underline">
            Register
          </Link>{" "}
          to specify custom duration
        </span>
      )}
      <span className="text-xs text-center font-medium">
        The shortened URL will be valid for only 30days.{" "}
        <Link href="/" className="text-tertiary underline hover:no-underline">
          Register
        </Link>{" "}
        to specify custom duration
      </span>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-bg2">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Customize URL</ModalHeader>
              <ModalBody>
                <Input
                  type="url"
                  label="custom link address"
                  // placeholder=""
                  labelPlacement="inside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://btn.js.org/
                      </span>
                    </div>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
