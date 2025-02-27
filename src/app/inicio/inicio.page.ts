import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //3sec
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

}
