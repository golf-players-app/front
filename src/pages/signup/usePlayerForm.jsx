import { createForm } from "@createform/react";

export const usePlayerForm = createForm({
  name: "",
  surnameOne: "",
  surnameTwo: "",
  email: "",
  birthday: null,
  gender: "",
  password: "",
  profilePic: "",
  federatedNumber: "",
  handicap: null,
  gamePreference: "",
  biography: "",
  clubs: [],
  contacts: [],
});
