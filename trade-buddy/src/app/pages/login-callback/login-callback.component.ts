import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdApiService } from 'src/app/services/td-api.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private tdApiSvc: TdApiService,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      console.log('params are: ', params)
      console.log('got the code: ', params.code)

      await this.tdApiSvc.setCallbackCode(params.code)

      this.router.navigateByUrl('')

    });
  }

}
