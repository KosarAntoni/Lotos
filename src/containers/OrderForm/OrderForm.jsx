import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";

import styles from "./OrderForm.module.css";
import i03 from "../../Assets/03.png";
import envelope from "../../Assets/envelope.svg";
import MediaQuery from "react-responsive";

const OrderForm = () => {
    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'is required';
        } else if (values.name.length > 40) {
            errors.name = 'must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'is invalid';
        }

        return errors;
    };

    return <section className={styles.orderFormSection}>
        <MediaQuery minWidth={501}>
            <div className={styles.imageContainer}>
                <img src={i03} alt=""/>
            </div>
        </MediaQuery>
        <div className={styles.formContainer}>
            <div>
                <h1><span className={styles.discount}>10%</span> discount on season ticket</h1>
                <p>You will get 10% discount on season ticket if you buy it in you introduction lessons day</p>
            </div>
            <Formik
                initialValues={{name: '', email: ''}}
                validate={validate}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div>
                        <Field id="name" name="name" type="text" placeholder=" "/>
                        <label htmlFor="name">Your name <ErrorMessage name="name"/></label>
                    </div>
                    <div>
                        <Field id="email" name="email" type="email" placeholder=" "/>
                        <label htmlFor="email">Email address <ErrorMessage name="email"/></label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        <div className={styles.plusIcon}>
                            <img src={envelope} alt=""/>
                        </div>
                        <span>Send order</span>
                    </button>
                    <p>By clicking Submit you are agreeing to the Terms and Conditions.</p>
                </Form>
            </Formik>
        </div>
    </section>
};

export default OrderForm;