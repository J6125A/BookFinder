function findBook(){
 var userSearch = document.getElementById('userInput').value;
 var bookResult = document.getElementById('result');

 bookResult.innerHTML = "";

 $.ajax({
 	 type: "GET",
 	 url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
 	 dataType: 'JSON',
 	 success: function(book){
       console.log(book);
       for(var i = 0; book.items.length; i++){
          var wrapperDiv = document.createElement('div');
          wrapperDiv.className = 'media';
          //create img ellement for images
       	  var image = document.createElement('img');
          image.className = '';
       	  image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
          //create div element with call of media - body
          var div  = document.createElement('div');
          div.className = 'media-body';
          //create header for body
          var header = document.createElement('h4');
          header.className = 'nextto1';
          header.innerHTML = 'title : ' + book.items[i].volumeInfo.title;  
          var author = document.createElement('h5');
          author.className = 'nextto2';
          author.innerHTML = 'Author : ' + book.items[i].volumeInfo.authors;       
          var desc = document.createElement('p');
          desc.className='';
          desc.innerHTML = 'Description: ' + book.items[i].volumeInfo.description;
          //append header to body
          
          wrapperDiv.appendChild(image);
          bookResult.appendChild(header);
          bookResult.appendChild(author);
          wrapperDiv.appendChild(div);
          
          bookResult.appendChild(wrapperDiv);
          bookResult.appendChild(desc);
          //create line to seperate sections
          var line = document.createElement('hr');
          bookResult.appendChild(line);


    
       
    
    }
 	 }
 })
}