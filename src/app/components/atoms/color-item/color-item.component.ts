import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss'],
})
export class ColorItemComponent {
  @Input() name: string = '';
  @Input() codeHexa: string = '';

  activateHover: boolean = false;
  currentHexa: string = '';

  ngOnInit(): void {
    this.currentHexa = this.codeHexa;
  }

  onHover() {
    console.log('activado');
    this.activateHover = true;
    this.currentHexa = this.codeHexa;
  }

  onLeave() {
    console.log('desactivado');
    this.activateHover = false;
  }

  async onClick() {
    await navigator.clipboard.writeText(this.codeHexa);

    this.currentHexa = 'Copied';
    console.log('copiado');
  }
}
