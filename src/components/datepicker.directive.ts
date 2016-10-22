import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { ModalController } from "ionic-angular";
import { DatePickerComponent } from './datepicker.component';
//was a directive changed to component
// TO DO: FIGURE OUT HOW TO MAKE THIS A DIRECTIVE
@Directive({
    selector: '[iondatepicker]',
    host: {
        '(click)': 'openModal()',
    }
})

export class DatePickerDirective {

    public static config: any;
    @Input('date') private date: Date;
    @Input('min') private min: Date;
    @Input('max') private max: Date;
    @Output('onchange') private callback: EventEmitter<string | Date> = new EventEmitter<string | Date>();
    @Input('modal') private modalCtrl: ModalController;
    @Input('hclasses') private hClasses: any[] = [];
    @Input('dclasses') private dClasses: any[] = [];

    constructor() {
    }
    openModal() {
        DatePickerDirective.config =
            {
                date: this.date,
                min: this.min,
                max: this.min,
                callback: this.callback,
                headerClasses: this.hClasses,
                dateClasses: this.dClasses
            }
        let modal = this.modalCtrl.create(DatePickerComponent
        );
        DatePickerDirective.config.modal = modal;
        modal.present();

    }
}