
        let jari_jari_luas = document.getElementById("jari_jari_luas")
        let jari_jari_keliling = document.getElementById("jari_jari_keliling")
        let hasil = document.getElementById("hasil")
        let jumlah = document.getElementById("hasill")
        function hitung_luas()
        {
            hasil_luas = 3.14 * parseInt(jari_jari_luas.value) * parseInt(jari_jari_luas.value)
            document.getElementById("luas").innerHTML = hasil_luas
        }
        function hitung_keliling()
        {
            hasil_keliling = 3.14 * parseInt(jari_jari_luas.value) * 2
            document.getElementById("keliling").innerHTML = hasil_keliling
        }