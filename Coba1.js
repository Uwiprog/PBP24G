const userProfile = {
  // Properti dan Nilai
  firstName: "Budi",
  lastName: "Santoso",
  age: 30,
  email: "budi.santoso@example.com",
  isActive: true,

  // Metode (Function sebagai properti)
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },

  // Metode menggunakan shorthand ES6
  greet() {
    return "Halo, saya " + this.getFullName() + ".";
  }
};
userProfile.NoHp = "082399227567";

userProfile.firstName = "Roni"
userProfile.lastName = "sahroni"
userProfile.email = "ronisahron@gmail.com"
console.log(userProfile.getFullName());
console.log("Usia:", userProfile.age);
console.log("emal:", userProfile.email);
console.log("No Hape:",userProfile.NoHp)
console.log("status aktif:", userProfile['isActive']);
console.log(userProfile.greet());
delete userProfile.lastName;
console.log(userProfile)

/*function buatPemain(nama, skor) {
    return {
        nama,
        skor,
        tambahSkor(poin) {
            this.skor += poin;
        }
    };
}

const pemain1 = buatPemain("Doni", 50);
pemain1.tambahSkor(10);
console.log(pemain1.skor)*/