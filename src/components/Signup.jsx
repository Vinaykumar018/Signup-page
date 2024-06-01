 
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Ensure you have a Signup.css file with the custom styles
 
const Signup = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        allowExtraEmails: false
    });
 
    const [errors, setErrors] = useState({});
 
    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = formValues.firstName ? "" : "First Name is required.";
        tempErrors.lastName = formValues.lastName ? "" : "Last Name is required.";
        tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email) ? "" : "Email is not valid.";
        tempErrors.password = formValues.password.length >= 6 ? "" : "Password must be at least 6 characters long.";
        tempErrors.allowExtraEmails = formValues.allowExtraEmails ? "" : "You must accept the terms.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };
 
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value
        });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formValues);
            // Add your form submission logic here
        } else {
            console.log("Form has errors.");
        }
    };
 
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4">
                <div className="text-center mb-4">
                    <svg
                        className="bi bi-lock-fill"
                        width="3em"
                        height="3em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.5 8V6a4 4 0 118 0v2h-1V6a3 3 0 00-6 0v2h-1z"
                        />
                        <path
                            fillRule="evenodd"
                            d="M2 8a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H2zm1 2a1 1 0 012 0 1 1 0 01-2 0z"
                        />
                    </svg>
                    <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <iframe
                        src="https://accounts.google.com/gsi/button?type=standard&theme=outline&size=large&client_id=852188386915-7lm9dfumsh5ml3vl3ust8q9tr03dsoqj.apps.googleusercontent.com"
                        allow="identity-credentials-get"
                        title="Sign in with Google Button"
                        style={{ display: 'block', height: '44px', width: '202px', border: '0' }}
                    />
                </div>
                <form noValidate onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name<span className="text-danger">&thinsp;*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                required
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name<span className="text-danger">&thinsp;*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                required
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address<span className="text-danger">&thinsp;*</span></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password<span className="text-danger">&thinsp;*</span></label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            value={formValues.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="allowExtraEmails"
                            name="allowExtraEmails"
                            required
                            checked={formValues.allowExtraEmails}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="allowExtraEmails">
                            I want to receive inspiration, marketing promotions and updates via email.
                            <span className="text-danger">&thinsp;*</span>
                        </label>
                        {errors.allowExtraEmails && <span className="text-danger">{errors.allowExtraEmails}</span>}
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                    <div className="mt-3 text-center">
                        <a href="/auth/login">Already have an account? Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Signup;
 
 

 
