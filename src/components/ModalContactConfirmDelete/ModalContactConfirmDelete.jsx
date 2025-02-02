import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectDeleteContact } from "../../redux/contacts/selectors";
import { setDeleteContact } from "../../redux/contacts/slice";
import s from "./ModalContactConfirmDelete.module.css";
import clsx from "clsx";

const ModalContactComfirmDelete = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectDeleteContact);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "10px",
    },
  };

  return (
    <>
      <Modal
        isOpen={!!id} // id=null; !id=true; !!id=false;
        onRequestClose={() => dispatch(setDeleteContact(null))}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={s.modal}>
          <h3 className={s.text}>Do you really want to delete this contact?</h3>
         <div className={s.divBtn}>
              <button
                className={clsx(s.button,s.buttonCancel)}
                type="button"
                onClick={() => dispatch(setDeleteContact(null))}
              >
                Cancel
              </button>
              <button
                className={clsx(s.button, s.buttonDelete)}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                  dispatch(setDeleteContact(null));
                }}
              >
                Delete
              </button>
         </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalContactComfirmDelete;
