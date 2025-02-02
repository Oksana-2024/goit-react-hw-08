import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logOutThunk } from "../auth/operations";

const contacts = {
  items: [],
  loading: false,
  error: null,
  currentContact: null,
  deleteContact: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    setCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
    setDeleteContact(state, action) {
      state.deleteContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contacts) => contacts.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => {
          return item.id === action.payload.id;
        });
        state.items.splice(index, 1, action.payload);
      });
  },
});

export const { setCurrentContact, setDeleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
