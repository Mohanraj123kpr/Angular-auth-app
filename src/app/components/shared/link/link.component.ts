import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-link',
  imports: [RouterLink, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() routerLink: string | any[] = '';
}
