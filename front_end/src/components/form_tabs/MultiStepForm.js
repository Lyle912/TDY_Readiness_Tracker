import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Names from "./Names";
import Expiration from "./Expiration";
import Vaccine from "./Vaccine";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
  { id: "names" },
  { id: "expiration" },
  { id: "vaccine" },
  { id: "review" },
  { id: "submit" }
];

export default function MultiStepForm ({ images }){
  const [formData, setForm] = useForm({});
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { formData, setForm, navigation };

  switch (id) {
    case "names":
      return <Names {...props} />;
    case "expiration":
      return <Expiration {...props} />;
    case "vaccine":
      return <Vaccine {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};