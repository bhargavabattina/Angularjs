import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SabpaisaSdk, SabPaisaSdkProps } from 'src/assets/SabpaisaSdk';

const containerElementName = 'customReactComponentContainer';

@Component({
    selector: 'sabpaisa-wrapper',
    template: `<span #${containerElementName}></span>`,
    encapsulation: ViewEncapsulation.None,
})

export class SabpaisaWrapperComponent implements OnDestroy {
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
    @Input() private paymentData: SabPaisaSdkProps | any = null;

    constructor() {
    }

    initPayment(data: SabPaisaSdkProps) {
        this.paymentData = data;
        this.render();
        const btn: any = document.getElementById('submitSabPaisaBtn');
        btn.click();
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    private render() {
        if (this.paymentData) {
            return ReactDOM.render(
                <React.StrictMode>
                    <div>
                        <SabpaisaSdk txtnId={this.paymentData.txtnId} sabPaisaUrl={this.paymentData.sabPaisaUrl} clientCode={this.paymentData.clientCode} transUserPassword={this.paymentData.transUserPassword} transUserName={this.paymentData.transUserName} callbackUrl={this.paymentData.callbackUrl} isOpen={this.paymentData.isOpen} authkey={this.paymentData.authkey} authiv={this.paymentData.authiv} payerName={this.paymentData.payerName} payerEmail={this.paymentData.payerEmail} payerMobile={this.paymentData.payerMobile} payerAddress={this.paymentData.payerAddress} amount={this.paymentData.amount}     udf1= {this.paymentData.udf1} udf2= {this.paymentData.udf2} udf3= {this.paymentData.udf3} udf4= {this.paymentData.udf4} udf5= {this.paymentData.udf5} udf6= {this.paymentData.udf6} udf7= {this.paymentData.udf6} udf8= {this.paymentData.udf8} udf9= {this.paymentData.udf9} udf10= {this.paymentData.udf10} udf11= {this.paymentData.udf11} udf12= {this.paymentData.udf12} udf13= {this.paymentData.udf13} udf14= {this.paymentData.udf14} udf15= {this.paymentData.udf15} udf16= {this.paymentData.udf16} udf17= {this.paymentData.udf17} udf18= {this.paymentData.udf18} udf19= {this.paymentData.udf19} udf20= {this.paymentData.udf20} channelId= {this.paymentData.channelId} programId= {this.paymentData.programId} mcc= {this.paymentData.mcc}  />
                    </div>
                </React.StrictMode>
                , this.containerRef.nativeElement);
        }
    }
}