"use client";
import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import Button from "@/components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      investmentGoals: "long_term_holding",
      riskTolerance: "medium",
      preferredIndustry: "information_technology",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<SignUpFormData> = async (
    data: SignUpFormData
  ) => {
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        console.error("Sign-up failed:", result.error || "Unknown error");
        // TODO: Show error to user
        return;
      }
      console.log("Sign-up successful:", result);
      // TODO: Redirect to sign-in or dashboard
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold sm:text-3xl form-title">
        Sign Up & Personalize
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="Your Full Name"
          register={register("fullName", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
          error={errors.fullName?.message}
        />
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
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          control={control}
          options={[
            { value: "capital_appreciation", label: "Capital Appreciation" },
            { value: "dividend_income", label: "Dividend Income" },
            { value: "growth_investing", label: "Growth Investing" },
            { value: "value_investing", label: "Value Investing" },
            { value: "income_generation", label: "Income Generation" },
            {
              value: "short_term_speculation",
              label: "Short-Term Speculation",
            },
            { value: "long_term_holding", label: "Long-Term Holding" },
            { value: "diversification", label: "Diversification" },
            { value: "risk_mitigation", label: "Risk Mitigation" },
            { value: "sector_exposure", label: "Sector Exposure" },
            { value: "emerging_markets", label: "Emerging Markets Exposure" },
            { value: "hedging", label: "Hedging" },
            {
              value: "tactical_allocation",
              label: "Tactical Asset Allocation",
            },
            { value: "sri", label: "Socially Responsible Investing (SRI)" },
            {
              value: "esg",
              label: "Environmental, Social, and Governance (ESG) Investing",
            },
            { value: "index_tracking", label: "Index Fund Tracking" },
            { value: "dividend_reinvestment", label: "Dividend Reinvestment" },
            { value: "active_trading", label: "Active Trading" },
            { value: "swing_trading", label: "Swing Trading" },
            {
              value: "retirement_growth",
              label: "Retirement Account Growth (IRA/401k)",
            },
          ]}
          register={register("investmentGoals")}
          error={errors.investmentGoals?.message}
          required={true}
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          control={control}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
          register={register("riskTolerance")}
          error={errors.riskTolerance?.message}
          required={true}
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          control={control}
          options={[
            { value: "technology", label: "Technology" },
            { value: "healthcare", label: "Healthcare" },
            { value: "financials", label: "Financials" },
            { value: "energy", label: "Energy" },
            {
              value: "consumer_discretionary",
              label: "Consumer Discretionary",
            },
            { value: "consumer_staples", label: "Consumer Staples" },
            { value: "industrials", label: "Industrials" },
            { value: "materials", label: "Materials" },
            { value: "utilities", label: "Utilities" },
            { value: "real_estate", label: "Real Estate" },
            {
              value: "communication_services",
              label: "Communication Services",
            },
            {
              value: "information_technology",
              label: "Information Technology",
            },
            { value: "telecommunications", label: "Telecommunications" },
            { value: "biotechnology", label: "Biotechnology" },
            { value: "automotive", label: "Automotive" },
            { value: "aerospace_defense", label: "Aerospace & Defense" },
            { value: "retail", label: "Retail" },
            { value: "transportation", label: "Transportation" },
            { value: "hospitality", label: "Hospitality" },
            { value: "media_entertainment", label: "Media & Entertainment" },
          ]}
          register={register("preferredIndustry")}
          error={errors.preferredIndustry?.message}
          required={true}
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
