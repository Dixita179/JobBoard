import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-inter">
            Find your next move.
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-inter">
            Discover opportunities that align with your career goals and ambitions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Job title or keyword"
              className="pl-10 h-12 border-border bg-card font-inter text-base"
            />
          </div>
          
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Location"
              className="pl-10 h-12 border-border bg-card font-inter text-base"
            />
          </div>
          
          <Button 
            className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-medium font-inter transition-all duration-200 hover:shadow-medium"
          >
            Search Jobs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;