import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() {}
}
