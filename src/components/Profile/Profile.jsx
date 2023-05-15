import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../../services/userApi';
import { toast } from "react-toastify";

function Profile() {
    const Navigate = useNavigate();

    //yup validation 
    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is Required'),
        userImage: Yup.string()
            .required('image is Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is Required'),
        address: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Address is Required'),
    });

    //formic for state management
    const formik = useFormik({
        initialValues: {
            name: '',
            userImage: '',
            password: '',
            address: ''
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            userSignup(values)
                .then(() => {
                    Navigate('/profile')
                })
                .catch((error) => {
                    toast.error(error.response.data.message, {
                        position: "top-center",
                    });
                })
        }
    })

    //handle input box changes
    const handleChange = (event) => {
        formik.setValues((prev) => {
            const formFields = { ...prev };
            formFields[event.target.name] = event.target.value;
            return formFields
        })
    }

    //handle submit
    function handleSubmit(e) {
        e.preventDefault();
        formik.handleSubmit()
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Profile
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="name" name="name" id="name" onChange={(event) => { handleChange(event) }} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" />
                                {formik.touched.name && formik.errors.name ? (
                                    <p className='text-red-500 mt-2 text-sm'>{formik.errors.name}</p>
                                ) : null}
                            </div>

                            {formik.values.userImage ?
                                <div className="mb-1 flex justify-center items-center">
                                    <img src={URL.createObjectURL(formik.values.userImage)} className="h-32 max-w-32 rounded-full" />
                                </div>
                                : ""
                            }

                            <div>
                                <label htmlFor="userImage" className="block mb-2 text-sm font-medium  dark:text-white">Image</label>
                                <input type="file" name="userImage" onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    formik.setFieldValue('userImage', file);
                                }} id="userImage" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {formik.touched.userImage && formik.errors.userImage ? (
                                    <div className='text-red-500 mt-2 text-sm'>{formik.errors.userImage}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input type="text" name="address" onChange={(event) => { handleChange(event) }} id="address" placeholder="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {formik.touched.address && formik.errors.address ? (
                                    <div className='text-red-500 mt-2 text-sm'>{formik.errors.address}</div>
                                ) : null}
                            </div>


                            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile