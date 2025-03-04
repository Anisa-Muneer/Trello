// import { ToastContainer } from 'react-toastify';
// import { useFormik } from 'formik';
// import { signupSchema } from '../../yupValidation/validation';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setAdmindetails } from '../../Redux/AdminSlice';
// import { GenerateError } from '../../toast/GenerateError';
// import { FcGoogle } from 'react-icons/fc';
// import {
//     Checkbox,
//     Input,
//     Typography,
// } from "@material-tailwind/react";
// import { adminSignup } from '../../api/adminApi';

// function Signup() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     const initialValues = {
//         name: '',
//         email: '',
//         mobile: '',
//         password: ''
//     }

//     const {
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleSubmit,
//         handleBlur
//     } = useFormik({
//         initialValues: initialValues,
//         validationSchema: signupSchema,
//         onSubmit: async (values) => {
//             const response = await adminSignup(values)
//             if (response) {
//                 console.log("resp is", response)
//             }
//             if (response.data.created) {
//                 localStorage.setItem('currentAdmin', response.data.token)
//                 const adminDetails = {
//                     id: response.data.adventure._id,
//                     name: response.data.admin.name,
//                     email: response.data.admin.email,

//                 }
//                 dispatch(setAdmindetails({ adminInfo: adminDetails }))
//                 navigate('/admin')
//             } else {
//                 GenerateError(response.data.message)
//             }
//         }
//     })



//     return (
//         <>

//             <div className="bg-white bg-cover min-h-screen flex flex-col items-center justify-center">
//                 <div className=" just bg-[]  md:flex md:h-3/4 rounded-xl bg-no-repeat" style={{ backgroundSize: 'cover', backgroundPosition: 'fill' }}>
//                     <div className="flex flex-col justify-center items-center LoginLeft bg-[#588157]  text-white py-8 px-4 text-center md:w-1/2 rounded-tl-xl md:rounded-bl-xl">
//                         <img className="w-44 h-44 mx-auto" />
//                         <div className=''>
//                             <div className='w-96 flex justify-center mt-5'>
//                                 <p className="text-2xl md:text-2xl">Already have an account?</p>
//                             </div>
//                             <br />
//                             <button
//                                 onClick={() => navigate("/adventure/login")}
//                                 className="w-32 h-12 bg-[#a8f5af] hover:bg-[#13453a] text-white rounded-3xl focus:outline-none"
//                             >
//                                 Login
//                             </button>

//                         </div>

//                     </div>
//                     <div className="LoginForm bg-gray-200 p-6 md:p-16 md:w-1/2 rounded-xl">
//                         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//                             <Input size="lg" label="Name" name='name' id='name' variant="standard"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.name}
//                             />
//                             {touched.name && errors.name && (
//                                 <div className="text-red-500 text-sm ">{errors.name}</div>
//                             )}
//                             <Input size="lg" label="Email" name='email' id='email' variant="standard"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.email}
//                             />
//                             {
//                                 touched.email && errors.email && (
//                                     <div className='text-red-500 text-sm' >{errors.email} </div>
//                                 )
//                             }
//                             <Input size="lg" label="Mobile" name='mobile' id='mobile' variant="standard"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.mobile}
//                             />
//                             {
//                                 touched.mobile && errors.mobile && (
//                                     <div className='text-red-500 text-sm'> {errors.mobile} </div>
//                                 )
//                             }
//                             <Input size="lg" label="Password" type='password' name='password' id='password' variant="standard"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.password}

//                             />
//                             {
//                                 touched.password && errors.password && (
//                                     <div className='text-red-500 text-sm'> {errors.password} </div>
//                                 )
//                             }

//                             <Checkbox
//                                 label={
//                                     <Typography
//                                         variant="small"
//                                         color="gray"
//                                         className="flex items-center font-normal"
//                                     >
//                                         I agree the
//                                         <a
//                                             href="#"
//                                             className="font-medium transition-colors hover:text-gray-900"
//                                         >
//                                             &nbsp;Terms and Conditions
//                                         </a>
//                                     </Typography>
//                                 }
//                                 containerProps={{ className: "-ml-2.5" }}
//                             />


//                             <button
//                                 type="submit"
//                                 className="bg-[#588157] hover:bg-[#13453a] text-white py-2 rounded-md"
//                             >
//                                 Sign up
//                             </button>

//                         </form>
//                         <div className="flex items-center justify-center py-6">
//                             <div className="border-t border-gray-700 flex-grow h-0"></div>
//                             <div className="mx-2 text-gray-800">OR</div>
//                             <div className="border-t border-gray-700 flex-grow h-0"></div>
//                         </div>
//                         <div className="flex justify-center">
//                             <FcGoogle className="w-6 h-6" />
//                             <a onClick={() => Gsignup()} className="px-2">
//                                 Signin with Google
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />

//         </>
//     );
// }

// export default Signup;
