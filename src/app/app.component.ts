import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilUsuarioComponent } from "./perfil/perfil-usuario/perfil-usuario.component";
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilUsuarioComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
