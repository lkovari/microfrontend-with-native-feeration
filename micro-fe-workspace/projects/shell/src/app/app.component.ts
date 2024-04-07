import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularVersionComponent } from 'shared-lib';


@Component({
  selector: 'app-shell-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgbModule, AngularVersionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Micro Frontend Shell (host)';
}
