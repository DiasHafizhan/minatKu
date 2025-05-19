import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/Auth.Layout";

export default function Register(){
  return(
    <AuthLayout type="register" title="Register">
      <FormRegister />
    </AuthLayout>
  )
}