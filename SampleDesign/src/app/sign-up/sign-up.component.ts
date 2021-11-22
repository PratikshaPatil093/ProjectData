import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
  });
  
  
  $('.login-reg-panel input[type="radio"]').on('change', function() {
      if($('#log-login-show').is(':checked')) {
          $('.register-info-box').fadeOut(); 
          $('.login-info-box').fadeIn();
          
          $('.white-panel').addClass('right-log');
          $('.register-show').addClass('show-log-panel');
          $('.login-show').removeClass('show-log-panel');
          
      }
      else if($('#log-reg-show').is(':checked')) {
          $('.register-info-box').fadeIn();
          $('.login-info-box').fadeOut();
          
          $('.white-panel').removeClass('right-log');
          
          $('.login-show').addClass('show-log-panel');
          $('.register-show').removeClass('show-log-panel');
      }
  });
}
}