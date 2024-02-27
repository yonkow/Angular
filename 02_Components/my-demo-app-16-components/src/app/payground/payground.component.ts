import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payground',
  templateUrl: './payground.component.html',
  styleUrls: ['./payground.component.css']
})
export class PaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();

  isToggle = false
  imgUrl = 'https://t3.ftcdn.net/jpg/02/75/98/22/360_F_275982235_xzqfvupzoy03oAiWf7iFTpTcpvVaR4TF.jpg'
  greenBackground = 'background-green'

  ngOnInit() {
    console.log('Compopnent Created!');
  }

  ngAfterViewInit() {
    console.log('After Init!');
  }

  ngOnDestroy() {
    // cleanup on stuff!!
    console.log('On destroy!');
  }

  ngDoCheck() {
    if (this.isToggle == true) {
      console.log({ isToggle: this.isToggle });
    }
  }

  handleClick() {
    this.isToggle = !this.isToggle

    console.log('clicked!');
  }

  handleInput(usernameValue: string) {
    console.log('username: ', usernameValue);
    console.log(this.colorValue);
    this.onTestOutput.emit(usernameValue)
  }
}
