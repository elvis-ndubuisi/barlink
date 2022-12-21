/* Validates input as url and returns a boolean */
export default function validateUrl(str: string): boolean {
  let givenInput: any;
  try {
    givenInput = new URL(str);
  } catch (error) {
    // console.log(error);
    return false;
  }
  return givenInput?.protocol === "http:" || givenInput?.protocol === "https:";
}
