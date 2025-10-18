export {};
declare global {
    interface SignInFormData {
        email: string;
        password: string;
    }
    interface SignUpFormData {
        fullName: string;
        email: string;
        password: string;
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustry: string;
    }
}