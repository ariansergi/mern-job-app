import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo, SubmitBtn } from "../components"
import customFetch from "../utils/customFetch"
import { toast } from 'react-toastify';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}
const Register = () => {
  return (
    <Wrapper>
      <Form className="form" method='post'>
        <Logo />
        <h4>Register</h4>
        {/* <FormRow type="text" name="name" defaultValue="john" /> */}
        <FormRow type="text" name="name" />
        {/* <FormRow type="text" name="lastName" labelText="last name" defaultValue="smith" /> */}
        <FormRow type="text" name="lastName" labelText="last name" />
        {/* <FormRow type="text" name="location" defaultValue="earth" /> */}
        <FormRow type="text" name="location" />
        {/* <FormRow type="email" name="email" defaultValue="john@text.com" /> */}
        <FormRow type="email" name="email" />
        {/* <FormRow type="password" name="password" defaultValue="secret123" /> */}
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <p>
          Already have an account? <Link to="/login" className="member-btn">Login</Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register