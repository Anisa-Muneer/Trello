import { Button, Dialog, DialogBody, DialogFooter, Typography, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ToastContainer } from "react-toastify";
import { useFormik } from 'formik'
import { taskSchema } from '../../yupValidation/validation';
import { addList } from '../../api/adminApi';
import {
    PlusCircleIcon
} from "@heroicons/react/24/outline";

function AddList() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    const initialValues = {
        taskName: '',

    }

    const {
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue
    } = useFormik({
        initialValues: initialValues,
        validationSchema: taskSchema,
        onSubmit: async (values, { resetForm }) => {
            const response = await addList(values)
            if (response.data.created) {
                resetForm
                setOpen(!open)
            }
            refetch()

        }
    })

    return (
        <>
            <div className="flex flex-row">
                <Button className='bg-blue-gray-500 flex items-center' onClick={handleOpen}>
                    Add Another List
                    <PlusCircleIcon className="h-5 w-5 text-white ml-2" />
                </Button>
            </div>


            <Dialog open={open} handler={handleOpen}>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <DialogBody className="max-h-[400px] overflow-y-auto">
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Task
                            </Typography>
                            <Input
                                type="text"
                                name="taskName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.taskName}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            />
                            {touched.taskName && errors.taskName && (
                                <div className="text-red-500 text-sm ">{errors.taskName}</div>
                            )}
                        </div>

                    </DialogBody>

                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={() => handleOpen(!open)}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>

                        <Button type="submit" variant="gradient" color="green">
                            <span>Submit</span>
                        </Button>
                    </DialogFooter>
                </form >
            </Dialog >
            <ToastContainer />

        </>
    )
}

export default AddList


