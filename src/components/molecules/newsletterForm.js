import React from "react";
import Button from "atoms/button";
import Checkbox from "atoms/checkbox";
import Input from "atoms/input";

const NewsletterForm = () => {
  return (
    <form>
      <Checkbox
        text="Wyrażam zgodę na przetwarzanie moich danych przez Navigator Blog"
        aria-required="true"
        required
      />
      <Checkbox
        text="Wyrażam zgodę na otrzymywanie treści na podany poniżej adres email"
        aria-required="true"
        required
      />
      <Input text="Twój email" required />
      <Button text="Zapisz się" />
    </form>
  );
};

export default NewsletterForm;
