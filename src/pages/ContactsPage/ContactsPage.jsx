import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";
import ModalContactComfirmDelete from "../../components/ModalContactConfirmDelete/ModalContactConfirmDelete";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div>
      <Container>
        <SearchBox/>
        <ContactForm />
        <ContactList />
      </Container>
      <ModalContactComfirmDelete/>
    </div>
  );
};
export default ContactsPage;
