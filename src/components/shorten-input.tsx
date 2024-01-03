"use client";
import { Input, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Snippet,
} from "@nextui-org/react";
import Link from "next/link";
import { Icons } from "./icons";
import React from "react";

export function ShortenInput() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [customUrl, setCustomUrl] = React.useState({
    hasCustom: false,
    value: "",
    isInvalid: false,
  });
  const [payload, setPayload] = React.useState({ url: "", custom: "" });
  const [processing, setProcessing] = React.useState({
    processing: false,
    converted: false,
    shortLink: "",
  });

  const isInvalid: boolean = React.useMemo(() => {
    const urlRegex =
      /^(https?|ftp):\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,}){1,}([/?#]\S*)?$/;

    if (payload.url === "") return false;

    return payload.url.match(urlRegex) && payload.url.length > 30
      ? false
      : true;
  }, [payload.url]);

  function shortenLink() {
    customUrl.isInvalid &&
      customUrl.hasCustom &&
      setPayload((prev) => ({ ...prev, custom: customUrl.value }));

    if (!payload.url) return;

    setProcessing((prev) => ({ ...prev, processing: true }));

    fetch("/api/gen/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longURL: payload.url,
        customUrl: customUrl.value,
      }),
    })
      .then(async (res) => {
        setProcessing({ converted: true, processing: false, shortLink: "" });
        setPayload({ custom: "", url: "" });
        setCustomUrl({ hasCustom: false, isInvalid: false, value: "" });
        const payload = await res.json();
        setProcessing((prev) => ({ ...prev, shortLink: payload.short_link }));
      })
      .catch(() =>
        setProcessing({ converted: true, processing: false, shortLink: "" })
      );
  }

  return (
    <>
      <div className="flex items-center gap-4 flex-wrapc">
        <Button
          isIconOnly
          radius="none"
          size="lg"
          onPress={onOpen}
          className="rounded-md relative overflow-visible bg-cinnabar text-light"
        >
          <Icons.settings className="w-6 h-6" />
          {customUrl.hasCustom && (
            <span className="absolute -top-1 -right-1 w-3 h-3 border border-bg rounded-full bg-indigo z-10" />
          )}
        </Button>

        <Input
          value={payload.url}
          type="text"
          label="Enter loooooooog url"
          size="sm"
          labelPlacement="inside"
          variant="flat"
          isInvalid={isInvalid}
          className="flex-1 focus-within:outline-primary bg-transparent text-main min-w-md"
          onChange={(e) =>
            setPayload((prev) => ({ ...prev, url: e.target.value }))
          }
        />
      </div>
      {isInvalid && (
        <span className="text-xs text-center font-medium text-cinnabar">
          Please enter a loooong url starting with https://, http:// or ftp://
        </span>
      )}
      <Button
        isLoading={processing.processing}
        size="lg"
        radius="none"
        className="rounded-md bg-dark text-light"
        onPress={() => shortenLink()}
        disabled={
          !Boolean(payload.url && payload.url.length > 30 && !isInvalid)
        }
      >
        Shorten It
      </Button>

      <span className="text-xs text-center font-medium">
        The shortened URL will be valid for only 30days.{" "}
        <Link href="/login/sign-up" className="text-cinnabar underline hover:no-underline">
          Register
        </Link>{" "}
        to specify custom duration
      </span>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-dark text-light"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Customize URL</ModalHeader>
              <ModalBody>
                <Input
                  label="Custom link address"
                  type="url"
                  labelPlacement="inside"
                  minLength={4}
                  defaultValue={customUrl.value}
                  errorMessage={
                    customUrl.isInvalid && "Must be more than 4 characters"
                  }
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://btn.js.org/
                      </span>
                    </div>
                  }
                  onChange={(e) => {
                    setCustomUrl(() => ({
                      hasCustom:
                        !e.target.validity.tooShort &&
                        Boolean(e.target.value.length),
                      value: e.target.value,
                      isInvalid: e.target.validity.tooShort,
                    }));
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                className="bg-transparent text-white"
                  onPress={() => {
                    setCustomUrl(() => ({
                      hasCustom: false,
                      isInvalid: true,
                      value: "",
                    }));
                    onClose();
                  }}
                >
                  Close
                </Button>
                <Button
                className="bg-cinnabar text-light"
                  onPress={onClose}
                  disabled={customUrl.isInvalid}
                >
                  Save changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {processing.converted && !processing.processing && (
        <Snippet autoFocus size="lg" color="danger">
          {processing.shortLink}
        </Snippet>
      )}
    </>
  );
}
