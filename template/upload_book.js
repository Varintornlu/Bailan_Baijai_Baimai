async function upload(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const booktype = document.getElementById('booktype').value;
    const pricecoin = document.getElementById('pricecoin').value;
    const intro = document.getElementById('intro').value;
    const content = document.getElementById('content').value;
    const account_id = localStorage.getItem('account_id');
    console.log("Name:", name);
    console.log("Booktype:", booktype);
    console.log("Pricecoin:", pricecoin);
    console.log("Intro:", intro);
    console.log("Content:",content);
    console.log(account_id)
    
    try {
        const response = await axios.post(`http://127.0.0.1:8000/upload_book?writer_id=${account_id}`, {
            "name": name,
            "book_type": booktype,
            "price_coin": pricecoin,
            "intro": intro,
            "content": content
        });
        console.log("Response:", response);
        alert(response.data.status);
    } catch (error) {
        console.error("Error:", error);
        alert(error.response ? error.response.data.detail : 'An error occurred.');
    }
}
