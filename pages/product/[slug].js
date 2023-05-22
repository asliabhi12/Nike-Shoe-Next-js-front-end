import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RealatedProducts from "@/components/RealatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column end */}
          {/* Right Column Start  */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Retro 6
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;12,909.00
              </p>
              <p className="text-base  font-medium line-through">
                &#8377;1,00,000.00
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  6 UK
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  7 UK
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  8.5 UK
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  9 UK
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  10 UK
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  11 UK
                </div>
              </div>
              {/* SHOW ERROR Start*/}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SHOW ERROR End*/}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON End */}
            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist <IoMdHeartEmpty size={20} />{" "}
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                obcaecati nisi mollitia, odit saepe harum nihil sit in veritatis
                dolores quam placeat eum, officiis at, neque culpa magni ab.
                Cumque sunt officiis vel eaque, assumenda quos similique a atque
                nisi quod sint nobis maiores iste excepturi error. Praesentium
                voluptate eos iure molestiae, minus aut sit sint facere rerum
                nulla error, aspernatur consectetur, molestias architecto
                corporis amet maiores laudantium soluta dolorem itaque quidem?
                Quos, fuga officia voluptatibus error quidem pariatur esse a
                enim voluptate molestiae minus eum. Inventore unde suscipit odit
                at soluta repellat, laborum aspernatur quod fuga optio rerum
                est.
              </div>
              <div className="markdown text-md mb-5">
                ficiis at, neque culpa magni ab.
                ibus error quidem pariatur esse a
                enim voluptate molestiae minus eum. Inventore unde suscipit odit
                at soluta repellat, laborum aspernatur quod fuga optio rerum
                est.
              </div>
            </div>
          </div>

          {/* Right Column End  */}
        </div>
        <RealatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
