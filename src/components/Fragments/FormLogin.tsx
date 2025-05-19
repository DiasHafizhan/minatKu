import Button from "../Elements/Button";
import Input from "../Elements/Input";

export default function FormLogin() {
  return (
    <form action="">
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  );
}
