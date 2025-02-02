import { IoPerson } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { setCurrentContact, setDeleteContact } from "../../redux/contacts/slice";



const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  
  
  return (
    <div className={s.contactsWraper}>
      <div className={s.contactContainer}>
        <div className={s.box}>
          <IoPerson size={24} className={s.icon}/> <p className={s.text}>{name}</p>
        </div>
        <div className={s.box}>
          <MdPhone size={24} className={s.icon}/> <p className={s.text}>{number}</p>
        </div>
      </div>
    <div className={s.buttonWraper}>
        <button onClick={() => dispatch(setDeleteContact(id))} className={s.button} type="button">
        Delete
        </button>
        <button onClick={() => dispatch(setCurrentContact({id, name, number}))} className={s.button} type="button">
        Edit
        </button>
    </div>
    </div>
  );
};
export default Contact;