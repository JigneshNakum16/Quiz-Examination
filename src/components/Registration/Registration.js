import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registrationSchema } from "../../schemas/Validation";
import style from "./Registration.module.css";
import axios from "axios";

const Registration = () => {
  //   const [value, setValue] = useState({
  //     // id: "",
  //     fname: "",
  //     age: "",
  //     email: "",
  //     mobile: "",
  //     flied: "",
  //   });

  const Navigate = useNavigate();
  const initialValues = {
    fname: "",
    age: "",
    email: "",
    mobile: "",
    fleid: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: registrationSchema,
      onSubmit: (value, action) => {
        Navigate("/info");
        setRegistration(value);
        console.log("value", value);
        action.resetForm();
      },
    });
  console.log("values", values);
  const setRegistration = async (values) => {
    await axios
      .post(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/registration.json`,
        values
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //   const handleChange = (event) => {
  //     const id = Math.round(Math.random() * 1000);
  //     const { value, name } = event.target;
  //     setValue({ ...values, [name]: value, id: id });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let info = JSON.parse(localStorage.getItem("Data")) || [];
  //     info.push(value);
  //     localStorage.setItem("Data", JSON.stringify(info));
  //     console.log("values", value);
  //     Navigate("/info");
  //   };

  return (
    <>
      <div className={style.form}>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="fname"
              id="fname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <p className={style.error}>{errors.fname}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              name="age"
              id="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && touched.age ? (
              <p className={style.error}>{errors.age}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Contact No.
            </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              id="mobile"
              maxLength={10}
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? (
              <p className={style.error}>{errors.mobile}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className={style.error}>{errors.email}</p>
            ) : null}
          </div>
          <div className="dropdown mb-4">
            <label htmlFor="fleid" className="form-label">
              Employee Status
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="fleid"
              id="dropdown"
              value={values.fleid}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option defaultValue>Choose Any Field</option>
              <option value="Web Designer">Web Designer</option>
              <option value="React Developer">React Developer</option>
              <option value="Angular Developer">Angular Developer</option>
              <option value="MERN Developer">MERN Developer</option>
              <option value="MEAN Developer">MEAN Developer</option>
              <option value="Node Developer">Node Developer</option>
              <option value="Laravel Developer">Laravel Developer</option>
              <option value="UI/UX Developer">UI/UX Developer</option>
              <option value="Flutter Developer">Flutter Developer</option>
              <option value="Python Developer">Python Developer</option>
            </select>
            {errors.fleid && touched.fleid ? (
              <p className={style.error}>{errors.fleid}</p>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
