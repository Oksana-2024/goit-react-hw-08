import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectNumberFilter, selectContacts],
    (filter, number, contacts) =>
      !filter.trim()
        ? contacts
        : contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
  );