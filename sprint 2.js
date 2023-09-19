//* week 3 day 2 Sprint Material Part 1

//* question 1

function books(title, author,msrp,genre,numberOfPages,description){
    return{
        title:title,
        author:author,
        msrp:msrp,
        genre:genre,
        numberOfPages:numberOfPages,
        description:description
    }
}
var book1=books('solo leveling','kimjon','240','webtoon','200','fantasystory')
var book2=books('wind breaker','yonjimhoo','300','sports','460','sportstory')
var book3=books('gosu','samkimhojo','270','shoneen','350','senenstory') 

console.log(book1)
console.log(book2)

//* question 3

function book(title,author,){
    return{
        title:title,
        author:author
        
    }
}
var book4=book('Harry Potter and the Sorcerers Stone','J.K. Rowling')
var book5=book('Romeo and Juliet','William Shakespeare')
var book6=book('Structure and Interpretation of Computer Programs','Gerald Jay Sussman, Hal Abelson')
  console.log(book4.title)
  console.log(book6.author)
    
    //* question 2

    var book7=book('Harry Potter and the Sorcerers Stone','J.K. Rowling')
    var book8=book('Romeo and Juliet','William Shakespeare')
    var book9=book('Structure and Interpretation of Computer Programs','Gerald Jay Sussman, Hal Abelson')

    console.log(book9.title)
    console.log(book8.title)

    //* question 4

    var sorcerersStone = {
            title:'Harry Potter and the Sorcerers Stone',
            author:'J.K. Rowling',
            msrp:24.99,
            genre:'Fantasy',
           
        }
     function displayBook(book){
        return book.title+ " " + 'by'+ " " +book.author+ " " +'--'+ " " +book.genre+ " " +','+ " "+ book.msrp+'$'
     }
     console.log(displayBook(sorcerersStone));

     //* question 5 

     var books1 = [
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling",
          genre: "Fantasy",
          
        },
        {
          title: "Romeo and Juliet",
          author: "William Shakespeare",
          genre: "Romance",
      
        },
        {
          title: "Structure and Interpretation of Computer Programs",
          authors: ["Gerald Jay Sussman", "Hal Abelson"],
          genre: "Computer Science",
          
        },
        
      ];
      
      console.log(books1[0]); 
      console.log(books1[1]);
      console.log(books1[2]); 

      //* question 6 

      function displayBooks(books) {
        var booksList = '';
      
        for (var i = 0; i < books.length; i++) {
          var book = books[i];
          var bookString = `${i + 1}. ${displayBook(book)}`; 
      
      
          booksList += bookString;
      
          
          if (i < books.length - 1) {
            booksList += '\n';
          }
        }
      
        return booksList;
      }
      
      
      var books = [
        { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', genre: 'Fantasy',msrp:24.99+'$' },
        { title: 'Snow Crash', author: 'Neal Stephenson', genre:'science fiction ',msrp:44.85+'$' },
        { title: 'Romeo and Juliet', author: 'William Snakespeare',genre:'ramance',msrp:47.57+'$'}
        
      ];
      
      console.log(displayBooks(books));

      //* more practice question 2
      var movie = {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        duration: 142,
        releaseDate: "September 23, 1994",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        story:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
     
      }
       console.log(movie)
    //* question 2

     var movie1={
        title:"one piece",
        director:"Oda",
        duration:"1h50min",
        ReleaseDate:"15/5/2020",
        ActorsOrActresses:"luffy,nami,zoro,sanji",
        Studio:"mappa",
        Rating:"9/10",

     }

    //* question 3

    function movies(title, director,duration,ReleaseDate,ActorsOrActresses,Studio,Rating){
        return{
            title:title,
            director:director,
            duration:duration,
            ReleaseDate:ReleaseDate,
            ActorsOrActresses:ActorsOrActresses,
            Studio:Studio,
            Rating:Rating,
        }
    }
    var movie1=movies('one piece','Oda','1h50min','15/5/2020','luffy,nami,zoro,sanji','mappa','9/10')
    var movie2=movies('fairy tal','Hiro Mashima','1h60min','16/7/2021','natsu,lucy,grey','mappa','8.5/10')
    var movie3=movies('dragon ball z','Alias Tori','1h53min','21/11/2016','goku,gohan,picolo','mappa','9.5/10') 
    var movie4=movies('your name','Makoto Shinkai','2h30min','14/7/2020','Ryunosuke Kamiki,Kamishiraishi ','mappa','8.77')
    var movie5=movies('silent voice','Miyo Erino','3h','24/10/2017','Shōya Ishida,Shōko Nishimiya,Yuzuru Nishimiya','mappa','9.85')

    console.log(movie1)
    console.log(movie2)
    console.log(movie3)
    console.log(movie4)
    console.log(movie5)



     


      
      
     


