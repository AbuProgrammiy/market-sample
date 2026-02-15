import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {}
