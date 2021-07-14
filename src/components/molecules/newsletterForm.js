import React from "react";
import styled from "styled-components";
import Button from "atoms/button";
import { Subheading } from "atoms/heading";
import Input from "atoms/input";
import Checkbox from "atoms/checkbox";

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
    </form>
  );
};

export default NewsletterForm;
