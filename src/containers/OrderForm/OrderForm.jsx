import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";

import styles from "./OrderForm.module.css";
import slideAnimation from "../../App.module.css";
import i03 from "../../Assets/03.png";
import envelope from "../../Assets/envelope.svg";
import MediaQuery from "react-responsive";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const OrderForm = ({pathname}) => {

    let [isFormSend, setIsFormSend] = useState(false);

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

    const handleSubmit = (values, {setSubmitting}) => {

        const ticketPath = pathname.split("/")[2] || "none";

        const sendData = {
            ...values,
            ticket: ticketPath
        };

        setIsFormSend(true);

        setTimeout(() => {
            console.log(JSON.stringify(sendData, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return <section className={styles.orderFormSection}>
        <MediaQuery minWidth={501}>
            <div className={styles.imageContainer}>
                <img src={i03} alt=""/>
            </div>
        </MediaQuery>
        <div className={styles.formContainer}>
            <Formik
                initialValues={{name: '', email: ''}}
                validate={validate}
                onSubmit={handleSubmit}
            >
                <SwitchTransition>
                    <CSSTransition
                        key={!isFormSend}
                        timeout={{
                            enter: 0,
                            exit: 300
                        }}
                        classNames={{
                            enter: `${slideAnimation.slideEnter} + " " + ${slideAnimation.slide}`,
                            enterDone: slideAnimation.slide,
                            exit: `${slideAnimation.slideExit} + " " + ${slideAnimation.slide}`,
                            exitActive: `${slideAnimation.slideExitActive} + " " + ${slideAnimation.slide}`
                        }}>
                        {!isFormSend ? (
                            <Form>
                                <div>
                                    <h1><span className={styles.discount}>10%</span> discount on season ticket</h1>
                                    <p>You will get 10% discount on season ticket if you buy it in you introduction
                                        lessons
                                        day</p>
                                </div>
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
                        ) : (
                            <div>
                                <h1><span className={styles.discount}>Thank you!</span></h1>
                                <p>We will contact you in a few minutes...</p>
                            </div>
                        )}
                    </CSSTransition>
                </SwitchTransition>

            </Formik>
        </div>
    </section>
};

export default OrderForm;