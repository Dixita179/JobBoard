import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterPanelProps {
  filters: {
    jobTypes: string[];
    experienceLevel: string[];
    salaryRange: [number, number];
  };
  onFiltersChange: (filters: any) => void;
}

const FilterPanel = ({ filters, onFiltersChange }: FilterPanelProps) => {
  const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Remote'];
  const experienceOptions = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'];

  const handleJobTypeChange = (jobType: string, checked: boolean) => {
    const newJobTypes = checked 
      ? [...filters.jobTypes, jobType]
      : filters.jobTypes.filter(type => type !== jobType);
    
    onFiltersChange({ ...filters, jobTypes: newJobTypes });
  };

  const handleExperienceChange = (level: string, checked: boolean) => {
    const newExperience = checked 
      ? [...filters.experienceLevel, level]
      : filters.experienceLevel.filter(exp => exp !== level);
    
    onFiltersChange({ ...filters, experienceLevel: newExperience });
  };

  const handleSalaryChange = (value: number[]) => {
    onFiltersChange({ ...filters, salaryRange: [value[0], value[1]] });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-card border-border shadow-card sticky top-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-6 font-inter">
          Filters
        </h3>
        
        <div className="space-y-6">
          {/* Job Type */}
          <div>
            <Label className="text-sm font-medium text-card-foreground mb-3 block font-inter">
              Job Type
            </Label>
            <div className="space-y-3">
              {jobTypeOptions.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.jobTypes.includes(type)}
                    onCheckedChange={(checked) => 
                      handleJobTypeChange(type, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={type} 
                    className="text-sm text-muted-foreground font-inter cursor-pointer"
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <Label className="text-sm font-medium text-card-foreground mb-3 block font-inter">
              Experience Level
            </Label>
            <div className="space-y-3">
              {experienceOptions.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox
                    id={level}
                    checked={filters.experienceLevel.includes(level)}
                    onCheckedChange={(checked) => 
                      handleExperienceChange(level, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={level} 
                    className="text-sm text-muted-foreground font-inter cursor-pointer"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <Label className="text-sm font-medium text-card-foreground mb-3 block font-inter">
              Salary Range
            </Label>
            <div className="px-2">
              <Slider
                value={filters.salaryRange}
                onValueChange={handleSalaryChange}
                max={200000}
                min={30000}
                step={5000}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground font-inter">
                <span>${filters.salaryRange[0].toLocaleString()}</span>
                <span>${filters.salaryRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FilterPanel;