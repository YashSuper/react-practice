import { createContext } from "react";

const userContext = createContext({
  name: "dummy",
  email: "dummy@nomail.com",
});

export default userContext;
