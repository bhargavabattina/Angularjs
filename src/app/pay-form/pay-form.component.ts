import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SabpaisaWrapperComponent } from '../SabPaisaWrapper';


@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {
  @ViewChild('sabPaisaRef')sabPaisaRef : SabpaisaWrapperComponent | any
  public registerFrm: FormGroup;
  pageModel = {
    pageMessage: null,
    isRegisterSubmited: false,
  }

  config: any = {
    txtnId: Math.random().toString(),
    payerName: '',
    payerEmail: '',
    payerMobile: '',
    payerAddress: '',
    amount: '',
    udf1: "", udf2: "", udf3: "", udf4: "", udf5: "", udf6: "", udf7: "", udf8: "", udf9: "", udf10: "", udf11: "", udf12: "", udf13: "", udf14: "", udf15: "", udf16: "", udf17: "", udf18: "", udf19: "", udf20: "", channelId: "", programId: "", mcc: "",
    isOpen: false,
    clientCode: 'TM001',
    transUserName: 'rajiv.moti_336',
    transUserPassword: 'RIADA_SP336',
    authkey: 'kaY9AIhuJZNvKGp2',
    authiv: 'YN2v8qQcU3rGfA1y',
    sabPaisaUrl: 'https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1',
    callbackUrl: 'http://localhost:4200/response'
  }
  surveyForm: any;
  formBuilder: any;
  

  constructor(
    private fb: FormBuilder,
    ) { 
       /**
     * registration form init
     */
       this.registerFrm = this.fb.group({
        payerName: ['', [Validators.required]],
        payerEmail: ['', [Validators.required,]],
        payerMobile: ['', [Validators.required]],
        payerAddress: ['', [Validators.required]],
        amount: ['', [Validators.required]],
      })
    }

    /**
 * getter for registration form controls
 */
  get regFrm() {
    return this.registerFrm.controls
  }

  /**
   * 
   * The functions used to register the user
   */
  pay() {
    // remove previous api errors if any

    this.pageModel.isRegisterSubmited = true
    if (this.registerFrm.invalid)
      return false;

    // open payment gateway
    this.config = { ...this.config, ...this.registerFrm.value };
    this.config.isOpen = true;
    this.sabPaisaRef.initPayment(this.config);
    // SabpaisaSdkCall(this.config);
    return null;
  }
  ngOnInit(): void {
   
    
    
  }

}
