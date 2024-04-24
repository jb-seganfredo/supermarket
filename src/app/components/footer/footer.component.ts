import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbar, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
