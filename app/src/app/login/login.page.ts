import {​​​​​ Component, OnInit }​​​​​ from '@angular/core';
import {​​​​​ Router, RouterLink }​​​​​ from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user= {​​​​​}​​​​​;
  public url = 'http://localhost:3333/signin'

signin(){​​​​​​​
  axios.post(this.url, this.user)
    .then(res => {​​​​​​​
      axios.defaults.headers.common['Authorization'] = `bearer ${​​​​​​​res.data.token}​​​​​​​`;
      localStorage.setItem('userId', JSON.stringify(res.data.id));
      this.router.navigateByUrl('/home');
    }​​​​​​​)
}​​​​​​​

constructor(private router: Router) {​​​​​ }​​​​​

  ngOnInit() {
    


  }

}
