import { Qr_Logo, Qr_Options } from "@/types/qrcode";
import qrcode from "qrcode";

type ICodeOpt = {
  qConfig: Qr_Options;
  logo?: Qr_Logo;
};

export async function generateQCode(
  content: string,
  opt: ICodeOpt,
  type?: string
) {
  //   const qrc  = await qrcode.
}
