import Button from "../Elements/Button";
import Input from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="">
      <Input type="text" name="firtName" placeholder="First Name" />
      <Input type="text" name="lastName" placeholder="Last Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button>Register</Button>
    </form>
  );
}
