import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface JobListCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  index: number;
}

const JobListCard = ({ 
  id, title, company, location, type, salary, posted, index 
}: JobListCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={`/jobs/${id}`}>
        <Card className="p-5 bg-card border-border shadow-card hover:shadow-medium transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-card-foreground mb-2 font-inter hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground font-inter font-medium mb-3">
                {company}
              </p>
            </div>
            <Badge variant="secondary" className="font-inter text-xs">
              {type}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="font-inter">{location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span className="font-inter">{salary}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-inter">{posted}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default JobListCard;