import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as html2canvas from 'html2canvas';
import {FirebaseService} from "../firebase.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  forms: FormGroup = new FormGroup({});
  step: any;
  valueForm: any;
  h2c: any = html2canvas;

  @ViewChild('detailPage') detailPage!: ElementRef;

  constructor(public formBuilder: FormBuilder, public firebaseService: FirebaseService) {
    this.forms = formBuilder.group({
      nombre: '',
      direccion: '',
      telefono: '',
      email: '',
      calidadDe: '',
      representacionDe: '',
      respuestaEmail: '',
      tiempo: '',
      quepasapqr: '',
      opcionRadicada: '',
      tiempoEntrega: '',
      comoSabeCliente: '',
    });
  }
  ngOnInit(): void {
    this.step = 1;
  }

  guardar(){
    console.log(this.forms.value)
    this.firebaseService.create(this.forms.value).then();
    this.valueForm = this.forms.value;
  }

  changeStep(opt: string) {
    switch (opt) {
      case 'previous': {
        this.step = this.step - 1;
        break;
      }
      case 'next': {
        this.step = this.step + 1;
        break;
      }
      default: {
        this.step = opt;
        break;
      }
    }
  }

  generarPDF() {
    console.log(this.detailPage.nativeElement)
    this.h2c(this.detailPage.nativeElement).then((canvas: any) => {
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'reporte.png';
      a.click();
    });
  }
}
