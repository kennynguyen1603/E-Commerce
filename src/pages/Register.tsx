import '@/styles/Register.css'
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios, { AxiosError } from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Axios from '@/config/axios'
interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State: display the password
  const [registrationStatus, setRegistrationStatus] = useState<string | null>(null); // State:

  const togglePasswordVisibility = () => { // change the display status of password
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const initialValues: FormData = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required("Required")
  });

  const handleSubmit = async (values: FormData) => {
    try {
      const response = await Axios.post("user/register", values);
      console.log(response.data);
      localStorage.setItem('formData', JSON.stringify(values));
      setRegistrationStatus(response.data.status);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>; // cast error to AxiosError
        if (axiosError.response) {
          const responseData = axiosError.response.data
          if (axiosError.response.status === 400) {
            setRegistrationStatus(responseData.message);
          } else if (axiosError.response.status === 409) {
            setRegistrationStatus(responseData.message);
          } else {
            setRegistrationStatus("Unknown error: Internal Server Error!");
          }
        } else {
          setRegistrationStatus("Unknown error: Network Error!");
        }
        console.error("Error", axiosError);
      } else {
        console.error("Unknown error type:", typeof error);

      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(formData);
    }
  };

  return (
    <div>
      <LayoutHeader />
      <div className="py-20 bg-gray-100 lg:flex  text-gray-500">
        <div className="lg:w-1/2">
          <img src="./src/assets/SignUpBG-b4a0a94c.png" alt="SignUpBG" />
        </div>
        <div className="lg:w-1/2 p-5 mx-10 lg:mx-20 lg:p-10 border border-gray-300 rounded-3xl">
          <div className="flex items-center justify-center">
            <img src="./src/assets/logoGrey-81085dfe.png" alt="apple-logo" className="lg:w-1/12 w-1/12" />
            <p className="text-3xl font-bold">Apple</p>
          </div>
          <h1 className="text-2xl my-5 font-bold">Sign Up</h1>
          <Formik
            initialValues={formData || initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >{({ isSubmitting }) => (
            <Form className="w-full">
              <div className="flex justify-center">
                <div className="h-64 w-64 border-dashed border-2 rounded-lg text-center bg-gray-100 border-gray-200">
                  <div className="flex items-center justify-center h-full p-8">
                    <div>
                      <p className="text-sm text-gray-400 my-2">Drag and drop an image here, or click to upload</p>
                      <button type="button" className="bg-zinc-200 text-blue-600 text-sm font-semibold py-2 px-4 rounded">Upload Image</button>
                      <input id="upload" type="file" accept="image/*" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">First Name</label>
                </p>
                <div className="flex items-center">
                  <Field type="text" name="firstName" placeholder="Enter your first name" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">Last Name</label>
                </p>
                <div className="flex items-center">
                  <Field type="text" name="lastName" placeholder="Enter your last name" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">Email</label>
                </p>
                <div className="flex items-center">
                  <Field type="email" name="email" placeholder="Enter your email" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <p>
                  <label htmlFor="password">Password</label>
                </p>
                <div className="flex items-center">
                  <Field type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" onKeyPress={handleKeyPress} className="sign-up-input w-full" values="" />
                  <button type="button" onClick={togglePasswordVisibility} className='show-password-button'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-blue text-white w-full my-3">Sign Up</button>
            </Form>
          )}
          </Formik>
          <div className="text-center">
            <p className="my-4">OR</p>
            <div className="flex justify-center">
              <div style={{ height: "40px" }}>
                <div className="S9gUrf-YoZ4jf" style={{ position: "relative" }}>
                  <div>
                  </div>
                  <iframe
                    src="https://accounts.google.com/gsi/button?type=standard&amp;theme=outline&amp;size=large&amp;text=undefined&amp;shape=undefined&amp;logo_alignment=undefined&amp;width=undefined&amp;locale=undefined&amp;click_listener=undefined&amp;client_id=628424458787-qkhchkq95n7ht13oneer3692talfp63f.apps.googleusercontent.com&amp;iframe_id=gsi_388238_241166&amp;as=MVgTmfjfQ9F0RvNTWKuT%2BA"
                    allow="identity-credentials-get"
                    id="gsi_388238_241166"
                    title="Sign in with Google"
                    style={{
                      display: "block",
                      position: "relative",
                      top: "0px",
                      left: "0px",
                      height: "44px",
                      width: "234px",
                      border: "0px",
                      margin: "-2px -10px"
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
            <p className="my-5">Already have an account? <a className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500" href="/login">Login now</a></p>
          </div>
          {registrationStatus && (
            <div className={`text-center ${registrationStatus.startsWith("Success") ? "text-green-500" : "text-red-500"}`}>
              {registrationStatus}
            </div>
          )}
        </div>
      </div>
      <LayoutFooter />
    </div >
  )
}

