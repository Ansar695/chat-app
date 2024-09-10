export const formatPhoneNumber = (input: string) => {
  // Remove all non-digit characters
  const cleaned = input?.replace(/\D/g, "");
  // Limit the input to a maximum of 10 digits (typical US phone number length)
  const trimmed = cleaned?.slice(0, 10);

  // Check if the input is a valid US phone number
  const match = trimmed?.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    // Format the phone number
    let formattedNumber = "";

    // Add the area code
    if (match[1]) {
      formattedNumber += match[1];
      if (match[2]) {
        formattedNumber += "-" + match[2];
      }
      if (match[3]) {
        formattedNumber += "-" + match[3];
      }
    }

    return formattedNumber;
  }

  // Return the original input if it's not a valid format
  return input;
};
