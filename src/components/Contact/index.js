import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
