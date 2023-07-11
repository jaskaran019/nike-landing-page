import React from 'react'

const MainContainer = () => {
  return (
    <>
        <div className="main-container">
            <div className="sub-container1">
                <h1>YOUR FEET <br />DESERVE <br />THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="button-container">
                    <button>Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <p className='small-para'>Also Available On</p>
                    <div className="shop-container">
                        <img src="images/flipkart.png" alt="" />
                        <img src="images/amazon.png" alt="" />
                    </div>
            </div>
            <div className="sub-container"><img src="images/shoe_image.png" alt="" /></div>
            
        </div>
    </>
  )
}

export default MainContainer;