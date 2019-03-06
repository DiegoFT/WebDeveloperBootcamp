var movies = [
    {title : "In Bruges",
    stars : 5,
    watched: true
    },
    {title : "Frozen",
    stars : 4.5,
    watched: false
    },
    {title : "Mad Max Fury Road",
    stars : 5,
    watched: true
    },
    {title : "Les Miserables",
    stars : 3.5,
    watched: false
    }
]

function showMovies(arr) {
    arr.forEach(function(movie) {
        if(movie.watched === true){
            console.log("You have watched " + movie.title + " - " + movie.stars + " stars.");
        }
        else {
            console.log("You have not seen " + movie.title + " - " + movie.stars + " stars.");
        }
    });
}