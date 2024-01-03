export function utf16To8(value: string): string {
  let result: string = "";

  for (let i = 0; i < value.length; i++) {
    const c = value.charCodeAt(i);

    // Check the character's Unicode code point range
    if (c >= 0x0001 && c <= 0x007f) {
      // Character is within single-byte range (ASCII), append directly
      result += value.charAt(i);
    } else if (c > 0x07ff) {
      // Character requires 3 bytes for UTF-8 encoding
      result += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
      result += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
      result += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    } else {
      // Character requires 2 bytes for UTF-8 encoding
      result += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
      result += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    }
  }

  return result;
}

// Utility function to draw a rounded rectangle with adjustable radii
export function drawRoundedSquare(
  lineWidth: number,
  x: number,
  y: number,
  size: number,
  color: string,
  radii: number | number[],
  fill: boolean,
  ctx: CanvasRenderingContext2D
): void {
  // Set line width, fill style, and stroke style
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  // Adjust coordinates for stroke alignment
  y += lineWidth / 2;
  x += lineWidth / 2;
  size -= lineWidth;

  // Ensure radii is an array
  if (!Array.isArray(radii)) {
    radii = [radii, radii, radii, radii];
  }

  // Clamp radii to valid values (0 to half the size)
  radii = radii.map((r) => Math.max(0, Math.min(r, size / 2)));

  // Extract individual corner radii
  const [rTopLeft, rTopRight, rBottomRight, rBottomLeft] = radii;

  // Begin drawing the shape
  ctx.beginPath();

  // Top left corner
  ctx.moveTo(x + rTopLeft, y);

  // Top right corner
  ctx.lineTo(x + size - rTopRight, y);
  if (rTopRight) ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);

  // Bottom right corner
  ctx.lineTo(x + size, y + size - rBottomRight);
  if (rBottomRight)
    ctx.quadraticCurveTo(x + size, y + size, x + size - rBottomRight, y + size);

  // Bottom left corner
  ctx.lineTo(x + rBottomLeft, y + size);
  if (rBottomLeft) ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);

  // Close the path and draw
  ctx.closePath();
  ctx.stroke();
  if (fill) ctx.fill();
}
