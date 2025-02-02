import * as yup from "yup";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { setCurrentContact } from "../../redux/contacts/slice";
import { IoPerson } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import clsx from "clsx";

const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Min. length is 3 symbols")
      .max(50, "Max. length is 50 symbols")
      .required(),
    number: yup
      .string()
      .min(3, "Min. length is 3 symbols")
      .max(50, "Max. length is 50 symbols")
      .required(),
  });

  return (
    <>
      <Formik
        onSubmit={(values, actions) => {
          dispatch(
            currentContact ? editContact(currentContact) : addContact(values)
          )
            .unwrap()
            .then(() => actions.resetForm())
            .then(() => dispatch(setCurrentContact(null)));
        }}
        initialValues={{
          name: currentContact?.name || "",
          number: currentContact?.number || "",
        }}
        enableReinitialize
        validationSchema={schema}
      >
        <Form className={s.formBox}>
          <div className={s.container}>

            <div className={s.inputContainer}>
            <label htmlFor="name">
              <IoPerson size={24} className={s.iconPerson} />
            </label>
              {currentContact ? (
                <Field
                  onChange={(e) =>
                    dispatch(
                      setCurrentContact({
                        ...currentContact,
                        name: e.target.value,
                      })
                    )
                  }
                  className={s.input}
                  type="text"
                  name="name"
                  id="name"
                />
              ) : (
                <Field
                  className={s.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              )}
            <div className={s.divError}>
              <ErrorMessage name="name" component="div" />
            </div>
            </div>

            <div className={s.inputContainer}>
            <label htmlFor="number">
              <MdPhone size={24} className={s.iconPhone} />
            </label>
              {currentContact ? (
                <Field
                  onChange={(e) =>
                    dispatch(
                      setCurrentContact({
                        ...currentContact,
                        number: e.target.value,
                      })
                    )
                  }
                  className={s.input}
                  type="tel"
                  name="number"
                  id="number"
                />
              ) : (
                <Field
                  className={s.input}
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="123-456-78-90"
                />
              )}
            <div className={s.divError}>
              <ErrorMessage name="number" component="div" />
            </div>
            </div>
          </div>
          <div className={s.divButton}>
            {currentContact && (
              <button
                className={clsx(s.button, s.comfirmBtn)}
                type="button"
                onClick={() => dispatch(setCurrentContact(null))}
              >
                Cancel
              </button>
            )}
            <button className={clsx(s.button, s.submitBtn)} type="submit">
              {currentContact ? "Edit contact" : "Add contact"}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
