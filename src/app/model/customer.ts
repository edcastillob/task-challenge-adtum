export class Customer {
    person: {
        name: string;
        surname: string;
        dni: string;
        dateOfBirth: string;
    };
    reference: string;

    constructor(
        name: string,
        surname: string,
        dni: string,
        dateOfBirth: string,
        reference: string
    ) {
        this.person = {
            name: name,
            surname: surname,
            dni: dni,
            dateOfBirth: dateOfBirth
        };
        this.reference = reference;
    }
}
