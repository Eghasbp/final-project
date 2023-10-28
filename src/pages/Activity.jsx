import React from "react";
import TemplateDashboard from "../component/TemplateDashboard";

const Activity = () => {
  

  return (
    <div>
      <TemplateDashboard>
        <div class="container my-24 mx-auto md:px-6">
          <section class="mb-32">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
              class="mb-6 w-[500px] rounded-lg shadow-lg dark:shadow-black/20"
              alt="image"
            />

            <div class="mb-6 flex items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
                class="mr-2 h-8 rounded-full"
                alt="avatar"
                loading="lazy"
              />
              <div>
                <span>
                  {" "}
                  Published <u>15.07.2020</u> by{" "}
                </span>
                <a href="#!" class="font-medium">
                  Anna Maria Doe
                </a>
              </div>
            </div>

            <h1 class="mb-6 text-3xl font-bold">
              An intriguing title for an interesting article
            </h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              harum tempore cupiditate asperiores provident, itaque, quo ex
              iusto rerum voluptatum delectus corporis quisquam maxime a ipsam
              nisi sapiente qui optio! Dignissimos harum quod culpa officiis
              suscipit soluta labore! Expedita quas, nesciunt similique autem,
              sunt, doloribus pariatur maxime qui sint id enim. Placeat, maxime
              labore. Dolores ex provident ipsa impedit, omnis magni earum. Sed
              fuga ex ducimus consequatur corporis, architecto nesciunt vitae
              ipsum consequuntur perspiciatis nulla esse voluptatem quos dolorum
              delectus similique eum vero in est velit quasi pariatur blanditiis
              incidunt quam.
            </p>
          </section>
        </div>
      </TemplateDashboard>
    </div>
  );
};

export default Activity;
