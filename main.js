
    let button = document.querySelector(".input-submit");
    let kataHasil1 = document.querySelector("#hasilKata1");
    let kataHasil2 = document.querySelector("#hasilKata2");
    let kataHasil3 = document.querySelector("#hasilKata3");
    let kataHasil4 = document.querySelector("#hasilKata4");

    button.addEventListener("click", () => {
    let data = document.querySelector("#input1").value;
    console.log("Data = ", data);
    let fibonacci1 = document.querySelector("#task1");
    let ganjil1 = document.querySelector("#task2");
    let genap1 = document.querySelector("#task3");
    let angkaHuruf1 = document.querySelector("#task4");

    let bilangan = {};
    let hasil;

    if (fibonacci1.checked) {
        hasil = document.querySelector("#task1").value;
        kataHasil1.textContent = hurufVokal2(
            data,
            bilanganFibonacci(data),
            hasil
        );
    } else if (ganjil1.checked) {
        hasil = document.querySelector("#task2").value;
        kataHasil2.textContent = hurufVokal2(data, bilanganGanjil(data), hasil);
    } else if (genap1.checked) {
        hasil = document.querySelector("#task3").value;
        kataHasil3.textContent = hurufVokal2(data, bilanganGenap(data), hasil);
    } else if (angkaHuruf1.checked) {
        hasil = document.querySelector("#task4").value;
        kataHasil4.textContent = hurufVokal2(
        data,
        ubahAngka1(data),
        hasil,
        karakter1(data)
        );
    }

    console.log(bilangan);

    function karakter(data) {
        return data.trim().split(" ").join("").length;
    }

    function totalHurufVokal(data) {
        let vokal = 'aiueo';
        let hitung = 0;

        for (let i = 0; i < data.length; i++) {
        if (vokal.includes(data[i])) {
            hitung++;
        }
        }
        return hitung;
    }

    function bilanganFibonacci(data) {
        
        let num = [0];
        let n1 = 0;
        let n2 = 1;
        let angka3 = 0;
        let angka4 = totalHurufVokal(data);

        for (let i = 0; i <= angka4 - 2; i++) {
        angka3 = n2 + n1;
        n2 = n1;
        n1 = angka3;
        num.push(angka3);
        }
        bilangan.urutanAngkaFibonacci = num;
        return bilangan;
    }

    function bilanganGanjil(data) {
        let angka4 = totalHurufVokal(data);
        let angkaGanjil = [];

        for (let i = 1; i <= 2 * angka4; i++) {
        if (i % 2 != 0) {
            angkaGanjil.push(i);
        }
        }
        bilangan.urutanBilanganGanjil = angkaGanjil;
        return bilangan;
    }

    function bilanganGenap(data) {
        let angka4 = totalHurufVokal(data);
        let angkaGenap = [];

        for (let i = 2; i <= 2 * angka4; i++) {
        if (i % 2 == 0) {
            angkaGenap.push(i);
        }
        }
        bilangan.urutanBilanganGenap = angkaGenap;
        return bilangan;
    }


    function ubahAngka1(data) {
        let totalAngka1 = totalHurufVokal(data) / 2;
        let urutanAngka1 = [];

        for (let i = 1; i <= totalAngka1; i++) {
        urutanAngka1.push(i);
        }
        bilangan.urutanAngka1 = urutanAngka1;
        return bilangan;
    }
    function karakter1(data) {
        let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
        let urutanHuruf1 = [];
        let totalAngka1 = totalHurufVokal(data) / 2;

        for (let i = 0; i <= totalAngka1 - 1; i++) {
        urutanHuruf1.push(alphabet[i]);
        }
        bilangan.urutanHuruf1 = urutanHuruf1;
        return bilangan;
    }

    function hurufVokal2(data, nomorUrutan, hasil, urutanAlpabet) {
        let vokal = "aiueo";
        let angka6 = data.split("");
        let hitung = 0;
        let hitungAngkaHuruf2 = 0;
        let angka7 = 0;
        let angka8 = 0;

        for (let i = 0; i < angka6.length; i++) {
        if (vokal.includes(angka6[i])) {
            // if (hasil == "fibonacci") {
            if (hasil == "taskbaru1") {
            angka6[i] = nomorUrutan.urutanAngkaFibonacci[hitung];
            nomorUrutan.urutanAngkaFibonacci;
            hitung++;
            // } else if (hasil == "ganjil") {
            } else if (hasil == "taskbaru2") {
            angka6[i] = nomorUrutan.urutanBilanganGanjil[hitung];
            hitung++;
            // } else if (hasil == "genap") {
            } else if (hasil == "taskbaru3") {
            angka6[i] = nomorUrutan.urutanBilanganGenap[hitung];
            hitung++;
            // } else if (hasil == "angka") {
            } else if (hasil == "taskbaru4") {
            if (hitungAngkaHuruf2 % 2 == 0) {
                angka6[i] = nomorUrutan.urutanAngka1[angka7];
                angka7++;
            } else {
                angka6[i] = urutanAlpabet.urutanHuruf1[angka8];
                angka8++;
            }
            hitungAngkaHuruf2++;
            }
        }
        }

        return angka6.join("");
    }
    });