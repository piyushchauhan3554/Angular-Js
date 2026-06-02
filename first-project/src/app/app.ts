import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCom } from "./components/first-com/first-com";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstCom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
