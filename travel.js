if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {

    // modal
    var mod = document.querySelectorAll('.modal');
    M.Modal.init(mod);
    //search
    var auto = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(auto, {
        data: {
            "Pantai Kuta": 'image/1.jpg',
            "Air Panas": 'image/2.jpg',
            "Bukit": 'image/3.jpg',
            "Seminyak": 'image/3.jpg',
            "Bedugul": 'image/2.jpg',
            "Padangbai": 'image/1.jpg'
        },
        onAutocomplete: search
    });
    //side nav
    var side = document.querySelectorAll('.sidenav');
    M.Sidenav.init(side);
    //button
    var t = document.getElementsByClassName("wishlist");

    for (let i = 0; i < t.length; i++) {
        var semuaButtonWishlist = t[i];
        semuaButtonWishlist.addEventListener("click", wishlist);
    }
    //Sort By
    var s = document.getElementsByClassName("browser-default");
    for (let i = 0; i < s.length; i++) {
        var semuaElementSelect = s[i];
        semuaElementSelect.addEventListener("change", sortByCity);
    }

    var btnKirim = document.getElementsByClassName("kirim")[0]
    try {
        btnKirim.addEventListener("click", validasi)
    } catch (error) {
        console.log(error)
    }


}


function search(e) {

    var b = document.getElementsByClassName("card-title")


    for (let i = 0; i < b.length; i++) {
        var displayBlock = b[i].parentElement.parentElement.parentElement

        displayBlock.style.display = "block"

    }


    for (let i = 0; i < b.length; i++) {
        var namaKota = b[i]
        if (e != b[i].innerText) {
            var card = namaKota.parentElement.parentElement.parentElement
            card.style.display = "none"
        }

    }

}

function wishlist(e) {

    var buttonWishlist = e.target
    var card = buttonWishlist.parentElement
    var totalExpanse = card.getElementsByTagName("p")[0].innerText
    updateTotal(totalExpanse)
}

function validasi() {
    var nama = document.getElementById("nama")
    var email = document.getElementById("email")
    var pesan = document.getElementById("pesan")
    var num = /^[0-9]+$/;

    var emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

    //check nama
    if (nama.value == "") {
        M.toast({
            html: 'Nama Tidak Boleh Kosong',
            classes: 'rounded'
        });
    } else if (nama.value.match(num)) {
        M.toast({
            html: 'Nama Tidak Boleh Menggunakan Angka',
            classes: 'rounded'
        });
    }
    //check email
    if (email.value == "") {
        M.toast({
            html: 'Email Tidak Boleh Kosong.',
            classes: 'rounded'
        });
    } else if (emailTest.test(email.value) == false) {
        M.toast({
            html: 'Format Email Salah.',
            classes: 'rounded'
        });
    }

    //
    if (pesan.value == "") {
        M.toast({
            html: 'Pesan Tidak Boleh Kosong.',
            classes: 'rounded'
        });
    }

}

function updateTotal(harga) {
    var harga = parseFloat(harga.replace("Total Expanse : ", ""));
    var totalElement = document.getElementsByClassName("total")

    for (let i = 0; i < totalElement.length; i++) {
        var totalHarga = parseFloat(totalElement[i].value.replace("Total : ", ""));
        var jumlah = totalHarga + harga;
        totalElement[i].value = "Total : " + jumlah
    }



}



function sortByCity(e) {
    var sort = e.target;
    var selectSort = sort.value;

    var ambilElement = document.getElementsByClassName("kota")

    for (let i = 0; i < ambilElement.length; i++) {
        var displayBlock = ambilElement[i].parentElement.parentElement.parentElement

        displayBlock.style.display = "block"

    }


    for (let i = 0; i < ambilElement.length; i++) {
        var namaKota = ambilElement[i]
        if (selectSort != ambilElement[i].innerText) {
            var card = namaKota.parentElement.parentElement.parentElement
            card.style.display = "none"
        }

    }

}