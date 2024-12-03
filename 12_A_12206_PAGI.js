console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH")
console.log('_'.repeat(50));

function validateData(studentData) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (!studentData.nama || !studentData.umur || !studentData.ktp ) {
                    reject (new Error ("An error occured : Invalid data"));
                } else if (studentData.umur < 17) {
                    reject (new Error("An error occured : Student is too young"));
                } else if (studentData.ktp.length !== 16) {
                    reject (new Error("An error occured : Invalid KTP number"));
                } else {
                    resolve (`Student ${studentData.nama} has been successfully registered`);
                }
            }, 5000);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    })
}


async function processData(studentData) {
    try {
        const result = await validateData(studentData);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
       

processData({nama: "", umur: 22, ktp: "1234567890123456"});
processData({nama: "Fahmy", umur: 16, ktp: "1234567890123456"});
processData({nama: "Kevin", umur: 20, ktp: "12345"});
processData({nama: "Evi", umur: 19, ktp: "2317122061234567"});
processData({nama: "Kay", umur: 22, ktp: "1122334455667788"});  