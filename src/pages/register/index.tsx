import { registerSchema } from "@/utils/shcemas/registerSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTextField from "@/components/common/FormTextField";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import FormPasswordField from "@/components/common/FormPasswordField";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = form;

  const onSubmit = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 relative overflow-hidden">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full justify-between md:justify-start"
          >
            <div>
              <FormTextField
                type="text"
                label="Name"
                placeholder="Enter name."
                name="name"
                form={form}
              />

              <FormTextField
                type="email"
                label="Email Address*"
                placeholder="Enter email."
                name="email"
                form={form}
              />

              <FormPasswordField
                label="Password"
                name="password"
                form={form}
                show={false}
                showErrMsg={true}
              />

              <FormPasswordField
                label="Confirm Password"
                name="cpassword"
                form={form}
                show={false}
                showErrMsg={true}
              />
            </div>
            {/* Display general error message if form is submitted and invalid */}
            {isSubmitted && !isValid && (
              <p className="text-red-600">All fields are required.</p>
            )}

            <Button
              type="submit"
              className="w-full py-3 h-12 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </Button>
          </form>
        </Form>
        <div className="mt-4">
          <p className="text-center">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 hover:text-blue-700">
              Login
            </NavLink>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
