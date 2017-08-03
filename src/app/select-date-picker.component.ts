import {Component, Input} from '@angular/core';

@Component({
    selector: 'select-date-picker',
    templateUrl: './select-date-picker.component.html',
    styleUrls: ['./select-date-picker.component.css']
})
export class AppComponent {

    @Input('yearPlaceholder')
    public yearPlaceholder = 'Year';

    @Input('monthPlaceholder')
    public monthPlaceholder = 'Month';

    @Input('dayPlaceholder')
    public dayPlaceholder = 'Day';



    @Input('width')
    public width = 400;

    @Input('minDate')
    public minDate: Date;

    @Input('maxDate')
    public maxDate: Date;

    public days = [];

    @Input('months')
    public months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    public years = [];

    constructor() {

        if (this.minDate && this.maxDate) {
            const minYear = this.minDate.getFullYear();
            const maxYear = this.maxDate.getFullYear();

            for (let i = minYear; i < maxYear; i++) {
                this.years.push(i);
            }
        } else if (this.minDate) {
            const minYear = this.minDate.getFullYear();
            for (let i = minYear; i < minYear + 50; i++) {
                this.years.push(i);
            }
        } else if (this.maxDate) {
            const maxYear = this.maxDate.getFullYear();
            for (let i = maxYear; i < maxYear + 50; i++) {
                this.years.push(i);
            }
        } else {
            const currentDate = new Date;
            const currentYear = currentDate.getFullYear();
            for (let i = currentYear - 100; i <= currentYear; i++) {
                this.years.push(i);
            }
        }

    }


}
