import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contactForm           : FormGroup;
    sub                   : any;
    successMessageShowing : boolean = false;
    errorMessageShowing   : boolean = false;
    attemptedSave         : boolean = false;

    constructor(
        private emailService: EmailService
        ) { }

    ngOnInit() {
        //Initialize contact form.
        this.contactForm = new FormGroup({
            name        : new FormControl('', [ Validators.required ]),
            email       : new FormControl('', [ Validators.required, Validators.email ]),
            phoneNumber : new FormControl('', [ Validators.required ]),
            message     : new FormControl('', [ Validators.required ]),
        });
    }

    onSubmit() {
        this.attemptedSave = true;
        setTimeout(() => {
            this.attemptedSave = false;
        },3000);

        let nameControl         : AbstractControl   = this.contactForm.controls.name;
        let emailControl        : AbstractControl   = this.contactForm.controls.email;
        let phoneNumberControl  : AbstractControl   = this.contactForm.controls.phoneNumber;
        let messageControl      : AbstractControl   = this.contactForm.controls.message;

        if(this.contactForm.valid){
            let to      : string = 'trey.a.hope@gmail.com';//TODO: CHANGE TO ERIN'S EMAIL WHEN PROJECT DONE.
            let subject : string = 'New Contact - ' + nameControl.value;
            let from    : string = emailControl.value;
            let message : string = messageControl.value;
            this.emailService.sendEmail(to, subject, from, message).subscribe(
                res => {
                    this.successMessageShowing = true;
                    setTimeout(() => {
                        this.successMessageShowing = false;
                    },3000);
                },
                error => {
                    this.errorMessageShowing = true;
                    setTimeout(() => {
                        this.errorMessageShowing = false;
                    },3000);
                } 
            );
        }
    }

}
