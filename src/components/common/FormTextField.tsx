import { formatPhoneNumber } from "@/utils/formateUsPhoneNumber";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface FormTextFieldProps {
  form: any;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  [key: string]: any;
}

const FormTextField = (props: FormTextFieldProps) => {
  const { form, label, name, placeholder, type, maxLength, ...rest } = props;

  const getMaxLength = (name: string, maxLength: number | undefined) => {
    if (name === "zipcode" || name === "mailing_zipcode") {
      return 5;
    }
    return maxLength ?? 500;
  };

  const maxLengthValue = getMaxLength(name, maxLength);

  // Validate phone number to match USA format
  const validatePhoneNumber = (value: string) => {
    // Define USA phone number regex (basic validation for 10-digit numbers)
    const phoneRegex = /^\d{0,10}$/;
    return phoneRegex.test(value);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      {...rest}
      render={({ field }) => (
        <FormItem className="mb-[1rem]">
          <FormLabel className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-[4px]">
            {label}
          </FormLabel>
          <FormControl
            className={`border border-[${
              field.value ? "var(--black-500)" : "var(--grey-200)"
            }] outline-none`}
          >
            <Input
              type={type}
              className="outline-none p-[12px] h-[48px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder={placeholder}
              maxLength={maxLengthValue}
              pattern={
                name === "zipcode" || name === "mailing_zipcode"
                  ? "\\d*"
                  : undefined
              }
              value={
                name === "phone" ? formatPhoneNumber(field.value) : field.value
              }
              onChange={(e) => {
                const value = e.target.value;
                if (name === "phone") {
                  // Only allow numeric values
                  const numericValue = value.replace(/[^0-9]/g, "");
                  if (validatePhoneNumber(numericValue)) {
                    field.onChange(numericValue);
                  }
                } else {
                  field.onChange(value);
                }
              }}
              onKeyPress={(e) => {
                if (name === "phone" && !/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              style={{ marginTop: "4px" }}
            />
          </FormControl>
          <FormMessage className="pt-1" />
        </FormItem>
      )}
    />
  );
};

export default FormTextField;
