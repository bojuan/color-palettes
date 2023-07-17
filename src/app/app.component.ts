import { Component } from '@angular/core';
import { ColorList } from '../interfaces/color';
import { dataColor } from 'src/utils/constants/data-fake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorPalettes: ColorList[] = dataColor;
}
