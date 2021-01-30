import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegTimesCircle } from 'react-icons/fa';
import s from './ContactList.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(contactsSelectors.filteredContacts);
  const contacts = useSelector(contactsSelectors.getItems);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && !error && (
        <ul className={s.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p className={s.contact}>
                {name} : {number}
              </p>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <FaRegTimesCircle className={s.icon} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
