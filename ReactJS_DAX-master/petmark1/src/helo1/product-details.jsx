function Product_details(){
    return(
<div class="elevet-enable">
<div class="site-wrapper">
<nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Product Details</li>
        </ol>
    </div>
  </nav>
  <div class="container">
    <div class="pm-product-details">
      <div class="row">
       
        <div class="col-md-6">
          <div class="image-block">

            <img id="zoom_03" src="image/product/product-details/product-details-1.jpg" data-zoom-image="image/product/product-details/product-details-1.jpg" alt=""/>

            
            <div id="product-view-gallery" class="elevate-gallery">
            
              <a href="#" class="gallary-item" data-image="image/product/product-details/product-details-1.jpg"
                data-zoom-image="image/product/product-details/product-details-1.jpg">
                <img src="image/product/product-details/product-details-1.jpg" alt=""/>
              </a>
              
              <a href="#" class="gallary-item" data-image="image/product/product-details/product-details-2.jpg"
                data-zoom-image="image/product/product-details/product-details-2.jpg">
                <img src="image/product/product-details/product-details-2.jpg" alt=""/>
              </a>
              
              <a href="#" class="gallary-item" data-image="image/product/product-details/product-details-3.jpg"
                data-zoom-image="image/product/product-details/product-details-3.jpg">
                <img src="image/product/product-details/product-details-3.jpg" alt=""/>
              </a>
              
              <a href="#" class="gallary-item" data-image="image/product/product-details/product-details-4.jpg"
                data-zoom-image="image/product/product-details/product-details-4.jpg">
                <img src="image/product/product-details/product-details-4.jpg" alt=""/>
              </a>

            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5 mt-md-0">
          <div class="description-block">
            <div class="header-block">
                <h3>Diam vel neque</h3>
                <div class="navigation">
                  <a href="#"><i class="ion-ios-arrow-back"></i></a>
                  <a href="#"><i class="ion-ios-arrow-forward"></i></a>
                </div>
            </div>
           
            <div class="rating-block d-flex  mt--10 mb--15">
              <div class="rating-widget">
                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                <a href="#" class="single-rating"><i class="fas fa-star-half-alt"></i></a>
                <a href="#" class="single-rating"><i class="far fa-star"></i></a>
              </div>
              <p class="rating-text"><a href="#comment-form">(1 customer review)</a></p>
            </div>
           
            <p class="price"><span class="old-price">250$</span>300$</p>
           
            <div class="product-short-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                tristique auctor. Donec non est at libero vulputate rutrum.
              </p>
            </div>
            <div class="status">
              <i class="fas fa-check-circle"></i>300 IN STOCK
            </div>
            
            <form action="https://htmldemo.net/petmark/petmark/" class="add-to-cart">
              <div class="count-input-block">
                <input type="number" class="form-control text-center" value="1" min="1"/>
              </div>
              <div class="btn-block">
                <a href="#" class="btn btn-rounded btn-outlined--primary">Add to cart</a>
              </div>
            </form>
           
            <div class="btn-options">
              <a href="wishlist.html"><i class="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i class="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
            
            <div class="product-meta mt--30">
              <p>Ctagories: <a href="#" class="single-meta">Bedroom</a>, <a href="#" class="single-meta">Decor
                  & Furniture</a></p>
              <p>Tags: <a href="#" class="single-meta">Food</a></p>
            </div>

            <div class="share-block-1">
              <ul class="social-btns">
                <li><a href="#" class="facebook"><i class="far fa-thumbs-up"></i><span>likes 1</span></a></li>
                <li><a href="#" class="twitter"><i class="fab fa-twitter"></i> <span>twitter</span></a></li>
                <li><a href="#" class="google"><i class="fas fa-plus-square"></i> <span>share</span></a></li>
              </ul>
            </div>
          
            <div class="share-block-2  mt--30">
              <h4>SHARE THIS PRODUCT</h4>
              <ul class="social-btns social-btns-2">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
    </div>
    </div>
    )
}
export default Product_details