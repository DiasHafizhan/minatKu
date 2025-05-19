import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/Auth.Layout";

export default function Login() {
  return (
    <AuthLayout type="login" title="Login">
      <FormLogin />
    </AuthLayout>
  );
}
