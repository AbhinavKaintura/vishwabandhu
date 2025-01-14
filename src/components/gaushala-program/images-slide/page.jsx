import React from "react"
import ImageSlideShow from "@/components/common/slide-bar/page"
import Girl1 from '../../../../public/gaushala-program/girl-with-cow.jpeg'
import Girl2 from '../../../../public/gaushala-program/young-girl-petting-cow-field.jpg'
import Girl3 from '../../../../public/gaushala-program/girl-hugging-cow.jpg'
import Girl4 from '../../../../public/gaushala-program/girl-with-cow (1).jpeg'
import Girl5 from '../../../../public/gaushala-program/girl-with-cow (2).jpeg'
import Girl6 from '../../../../public/gaushala-program/girl-with-cow (3).jpeg'
import Girl7 from '../../../../public/gaushala-program/girl-with-cow (4).jpeg'
import Girl8 from '../../../../public/gaushala-program/girl-with-cow (5).jpeg'
import Girl9 from '../../../../public/gaushala-program/girl-with-cow (8).jpeg'

const GauMataSilde = () => {
  return (
    <div className="mb-20">
      <ImageSlideShow
        images={[
          {
            src: Girl1,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl2,
            alt: "young girl petting cow in a field"
          },
          {
            src: Girl3,
            alt: "girl hugging a cow"
          },
          {
            src: Girl4,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl5,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl6,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl7,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl8,
            alt: "this is girl with a gir cow"
          },
          {
            src: Girl9,
            alt: "this is girl with a gir cow"
          }
        ]}
        autoSlideInterval={3000}
      />
    </div>
  )
}

export default GauMataSilde;