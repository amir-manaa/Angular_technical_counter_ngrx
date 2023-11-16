import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
// Angular material: toolbar
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
