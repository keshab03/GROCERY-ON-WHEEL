const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <style>@import 'css/footer.css';</style>
    <div class="footer-content">
        <img src="img/logo2.png" style="border-radius: 25px;" class="logo" alt="">
        <div class="CH"></div>
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">GROCERY</li>
                <li><a href="#" class="footer-link">Staples</a></li>
                <li><a href="#" class="footer-link">Rice</a></li>
                <li><a href="#" class="footer-link">Oil</a></li>
                <li><a href="#" class="footer-link">Brekery</a></li>
                <li><a href="#" class="footer-link">Biscuits</a></li>
                <li><a href="#" class="footer-link">Chocolates</a></li>
                <li><a href="#" class="footer-link">Vegetables</a></li>
                <li><a href="#" class="footer-link">fruits</a></li>
                <li><a href="#" class="footer-link">Acessories</a></li>
                <li><a href="#" class="footer-link">Baby Care</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">About Us</li>
                <li><a href="#" class="footer-link">Contact</a></li>
                <li><a href="#" class="footer-link">Details</a></li>
                <li><a href="#" class="footer-link">History</a></li>
                <li><a href="#" class="footer-link">Ambition</a></li>
                <li><a href="#" class="footer-link">Return</a></li>
                <li><a href="#" class="footer-link">Payment</a></li>
                <li><a href="#" class="footer-link">Data Policy</a></li>
                <li><a href="#" class="footer-link">Delivery</a></li>
                <li><a href="#" class="footer-link">Join Us</a></li>
                <li><a href="#" class="footer-link">Supplier</a></li>
            </ul>

            
            

        </div>
    </div>
    <div class="IR"></div>
     <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div class="Vl"></div>
        <div class="AG"></div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    
    `;
}

createFooter();