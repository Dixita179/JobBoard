import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  index: number;
}

const JobCard = ({ title, company, location, type, posted, index }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <Card className="p-6 bg-card border-border shadow-card hover:shadow-medium transition-all duration-300 h-full">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-card-foreground mb-2 font-inter">
              {title}
            </h3>
            <p className="text-lg text-muted-foreground mb-4 font-inter font-medium">
              {company}
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm font-inter">{location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-inter">{type} • {posted}</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200 font-inter"
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default JobCard;