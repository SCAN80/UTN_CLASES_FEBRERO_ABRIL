const btnSweet = document.getElementById("btn-sweet")
const btnToast = document.getElementById("btn-toast")


btnSweet.addEventListener("click", () =>{
    Swal.fire({
        title: 'Alerta!',
        text: 'Esto es una alerta con una imagen local',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnToast.addEventListener("click", () =>{
    Toastify({
        text: "This is a toast",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
})