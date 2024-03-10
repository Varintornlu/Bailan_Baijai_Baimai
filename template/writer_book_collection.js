async function search_by_name(event) {
    event.preventDefault();
  
    console.log("in search_by_name");
    const input = document.getElementById("search_by_name").value;
    const content = document.getElementById("content");
    console.log(input);
  
    const response = await axios.get(
      `http://127.0.0.1:8000/search_book_by_name?name=${input}`
    );
  
    console.log(response.data);
  
    const book_list = response.data.book_list;
    console.log(book_list);
    displayBookList(book_list);
  }
  
  document
    .getElementById("searchButton")
    .addEventListener("click", search_by_name);
  
  function displayBookList(bookList) {
    const content = document.getElementById("content");
    content.innerHTML = "";
  
    const divRow = document.createElement("div");
    divRow.classList.add(
      "row",
      "row-cols-1",
      "row-cols-md-3",
      "g-4",
      "col-md-10",
      "m-auto"
    );
  
    bookList.forEach((book) => {
      const divCol = document.createElement("div");
      divCol.classList.add("col");
  
      const divCard = document.createElement("div");
      divCard.classList.add("card");
  
      const a = document.createElement("a");
      a.href = `book_info.html?id=${book.id}`;
  
      const img = document.createElement("img");
      img.src = `images/${book.book_name}.jpg`;
      img.classList.add("card-img-top");
      img.alt = "Book Cover";
  
      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");
  
      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = book.book_name;
  
      const pWriter = document.createElement("p");
      pWriter.classList.add("card-text");
      pWriter.textContent = `Writer: ${book.writer_name}`;
  
      const pRating = document.createElement("p");
      pRating.classList.add("card-text");
      pRating.textContent = `Rating: ${book.rating}`;
  
      const aPrice = document.createElement("a");
      aPrice.href = "#";
      aPrice.classList.add("btn", "btn-info");
      aPrice.dataset.bsToggle = "tooltip";
      aPrice.dataset.bsPlacement = "right";
      aPrice.title = "Price";
      aPrice.textContent = "Price";
  
      // Set onclick event to the card title to navigate to book_info.html
      h5.onclick = function () {
        window.location.href = `book_info.html?id=${book.id}`;
      };
  
      a.appendChild(img);
      divCardBody.appendChild(h5);
      divCardBody.appendChild(pWriter);
      divCardBody.appendChild(pRating);
      divCardBody.appendChild(aPrice);
      divCard.appendChild(a);
      divCard.appendChild(divCardBody);
      divCol.appendChild(divCard);
  
      divRow.appendChild(divCol);
    });
  
    content.appendChild(divRow);
  }
  
  async function get_wr_book_collection(id) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/show_book_collection_of_writer?writer_id=${id}`
      );
      const bookcollect = response.data["Book's list"];
      displayBookCollect(bookcollect);
    } catch (error) {
      console.error("Error fetching book collection:", error);
      // Handle the error, display a message, or redirect the user as needed.
    }
  }
  
  function displayBookCollect(bookcollect) {
    const BookCol = document.getElementById("BookCol");
  
    // Clear previous content in BookCol
    BookCol.innerHTML = "";
  
    // Check if the array has at least one element
    if (bookcollect && bookcollect.length > 0) {
      for (let i = 0; i < bookcollect.length; i++) {
        const currentBook = bookcollect[i];
  
        // Create a new div for each book
        const bookDiv = document.createElement("div");
  
        // Create a new image element for each book cover
        const bookCover = document.createElement("img");
        bookCover.src = `images/${currentBook.book_name}.jpg`;
        bookCover.alt = currentBook.book_name;
  
        // Append the bookCover to the bookDiv
        bookDiv.appendChild(bookCover);
  
        // Append the text content to the bookDiv
        bookDiv.innerHTML += `
              <h1>${currentBook.book_name}</h1>
              <p>Writer: ${currentBook.writer_name}</p>
              <p>Type: ${currentBook.type_book}</p>
              <p>Introduction: ${currentBook.intro}</p>
              <p>Rating: ${currentBook.rating}</p>
              
          `;
  
        // Append the bookDiv to BookCol
        BookCol.appendChild(bookDiv);
      }
    } else {
      console.error("No book data found.");
      // Handle the case where no book data is available, e.g., display a message or redirect the user.
    }
  }
  
  const readerid = 7;
  get_wr_book_collection(readerid);
  //   displayBookCollect(response);
  