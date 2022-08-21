// products slider logic
// mendapatkan element button kiri dan kanan
const btnSlideLeft = document.getElementsByClassName("btn-slider")[0];
const btnSlideRight = document.getElementsByClassName("btn-slider")[1];

// mendapatkan element products
const products = document.getElementsByClassName("products")[0];

// menambahkan event listener pada tombol slide kiri
btnSlideLeft.addEventListener("click", function btnSlideFunc() {
    // menggeser ke kiri hika btnSlideLeft menerima event click
    products.scrollLeft -= 200; 
});

btnSlideRight.addEventListener("click", function btnSlideFunc() {
    // menggeser ke kanan hika btnSlideRight menerima event click
    products.scrollLeft += 200;
});
/* scrollLeft menetapkan berapa banyak scroll dari kiri ke kanan */


// hide and show answer question logic
// inisialisasi variable order
let order = 1;

// inisialisasi resource gambar
const resourceImg = "./resources/images/btnInfo";

// mendapatkan html collection btn-more
const btnMoreInfo = document.getElementsByClassName("btn-more");

for (const btnInfo of btnMoreInfo) {
    btnInfo.addEventListener('click', function btnInfoFunc () {
        // dom traverlsal, mencari element child terakhir
        // dari parent element parent element btn-more
        const answerText = btnInfo.parentElement.parentElement.lastElementChild;
        
        // Menambahkan toggle class ke answerText
        answerText.classList.toggle('visible');

        // jika order sama dengan 1 maka
        // order dinaikan 1 angka
        if(order == 1) 
        {
            order++;
        } else // jika tidak order diubah jadi 1
        {
            order = 1;
        }
              
        // set atribut btn info dengan value resource dan order nya
        btnInfo.setAttribute('src', `${resourceImg}-${order}.svg`);
    });
}
