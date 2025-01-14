import React from "react";
import ImageSlideShow from "@/components/common/slide-bar/page";
import image1 from '../../../../public/human-safety-program/happy-indian-family (4).jpeg';
import image2 from '../../../../public/human-safety-program/happy-indian-family (5).jpeg';
import image3 from '../../../../public/human-safety-program/happy-indian-family (6).jpeg';
import image4 from '../../../../public/human-safety-program/happy-indian-family (8).jpeg';
import image5 from '../../../../public/human-safety-program/happy-indian-family (9).jpeg';
import image6 from '../../../../public/human-safety-program/happy-indian-family (10).jpeg';
import image7 from '../../../../public/human-safety-program/happy-indian-family (11).jpeg';

const Human_safety_program_slide = () => {
  return (
    <div>
        <ImageSlideShow 
            images={[
                {
                    src: image1,
                    alt: "Image 1"
                },
                {
                    src: image2,
                    alt: "Image 2"
                },
                {
                    src: image3,
                    alt: "Image 3"
                },
                {
                    src: image4,
                    alt: "Image 4"
                },
                {
                    src: image5,
                    alt: "Image 5"
                },
                {
                    src: image6,
                    alt: "Image 6"
                },
                {
                    src: image7,
                    alt: "Image 7"
                }
            ]}
            autoSlideInterval={3000}
        />
    </div>
  )
}

export default Human_safety_program_slide;