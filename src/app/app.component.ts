import { Component, OnInit } from "@angular/core"
import { CredencialsDTO } from 'models/credencials.dto'
import { AuthService } from "services/auth.service"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  // content = 'Bem vindo ao FindFitness!'

  creds: CredencialsDTO = {
    email: "",
    password: ""
  };

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'))
    },
    error=> {})

  }
}
