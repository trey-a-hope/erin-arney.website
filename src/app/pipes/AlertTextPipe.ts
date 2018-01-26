import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'alerttext'})
export class AlertTextPipe implements PipeTransform {

    transform(value: string, args: string[]): any {
        //TODO: Put errors in json object and find _.find to search within dictionary.
        switch (value) {
            case "name":
                return "Name is required.";
            case "email":
                return "Email is required and must be valid.";
            case "phone-number":
                return "Phone number is required.";
            case "message":
                return "Message is required.";
            case "contact-sent":
                return "Your email has been sent; I will get in touch with you shorlty.";
            case "contact-failed":
                return "Your email could not be sent at this time, please try again later.";
        }
    }
}