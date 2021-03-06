import { useRef } from 'react'
import {
  ArrowRightCircleFill as ArrowRight,
  ArrowLeftCircleFill as ArrowLeft
} from '@styled-icons/bootstrap'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'
import BlogCard from 'components/BlogCard'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.3,
        draggable: true,
        arrows: false
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.1,
        draggable: true,
        arrows: false
      }
    }
  ]
}

export type GalleryImageProps = {
  src: string
  label: string
  authorName: string
  authorPhoto: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map(({ authorName, authorPhoto, label, src }, index) => (
          <BlogCard
            key={`thumb-${index}`}
            image={src}
            title={label}
            authorName={authorName}
            authorPhoto={authorPhoto}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Gallery
