const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "Aliya" && password == "242424"){
      alert('benar')
      document.body.innerHTML="<h1>BERHASIL LOGIN!</h1>"
    }else{
      alert('password salah\nmasukkan\nusername: Aliya\npassword: 242424')
    }
  })