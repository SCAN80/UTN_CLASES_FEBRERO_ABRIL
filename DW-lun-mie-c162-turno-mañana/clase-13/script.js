const btnClick = document.getElementById("btn-click")

btnClick.addEventListener("click", () =>{
    Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
})


const btnToast = document.getElementById("btn-toast")

btnToast.addEventListener("click", () =>{
    Toastify({

        text: "This is a toast",
        
        duration: 3000
        
        }).showToast();
})