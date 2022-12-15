import * as Yup from 'yup'

export const registrationSchema = Yup.object({
    fname : Yup.string().min(2).max(50).required("Please Enter the FullName"),
    age : Yup.number().required("Please Enter the Age"),
    mobile : Yup.number().required("Please Enter the Contact Number"),
    email : Yup.string().email().required("Please Enter the Email"),
    fleid : Yup.string().required("Please Select Field"),

})