## QRContext

`QRContext` provides data values passed to the `QRPreview` component for QRcode preview; `id` which is passed to the download
functions which grabs the qrcode image using the `html-to-image` package.

QRcontext provider values are passed seperately to `MobileQRCodeEditor` component or `QRCodeEditor` component based on screen size. Both components are rendered based on device screen size.

## QTypeContext

`QTypeContext` context handles which values to be passed to the `QRPreview` value prop. Value(s) passed to the `value` prop are based on what type is selected. Types like `calender`, `vcard`, e.t.c requires special formatting before its values are passed to `QRPreview`.

**`QTypeContext` is wrapped withing the `QRContext` therefere all children components has access to use the `QRContext` reducer functions and states**
