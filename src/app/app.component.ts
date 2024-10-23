import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilUsuarioComponent } from "./perfil/perfil-usuario/perfil-usuario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
