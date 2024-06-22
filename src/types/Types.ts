import { FormEvent } from "react";

export interface CommonChangeEvent {
    target: {
        name: string;
        value: string;
    };
}
export interface CustomFormEvent extends FormEvent<HTMLFormElement> {
    customProperty: string;
}

export interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}