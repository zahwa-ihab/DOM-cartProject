
const cart=document.querySelector("cart")
const cartRemove_btns= document.querySelectorAll(".trash-btn");
addCartRemoveEvent();
changingItemQuantityEvent();
itemLikeEvent();

///////// deleting item from a cart
function addCartRemoveEvent(){
    cartRemove_btns.forEach( function(btn) {
        btn.addEventListener("click", handleRemoveCart);
    })
}

///// changing quantity of an item in the cart
function changingItemQuantityEvent(){
    let cartQuantities= document.querySelectorAll(".cart-quantity");
    cartQuantities.forEach(function(cartQuantity){
        cartQuantity.addEventListener("change" , handle_ChangeItemQuantity);
    })
}

//// clicking like button or heart Icon
function itemLikeEvent(){
    let heartBtns = document.querySelectorAll(".like-btn");
    heartBtns.forEach( function(heartBtn){
       // console.log(heartBtn.value);
        heartBtn.addEventListener("click", handle_LikeItem);
    })
}
function handle_LikeItem(){
    let c=this.className;
    console.log(c);
    if( c == "fa fa-heart like-btn notLiked"){
         this.style.color= "red";
         this.className="fa fa-heart like-btn Liked";
    }
    else{
        this.style.color= "white";
        this.className="fa fa-heart like-btn notLiked";
    }
    
  
    
}
function handle_ChangeItemQuantity(){
  if(this.value < 1 ){
    this.value=1;
  }
  updateCartTotal();
}

 function handleRemoveCart(){
    console.log("handling cart deletion");
    let parent=this.parentElement.parentElement;
    console.log(parent);
    parent.remove();
    updateCartTotal();
 }

function updateCartTotal(){
    let cartItems= document.querySelectorAll(".cart-item");
    const totalCartPrice= document.querySelector(".total-price");
    let total=0;
    cartItems.forEach( function(cartItem){
        let priceElement= cartItem.querySelector(".cart-price");
        ////converting string into a number & removing dollar sign to do our calculatipns
        let price= parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity=cartItem.querySelector(".cart-quantity").value;
        total += price * quantity;
    })
    ////keeping it 2 decimal places
    total.toFixed(2);
    totalCartPrice.innerHTML = "$" + total;


}