"use client";
import InputField from "@/app/components/ui/InputField";
import Button from "@/components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<SignInFormData> = async (
    data: SignInFormData
  ) => {
    try {
      const checkUser = async () => {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const user = await res.json();
        console.log(user);
      };
      checkUser();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold sm:text-3xl form-title">Welcome</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="you@example.com"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+@\w+\.\w+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          error={errors.password?.message}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-amber-200 text-black disabled:bg-gray-400"
        >
          Start Your Investing Journay
        </Button>
      </form>
    </>
  );
};
export default SignIn;
