"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// SafeSport Maßnahmen und Projekte
const projects = [
  {
    id: 1,
    title: 'SafeSport Digital',
    category: 'Digitale Bildung',
    description: 'Eine Lernplattform mit interaktiven Modulen zur Prävention sexualisierter Gewalt für Sportvereine und -verbände.',
    image: '/images/project1.jpg',
    tags: ['E-Learning', 'Sensibilisierung', 'Prävention'],
  },
  {
    id: 2,
    title: 'Schutzkonzept-Generator',
    category: 'Präventionstools',
    description: 'Ein digitales Tool, das Sportvereine bei der Erstellung von individuellen Schutzkonzepten unterstützt.',
    image: '/images/project2.jpg',
    tags: ['Prävention', 'Risikomanagement', 'Best Practice'],
  },
  {
    id: 3,
    title: 'SafeSport Coach',
    category: 'Trainerausbildung',
    description: 'Schulungsprogramm für Trainer und Betreuer zur Schaffung einer sicheren Atmosphäre im Trainingsalltag.',
    image: '/images/project3.jpg',
    tags: ['Fortbildung', 'Sensibilisierung', 'Verhaltenskodex'],
  },
  {
    id: 4,
    title: 'Kindgerechte Anlaufstellen',
    category: 'Intervention',
    description: 'Konzept für kindgerechte und niedrigschwellige Meldesysteme in Sportvereinen und -verbänden.',
    image: '/images/project4.jpg',
    tags: ['Kindeswohl', 'Intervention', 'Betroffenenschutz'],
  },
  {
    id: 5,
    title: 'Sicherer Sport für alle',
    category: 'Inklusion',
    description: 'Präventions- und Interventionskonzepte für den Schutz besonders vulnerabler Zielgruppen im Sport.',
    image: '/images/project5.jpg',
    tags: ['Inklusion', 'Diversität', 'Gleichstellung'],
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-black relative" id="projects">
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm font-medium mb-4">
              Maßnahmen & Projekte
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Aktiv gegen sexualisierte Gewalt im Sport
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Erfahren Sie mehr über unsere innovativen Projekte zur Prävention, Intervention und Sensibilisierung im Bereich sexualisierter Gewalt im Sport.
            </p>
          </motion.div>
        </div>

        {/* Featured projects carousel */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-transparent hover:border-red-700 bg-gray-900">
                      <div className="h-48 overflow-hidden bg-red-900/20">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-medium text-red-400 bg-red-950 px-2 py-1 rounded">
                              {project.category}
                            </span>
                            <CardTitle className="mt-2 text-xl text-gray-100">{project.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex flex-wrap gap-2 pt-0">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-400 border border-gray-700 rounded-full px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-red-900/30 hover:text-white" />
              <CarouselNext className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-red-900/30 hover:text-white" />
            </div>
          </Carousel>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-600 hover:opacity-90"
            >
              Alle Maßnahmen anzeigen
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
