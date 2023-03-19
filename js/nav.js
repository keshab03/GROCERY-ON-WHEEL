const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <style>@import 'css/nav.css';</style>
        <div class="nav">
            <img src="img/dark-logo.png" style="width: 25%; class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" onkeyup="search_product()" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="signup.html"><img src="img/user.png" alt=""></a>
                <a href="cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Staples</a></li>
            <li class="link-item"><a href="#" class="link">Dairy & Bakery</a></li>
            <li class="link-item"><a href="#" class="link">Fruits & Vegetables</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
        
    `;
}

createNav();

function search_product() {
    let input = document.getElementById('search-box').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('product-brand');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}