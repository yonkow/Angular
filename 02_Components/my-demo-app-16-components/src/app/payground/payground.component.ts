import { Component } from '@angular/core';

@Component({
  selector: 'app-payground',
  templateUrl: './payground.component.html',
  styleUrls: ['./payground.component.css']
})
export class PaygroundComponent {
  isToggle = false
  imgUrl = 'https://t3.ftcdn.net/jpg/02/75/98/22/360_F_275982235_xzqfvupzoy03oAiWf7iFTpTcpvVaR4TF.jpg'
  greenBackground = 'background-green'

  handleClick() {
    this.isToggle = !this.isToggle

    console.log('clicked!');
    console.log(this.isToggle);

  }

  handleInput(usernameValue: string) {
    console.log('username: ', usernameValue);
    usernameValue = '';
  }
}
