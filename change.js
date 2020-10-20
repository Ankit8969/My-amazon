
var image_name ="./images/image1.jpg";

var price = "₹2000";

var make_top = `
                <div class="image_expand">
                <img src="${image_name}" alt="Virtual Image">
            </div>
            <div class="main_discription">
                <p class="main_discription_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit delectus.</p>
                <p class="mail_discription_dummy_text" style="padding-top :5px;">Lorem ipsum dolor sit.</p>
                <div class="price" style="padding-top : 4px; font-size: 1.2rem;">
                    <span class="first">${price}</span>
                    <span class="second">₹5000</span>
                    <span class="third">60% off</span>
                </div>
                <h2 style="padding-top :5px;">Available offers</h2>
                <ul style="padding-top :5px;">
                <span style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">  <li>Special PriceGet extra 30% off (price inclusive of discount)<span class="tc">T&C</span></li>       </span>
                <span  style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">   <li>Bank Offer10% off on SBI Credit Cards, up to ₹1500. On orders of ₹5000 and above<span class="tc">T&C</span></li></span>
                <span class="go_corona1" style="display: flex;"><img src="./images/list-style.png" alt=""width="18" height="18">    <li>Bank Offer10% off on SBI Debit Cards, up to ₹1000. On orders of ₹5000 and above<span class="tc">T&C</span></li></span>
                <span class="go_corona2" style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">   <li>Bank Offer₹125 Instant Cashback on Paytm Wallet. Min Order Value ₹1,250. Valid once per Paytm account<span class="tc">T&C</span></li></span>   
                </ul>
            </div>
                `;

var row = document.createElement('article');
var box = document.querySelector(".container");
row.classList.add('container');

row.innerHTML = make_top;

console.log(row);

box.append(row);


var box = document.querySelectorAll(".item-container");

for (var i= 0;i<box.length ;i++)
{
    box[i].addEventListener('click', extraction);
}

function extraction(event)
{
    var inner_part = event.target.parentElement.parentElement.children;   
    image_name = inner_part[0].children[0].src;

    var price = Math.floor(Math.random()*4600);

    make_top = `
                <div class="image_expand">
                <img src="${image_name}" alt="Virtual Image">
            </div>
            <div class="main_discription">
                <p class="main_discription_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit delectus.</p>
                <p class="mail_discription_dummy_text" style="padding-top :5px;">Lorem ipsum dolor sit.</p>
                <div class="price" style="padding-top : 4px; font-size: 1.2rem;">
                    <span class="first">${price}</span>
                    <span class="second">₹5000</span>
                    <span class="third">60% off</span>
                </div>
                <h2 style="padding-top :5px;">Available offers</h2>
                <ul style="padding-top :5px;">
                <span style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">  <li>Special PriceGet extra 30% off (price inclusive of discount)<span class="tc">T&C</span></li>       </span>
                <span  style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">   <li>Bank Offer10% off on SBI Credit Cards, up to ₹1500. On orders of ₹5000 and above<span class="tc">T&C</span></li></span>
                <span class="go_corona1" style="display: flex;"><img src="./images/list-style.png" alt=""width="18" height="18">    <li>Bank Offer10% off on SBI Debit Cards, up to ₹1000. On orders of ₹5000 and above<span class="tc">T&C</span></li></span>
                <span class="go_corona2" style="display: flex;"><img src="./images/list-style.png" alt="" width="18" height="18">   <li>Bank Offer₹125 Instant Cashback on Paytm Wallet. Min Order Value ₹1,250. Valid once per Paytm account<span class="tc">T&C</span></li></span>   
                </ul>
            </div>
                `;

                var box = document.querySelector("article");
            
                box.innerHTML = make_top;
            
                console.log(row);
            
                box.append(row);
}