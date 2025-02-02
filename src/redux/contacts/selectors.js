import { createSelector } from "@reduxjs/toolkit";
import { selectSearchFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectSearchFilter, selectContacts],
  (filter, contacts) =>
    !filter.trim()
      ? contacts
      : contacts.filter(
          ({ name, number }) =>
            name.toLowerCase().includes(filter.toLowerCase()) ||
            number.toLowerCase().includes(filter.toLowerCase())
        )
);
export const selectCurrentContact = (state) => state.contacts.currentContact;
export const selectDeleteContact = (state) => state.contacts.deleteContact;


