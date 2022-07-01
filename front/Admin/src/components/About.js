import React from "react";
import img1 from "../img/market3.jpg";

export const About = () => {
    return (
        <div className="container">
            {/* <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex align-items-center h-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex align-items-center h-100">
                        <img src={img1} className="img-fluid rounded-3" alt="img" />
                    </div>
                </div>
            </div> */}
            <div class="row pushBottom-half">
                <div class="col-sm-12 col-lg-6">
                    <p class="paragraf-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                    <p class="paragraf-about">For our primary restaurant is the pleasure and enjoyment of the clientele
                        in the amazing facilities of the restaurant. Offering you our best. In the year we left behind
                        our business managed to rank second in terms of cleanliness and hospitality from the wonderful
                        staff.

                    </p>
                    <p>We also count over 70 people in the whole field. Including active staff, cooks, managers etc. The
                        restaurant has an area of 2000m2 including the green space together with the playground and
                        parking. We welcome you every time.

                    </p>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <img class="img-fluid rounded" src={img1} alt="" />
                </div>
            </div>

            <div class="row pushBottom">
                <div class="col-sm-12 col-lg-6">
                    <img class="img-fluid rounded" src={img1} alt="" />
                </div>
                <div class="col-sm-12 col-lg-6">
                    <p class="paragraf-about">Restaurant Leart is part of Gastronomy since 2005, since then we are one
                        of the most prestigious restaurants in the country. The kitchen of our restaurant offers the
                        richest food from world cuisines and our traditional one.</p>
                    <p class="paragraf-about">For our primary restaurant is the pleasure and enjoyment of the clientele
                        in the amazing facilities of the restaurant. Offering you our best. In the year we left behind
                        our business managed to rank second in terms of cleanliness and hospitality from the wonderful
                        staff.

                    </p>
                    <p>We also count over 70 people in the whole field. Including active staff, cooks, managers etc. The
                        restaurant has an area of 2000m2 including the green space together with the playground and
                        parking. We welcome you every time.

                    </p>
                </div>
            </div>

        </div>

    );
}