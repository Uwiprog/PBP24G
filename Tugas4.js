const film = {
    sutradara: "Christoper Nolan",
    film: "Interstellar",
    tahunRilis: 2014,
    genre: ["Sci-Fi","Adventure","Drama"],

    TampilkanDetail: function(){
        return "\n" + "Judul: " + this.film + "\n" + "Tahun Rilis: " + 
        this.tahunRilis + "\n" + "Genre Film: " + this.genre;        
    }
};
console.log("Nama sutradara: ", film.sutradara);
console.log("Genre Film: ", film.genre);
console.log("Detail: ",film.TampilkanDetail());