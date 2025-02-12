import React from "react";
import ImageSlideShow from "@/components/common/slide-bar/page";
// import image1 from '../../../../public/ bharat-self-care-team/bsct.jpg';
import image2 from '../../../../public/bharat-self-care-team/bsct2.jpg';
import image3 from '../../../../public/bharat-self-care-team/bsct3.jpg';
import image4 from '../../../../public/bharat-self-care-team/bsct4.jpg';
import image5 from '../../../../public/bharat-self-care-team/bsct7.jpg';
import image6 from '../../../../public/bharat-self-care-team/bsct5.jpg';
import image7 from '../../../../public/bharat-self-care-team/bsct6.jpg';
// import image8 from '../../../../public/ bharat-self-care-team/bsct3.jpg';
// import image9 from '../../../../public/ bharat-self-care-team/bst-slide (9).jpg';

const Human_safety_program_slide = () => {
  return (
    <div>
        <ImageSlideShow 
            images={[
                // {
                //     src: image1,
                //     alt: "Image 1"
                // },
                
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
                    src: image2,
                    alt: "Image 2"
                },
                // {
                //     src: image8,
                //     alt: "Image 8"
                // },
                // {
                //     src: image9,
                //     alt: "Image 9"
                // }
            ]}
            autoSlideInterval={3000}
            title="Bharat Self-Care Team"
            subtitle="Join our Bharat Self-Care Team now and prebook a secure future for your family"
        />
    </div>
  )
}

export default Human_safety_program_slide;