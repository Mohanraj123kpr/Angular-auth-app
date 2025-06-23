import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() label = 'Click Me';
  @Input() buttonClass = 'primary';
  @Input() isSocial = false;
  @Input() icon?: 'facebook' | 'google';
  @Input() provider?: string;

  @Output() onClick = new EventEmitter<Event>();

}
