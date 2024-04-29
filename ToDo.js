var jumlahTugas = []


var algoTodo = function (tambah) {

    if ( jumlahTugas.length == 0 ) {

        console.log('anda telah menambahkan tugas ' + tambah + 'tugas ke ' + (jumlahTugas.length + 1))
        jumlahTugas.push(tambah)

        return tambah

    } else {

        for( var i = 0 ; i < jumlahTugas.length ; i++ ) {
             
            if (jumlahTugas.length == 10 ) {

                jumlahTugas = jumlahTugas.length - 1
                console.log('maksimal tugas == 10')
                return tambah

            } else if (jumlahTugas.includes(tambah)) {


                console.log('tugas sudah ada')
                return tambah

            } else {

                console.log('anda telah menambahkan tugas ' + tambah  + ' tugas ke ' + (jumlahTugas.length + 1))
                jumlahTugas.push(tambah)
                
                return tambah
            
            }

        }
    }


}

var hapusTugas = function(hapus) {

    if ( jumlahTugas.length === 0 ) {

        console.log('maaf tidak ada tugas')
        return  hapus

    } else {

                  
       for( var i = 0 ; i < jumlahTugas.length ; i++ ) {

        if ( jumlahTugas[i] == hapus)  {
            
            jumlahTugas[i] = undefined
            return hapus

        } else {

            if( i == jumlahTugas.length - 1) {

                console.log('maaf tugas yang ingin anda hapus tidak ada')
                return hapus

            }
        }

    
    }

}


}