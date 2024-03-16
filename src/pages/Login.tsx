import '@/styles/Login.css'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Register from './Register';


export default function Login() {
  const authContext = useContext<any>(AuthContext);
  const [resetPasswordToken, setResetPasswordToken] = useState<string>('')

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: { email: string, password: string }) => {
    axios.post(`${import.meta.env.VITE_API_BACKEND_BASE}auth/login`, {
      email: values.email,
      password: values.password
    })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo)); // save userInfo into localStorage
          authContext.setInfoUser(res.data.userInfo); // save userInfo into context
        } else {
          console.error('Login failed', res.data.message); // handle login error
        }
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  const handleResetPassword = (email: string, phoneNumber: string) => {
    axios.post(`${import.meta.env.VITE_API_BACKEND_BASE}auth/resetPassword`, {
      email,
      phoneNumber
    })
      .then((res) => {
        if (res.data.resetPasswordToken) {
          setResetPasswordToken(res.data.resetPasswordToken);
        } else {
          console.error('Reset password failed:', res.data.message);
          // Handle reset password error
        }
      })
      .catch(error => {
        console.error('Reset password failed:', error);
      });
  };

// function onLogin() {
//   if (name && password) {
//     axios.post(`${import.meta.env.VITE_API_BACKEND_BASE}auth/login`, {
//       email: name,
//       password: password
//     })
//       .then((res) => {
//         if (res) {
//           authContext.setInfoUser(res.data)
//         }
//       })
//   }
// }
return (
  <>
    <div>
      <LayoutHeader />
      <div className="py-20 bg-gray-100 lg:flex lg:items-center text-gray-500">
        <div className="lg:w-1/2"><img src="./src/assets/LoginBG-89b402e9.png" alt="LoginBG" /></div>
        <div className="lg:w-1/2 p-5 mx-10 lg:mx-20 lg:p-10 border border-gray-300 rounded-3xl">
          <div className="flex items-center justify-center">
            <img src="./src/assets/logoGrey-81085dfe.png" alt="apple-logo" className="lg:w-1/12 w-1/12" />
            <p className="text-3xl font-bold">Apple</p>
          </div>
          <h1 className="text-2xl my-5 font-bold">Login</h1>
          <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="w-full">
                  <div>
                    <label htmlFor="username">Email</label>
                    <div className="flex items-center">
                      <Field type="email" name="email" placeholder="Enter your email" className="sign-up-input w-full" />
                      <ErrorMessage name="email" component="div" className='text-red-500' />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <div className="flex items-center">
                      <Field type="password" name="password" placeholder="Enter your password" className="sign-up-input-y w-full" />
                      <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                  </div>
                  <button type="submit" className="btn-blue w-full mt-5" disabled={isSubmitting}>Login</button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-center">
            <a href="/forgot-password" className="my-5 text-blue-600 font-bold cursor-pointer hover:text-blue-500">Forgot Password?</a>
            <p className="my-4">OR</p>
            <div className="flex justify-center">
              <div style={{ height: "40px" }}>
                <div className="S9gUrf-YoZ4jf" style={{ position: "relative" }}>

                </div>
              </div>
            </div>
          </div>
          <p className="my-5">
            Don't have an account?
            <a href="/register" className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500">Sign Up now</a>
          </p>
        </div>
      </div>
      <LayoutFooter />
    </div >

  </>
);
}
