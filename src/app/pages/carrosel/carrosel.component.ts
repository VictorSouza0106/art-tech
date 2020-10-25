import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})
export class CarroselComponent implements OnInit {

  @Input()
  sender:string = '';
  
  @Output()
  emitter:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.showInput();
    this.emitirDados();
  }

  showInput(){
    console.log(this.sender);
  }

  emitirDados(){
    this.emitter.emit("Bom dia");
  }

}
