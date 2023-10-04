import React, { useState } from "react";
import "./styles.scss";
import {
  LIGHT_LOGO_IMG,
  LIGHT_STARTINGPAGE_BG,
  LOGO_IMG,
  ROBIN_DARK_THEME,
  ROBIN_LIGHT_THEME,
  STARTINGPAGE_BG,
} from "../../assets";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/formikSchema";
import InputFields from "../../components/inputField";
import { useNavigate } from "react-router-dom";
// formik form initial values
const initialValues = {
  id: "",
  password: "",
};

function Index() {
  const theme = useSelector((state) => state.theme);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // useFormik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: loginSchema,
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        console.log(values);
        navigate("/dashboard");
        action.resetForm();
      },
    });
  return (
    <div
      className="loginPage"
      style={{
        background: `url(${
          theme === "light" ? LIGHT_STARTINGPAGE_BG : STARTINGPAGE_BG
        }) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {/* logo images */}
      <div className="logoImg">
        <img
          width={220}
          height={40}
          src={theme === "light" ? LIGHT_LOGO_IMG : LOGO_IMG}
          alt="logo-images"
          loading="lazy"
        />
      </div>

      {/* login form */}
      <div className="loginForm">
        {/* logo */}
        <div className="robinLogoContainer">
          {/* robin logo */}
          <img
            width={245}
            height={50}
            src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
            alt="robin-images"
          />
          {/* line */}
          <span>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="320"
                height="3"
                viewBox="0 0 320 3"
                fill="none"
              >
                <line
                  opacity="0.5"
                  x1="0.5"
                  y1="1.5"
                  x2="319.5"
                  y2="1.5"
                  stroke="url(#paint0_radial_8368_259537)"
                  stroke-width="3"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_8368_259537"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(153.824 9.352) scale(134.763 2921.3)"
                  >
                    <stop stop-color="#E31837" />
                    <stop offset="1" stopColor="#E31837" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="319"
                height="3"
                viewBox="0 0 319 3"
                fill="none"
              >
                <line
                  opacity="0.5"
                  y1="1.5"
                  x2="319"
                  y2="1.5"
                  stroke="url(#paint0_radial_625_2022)"
                  strokeWidth="3"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_625_2022"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(153.324 9.352) scale(134.763 2921.3)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            )}
          </span>
        </div>
        {/* login form */}
        <div className="formContainer">
          <h2
            className="title"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Dealer Management System
          </h2>

          <form
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            style={{
              backgroundColor: theme === "light" ? "#F2F2F2" : "",
              boxShadow:
                theme === "light" && "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* titles */}
            <div className="formTitle">
              <h1 style={{ color: theme === "light" ? "black" : "white" }}>
                Welcome
              </h1>
              <p style={{ color: "#B5B5B6" }}>
                Please enter your credentials to login
              </p>
            </div>

            {/* email fields */}
            <div
              className="fields"
              style={{
                borderColor: touched.id
                  ? "#ED302D"
                  : theme === "light"
                  ? ""
                  : "#545454",
                backgroundColor: theme === "light" ? "" : "#0B0B0C",
              }}
            >
              {/* icons */}
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44772 10.781C2.94762 11.2811 2.66667 11.9594 2.66667 12.6667V14"
                    stroke={theme === "light" ? "black" : "white"}
                    // stroke={touched.id ? "#ED302D" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52724 7.33333 8 7.33333Z"
                    stroke={theme === "light" ? "black" : "white"}
                    // stroke={touched.id ? "#ED302D" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {/* inputfields */}
              <div className="inputs">
                <InputFields
                  value={values.id}
                  onChange={handleChange}
                  placeholder="User ID (MILE ID. Parent ID)*"
                  type="text"
                  onBlur={handleBlur}
                  name="id"
                />
              </div>
            </div>
            {/* id error */}
            {errors.id && touched.id ? (
              <p className="errors">{errors.id}</p>
            ) : null}
            {/* password */}
            <div
              className="fields"
              style={{
                borderColor: touched.password
                  ? "#ED302D"
                  : theme === "light"
                  ? ""
                  : "#545454",
                backgroundColor: theme === "light" ? "" : "#0B0B0C",
                marginTop: 20,
              }}
            >
              {/* icons */}
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.81818 6.99998C1.48346 6.99998 1.21212 7.27132 1.21212 7.60604V11.8485C1.21212 12.1832 1.48346 12.4545 1.81818 12.4545H10.303C10.6377 12.4545 10.9091 12.1832 10.9091 11.8485V7.60604C10.9091 7.27132 10.6377 6.99998 10.303 6.99998H1.81818ZM0 7.60604C0 6.60188 0.814028 5.78786 1.81818 5.78786H10.303C11.3072 5.78786 12.1212 6.60188 12.1212 7.60604V11.8485C12.1212 12.8526 11.3072 13.6666 10.303 13.6666H1.81818C0.814028 13.6666 0 12.8526 0 11.8485V7.60604Z"
                    // fill={touched.password ? "#ED302D" : "white"}
                    stroke={theme === "light" ? "black" : "white"}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.0606 1.54545C5.41765 1.54545 4.80104 1.80086 4.34641 2.25549C3.89177 2.71013 3.63636 3.32674 3.63636 3.96969V6.39393C3.63636 6.72865 3.36502 6.99999 3.0303 6.99999C2.69558 6.99999 2.42424 6.72865 2.42424 6.39393V3.96969C2.42424 3.00527 2.80736 2.08034 3.48931 1.39839C4.17126 0.716444 5.09618 0.333328 6.0606 0.333328C7.02503 0.333328 7.94995 0.716444 8.6319 1.39839C9.31385 2.08034 9.69697 3.00527 9.69697 3.96969V6.39393C9.69697 6.72865 9.42562 6.99999 9.09091 6.99999C8.75619 6.99999 8.48485 6.72865 8.48485 6.39393V3.96969C8.48485 3.32674 8.22943 2.71013 7.7748 2.25549C7.32017 1.80086 6.70355 1.54545 6.0606 1.54545Z"
                    // fill={touched.password ? "#ED302D" : "white"}
                    stroke={theme === "light" ? "black" : "white"}
                  />
                </svg>
              </span>

              {/* inputfields */}
              <div className="inputs">
                <InputFields
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password*"
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  showPassword={showPassword}
                />

                {/* password icons */}
                <span className="passwordIcons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.0997 3.14768C3.29428 2.95174 3.61086 2.95064 3.8068 3.14522L6.59211 5.91118C7.60745 5.39723 8.76355 5.03125 9.99995 5.03125C12.244 5.03125 14.2313 6.23565 15.6211 7.37959C16.3229 7.95731 16.8896 8.5339 17.2811 8.96607C17.4772 9.18248 17.63 9.36351 17.7347 9.4915C17.787 9.55552 17.8273 9.60633 17.855 9.64174C17.8689 9.65945 17.8796 9.67331 17.8871 9.68305L17.8958 9.69454L17.8984 9.6979L17.8995 9.69936C17.8996 9.69951 17.8997 9.69965 17.4999 10C17.8997 10.3004 17.8996 10.3004 17.8995 10.3005L17.8989 10.3014L17.8976 10.3032L17.8931 10.309C17.8894 10.3139 17.8842 10.3207 17.8775 10.3294C17.864 10.3469 17.8445 10.3719 17.8192 10.4037C17.7686 10.4674 17.6947 10.5585 17.5991 10.6713C17.408 10.8968 17.1297 11.21 16.777 11.5654C16.1648 12.182 15.3195 12.9347 14.3094 13.5749L16.8977 16.1452C17.0937 16.3398 17.0948 16.6564 16.9002 16.8523C16.7056 17.0483 16.389 17.0494 16.1931 16.8548L3.10217 3.85478C2.90622 3.6602 2.90512 3.34362 3.0997 3.14768ZM13.5799 12.8504C14.5906 12.2403 15.4476 11.4851 16.0673 10.8608C16.3987 10.527 16.6592 10.2337 16.8361 10.0249C16.8432 10.0165 16.8503 10.0082 16.8571 10C16.7721 9.89906 16.6658 9.77635 16.54 9.63744C16.1725 9.23172 15.6409 8.69113 14.9855 8.15166C13.6608 7.06123 11.8982 6.03125 9.99995 6.03125C9.07364 6.03125 8.17757 6.27625 7.34446 6.6583L8.71147 8.01582C9.09274 7.77094 9.53963 7.63802 9.99995 7.63802C10.6287 7.63802 11.2324 7.88603 11.6781 8.3286C12.1239 8.77128 12.3749 9.37244 12.3749 10C12.3749 10.4572 12.2417 10.9004 11.997 11.2785L13.5799 12.8504ZM11.2595 10.5462C11.335 10.3755 11.3749 10.1897 11.3749 10C11.3749 9.63991 11.2309 9.29386 10.9735 9.03817C10.7159 8.78236 10.3657 8.63802 9.99995 8.63802C9.80933 8.63802 9.62297 8.67722 9.45174 8.75095L11.2595 10.5462ZM17.4999 10L17.8995 10.3005C18.0332 10.1226 18.0334 9.87757 17.8997 9.69965L17.4999 10ZM5.48834 7.14968C5.65586 7.36921 5.61369 7.68297 5.39416 7.85049C4.62942 8.43402 4.00287 9.04965 3.56716 9.5203C3.39359 9.70779 3.25101 9.87151 3.14275 10C3.22779 10.1009 3.33404 10.2236 3.45988 10.3626C3.82741 10.7683 4.35899 11.3089 5.01437 11.8483C6.33909 12.9388 8.10171 13.9688 9.99995 13.9688C10.5129 13.9688 11.0166 13.8937 11.506 13.7616C11.7726 13.6896 12.047 13.8473 12.119 14.1139C12.191 14.3805 12.0332 14.655 11.7666 14.727C11.2026 14.8793 10.611 14.9688 9.99995 14.9688C7.75593 14.9688 5.76856 13.7644 4.37884 12.6204C3.677 12.0427 3.11025 11.4661 2.71876 11.0339C2.52272 10.8175 2.36987 10.6365 2.26523 10.5085C2.21289 10.4445 2.17255 10.3937 2.14485 10.3583C2.131 10.3406 2.1203 10.3267 2.11284 10.317L2.10407 10.3055L2.10153 10.3021L2.10071 10.301L2.10043 10.3006C2.10031 10.3005 2.10021 10.3004 2.49995 10C2.10021 9.69965 2.10026 9.69958 2.10032 9.6995L2.10171 9.69766L2.10469 9.69373L2.11502 9.68021C2.12384 9.66871 2.13652 9.65232 2.15296 9.6314C2.18583 9.58955 2.23373 9.52952 2.29587 9.45419C2.42008 9.30359 2.60143 9.09147 2.83334 8.84095C3.29632 8.34085 3.96522 7.68297 4.78754 7.0555C5.00707 6.88798 5.32083 6.93015 5.48834 7.14968ZM2.49995 10L2.10032 9.6995C1.96663 9.87743 1.96652 10.1224 2.10021 10.3004L2.49995 10ZM8.06424 9.85237C8.33557 9.80106 8.59713 9.97942 8.64844 10.2508C8.69895 10.5178 8.8295 10.7663 9.02644 10.9618C9.21935 11.1534 9.46416 11.2825 9.72874 11.3352C9.99956 11.3892 10.1753 11.6525 10.1214 11.9233C10.0674 12.1941 9.8041 12.3699 9.53328 12.3159C9.07815 12.2252 8.65564 12.0029 8.3218 11.6714C7.98085 11.3328 7.75379 10.9016 7.66586 10.4366C7.61455 10.1652 7.79291 9.90368 8.06424 9.85237Z"
                      fill="#FF3E5B"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* password error */}
            {errors.password && touched.password ? (
              <p className="errors">{errors.password}</p>
            ) : null}
            {/* forget password */}
            <button type="button" className="forgetPassword">
              Forget Password?
            </button>

            {/* button */}
            <button
              type="submit"
              role="button"
              aria-label="submit"
              className="btn"
            >
              Login
            </button>

            {/* m&m login */}
            <button type="button" className="m_login">
              M&M User login
            </button>
          </form>
        </div>
      </div>

      {/* bottom logo */}
      <div className="loginPage_footer">
        <span>Copyright © 2023 ROBIN</span>
      </div>
    </div>
  );
}

export default Index;
