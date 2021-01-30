import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './components/Form/Form.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
