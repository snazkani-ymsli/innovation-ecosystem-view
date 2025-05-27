
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';

const HeroCarousel = () => {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop",
      title: "Innovative Tech Startups",
      subtitle: "Discover groundbreaking technologies",
      tag: "Technology"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      title: "Digital Innovation Hub",
      subtitle: "Where ideas meet execution",
      tag: "Innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      title: "Future of Business",
      subtitle: "Revolutionary startup ecosystem",
      tag: "Business"
    }
  ];

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <Carousel className="w-full h-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative w-full h-96 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
                  <div className="text-white max-w-lg">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">
                      {slide.tag}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-gray-200">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
