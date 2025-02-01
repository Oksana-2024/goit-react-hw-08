import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div>
      <Container>
        <ContactForm />
        <ContactList />
      </Container>
    </div>
  );
};
export default ContactsPage;
