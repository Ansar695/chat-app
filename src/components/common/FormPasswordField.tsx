import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { TbEyeClosed } from "react-icons/tb";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";

interface FormPasswordFieldProps {
  form: any;
  label: string;
  name: string;
  placeholder?: string;
  handleChange?: (value: string) => void;
  showErrMsg?: boolean;
  show?: boolean;
}

const FormPasswordField = (props: FormPasswordFieldProps) => {
  const { form, label, name, handleChange, showErrMsg, placeholder } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1 mb-[1rem]">
          <FormLabel className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-[4px]">
            {label}*
          </FormLabel>
          <div
            className={`flex justify-between items-center w-full border bg-white ${
              field.value
                ? "border-[var(--black-500)]"
                : "border-[var(--grey-200)]"
            } rounded-[6px] pr-3 overflow-hidden`}
          >
            <FormControl className="border-none w-[97%]">
              <input
                type={passwordVisible ? "text" : "password"}
                className="outline-none border-none p-[12px] h-[48px] pr-[40px] rounded-6 bg-transparent"
                placeholder={placeholder ?? "Password"}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  if (handleChange) {
                    handleChange(e.target.value);
                  }
                }}
              />
            </FormControl>
            {passwordVisible ? (
              <RxEyeOpen
                cursor="pointer"
                onClick={togglePasswordVisibility}
                className="w-6 h-6 text-[var(--black-950)]"
              />
            ) : (
              <TbEyeClosed
                cursor="pointer"
                className="w-6 h-6 text-[var(--black-950)]"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {showErrMsg && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormPasswordField;
