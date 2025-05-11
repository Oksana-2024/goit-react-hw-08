import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseAPI } from "../../service/baseAPI";



export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await baseAPI.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await baseAPI.post("/contacts", contact);
      toast.success("The contact has been successfully added.");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await baseAPI.delete(`/contacts/${contactId}`);
      toast.success("The contact has been successfully deleted.");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, ...body }, thunkAPI) => {
    try {
      const response = await baseAPI.patch(`/contacts/${id}`, body);
      toast.success("The contact has been updated.");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
