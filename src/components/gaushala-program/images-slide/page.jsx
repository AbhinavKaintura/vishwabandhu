import React from "react"
import ImageSlideShow from "@/components/common/slide-bar/page"
import Girl1 from '../../../../public/gaushala-program/girl-with-cow.jpeg'
import Girl5 from '../../../../public/gaushala-program/girl-with-cow (2).jpeg'
import Girl6 from '../../../../public/gaushala-program/girl-with-cow (3).jpeg'
import Girl7 from '../../../../public/gaushala-program/girl-with-cow (4).jpeg'
// import Girl9 from '../../../../public/gaushala-program/girl-with-cow (8).jpeg'
import cow1 from '../../../../public/gaushala-program/cow (1).jpg'
import cow2 from '../../../../public/gaushala-program/cow (2).jpg'
import cow3 from '../../../../public/gaushala-program/cow (3).jpg'
// import cow4 from '../../../../public/gaushala-program/cow (4).jpg'
// import cow5 from '../../../../public/gaushala-program/cow (5).jpg'

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
            src: cow1,
            alt: "young girl petting cow in a field"
          },
          {
            src: cow2,
            alt: "girl hugging a cow"
          },
          {
            src: cow3,
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
          // {
          //   src: cow4,
          //   alt: "this is girl with a gir cow"
          // },
          // {
          //   src: Girl9,
          //   alt: "this is girl with a gir cow"
          // },
          // {
          //   src: Girl5,
          //   alt: "this is girl with a gir cow"
          // }
        ]}
        autoSlideInterval={3000}
        title="WELCOME TO GAUSHALA"
        subtitle="Where Compassion Meets Care for Our Beloved Cows"
      />
    </div>
  )
}

export default GauMataSilde;