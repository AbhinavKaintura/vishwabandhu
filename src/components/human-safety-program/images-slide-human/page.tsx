import React from "react";
import ImageSlideShow from "@/components/common/slide-bar/page";
import image1 from '../../../../public/human-safety-program/bst-slide.jpg';
import image2 from '../../../../public/human-safety-program/bst-slide (2).jpg';
import image3 from '../../../../public/human-safety-program/bst-slide (3).jpg';
import image4 from '../../../../public/human-safety-program/bst-slide (4).jpg';
import image5 from '../../../../public/human-safety-program/bst-slide (5).jpg';
import image6 from '../../../../public/human-safety-program/bst-slide (6).jpg';
import image7 from '../../../../public/human-safety-program/bst-slide (7).jpg';
import image8 from '../../../../public/human-safety-program/bst-slide (8).jpg';
import image9 from '../../../../public/human-safety-program/bst-slide (9).jpg';

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
                },
                {
                    src: image8,
                    alt: "Image 8"
                },
                {
                    src: image9,
                    alt: "Image 9"
                }
            ]}
            autoSlideInterval={3000}
            title="Bharat Self-Care Team"
            subtitle="Join our Bharat Self-Care Team now and prebook a secure future for your family"
        />
    </div>
  )
}

export default Human_safety_program_slide;