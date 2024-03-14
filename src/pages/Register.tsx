import '@/styles/Register.css'
import React,{ useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'



interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const initialValues: FormData = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = (values: FormData) => {
    localStorage.setItem('formData', JSON.stringify(values));
    // handle form submission
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
            onSubmit={handleSubmit}
          >{({ isSubmitting }) => (
            <Form className="w-full">
              <div className="flex justify-center">
                <div className="h-64 w-64 border-dashed border-2 rounded-lg text-center bg-gray-100 border-gray-200">
                  <div className="flex items-center justify-center h-full p-8">
                    <div>
                      <div className="flex justify-center">
                        <span className="text-white text-lg bg-blue-700 p-3 rounded-lg">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 my-2">Drag and drop an image here, or click to upload</p>
                      <button type="button" className="bg-zinc-200 text-blue-600 text-sm font-semibold py-2 px-4 rounded">Upload Image</button>
                      <input type="file" accept="image/*" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">First Name</label>
                </p>
                <div className="flex items-center">
                  <div className="sign-up-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                    </svg>
                  </div>
                  <Field type="text" name="firstName" placeholder="Enter your first name" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">Last Name</label>
                </p>
                <div className="flex items-center">
                  <div className="sign-up-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                    </svg>
                  </div>
                  <Field type="text" name="lastName" placeholder="Enter your last name" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
              </div>
              <div>
                <p>
                  <label htmlFor="username">Email</label>
                </p>
                <div className="flex items-center">
                  <div className="sign-up-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                    </svg>
                  </div>
                  <Field type="text" name="email" placeholder="Enter your email" className="sign-up-input w-full" values="" />
                  <ErrorMessage name="email" component="div" className="error-message" />
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
        </div>
      </div>
      <LayoutFooter />
    </div>
  )
}

