import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FilterPanel from '@/components/FilterPanel';
import JobListCard from '@/components/JobListCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const jobsData = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateCorp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $160k",
    posted: "1 week ago"
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    posted: "3 days ago"
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $170k",
    posted: "5 days ago"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $140k",
    posted: "1 day ago"
  },
  {
    id: "6",
    title: "Marketing Director",
    company: "GrowthLabs",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$100k - $130k",
    posted: "4 days ago"
  }
];

const JobListings = () => {
  const [filters, setFilters] = useState({
    jobTypes: [] as string[],
    experienceLevel: [] as string[],
    salaryRange: [50000, 180000] as [number, number]
  });

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // Filter jobs based on current filters
  const filteredJobs = jobsData.filter(job => {
    if (filters.jobTypes.length > 0 && !filters.jobTypes.includes(job.type)) {
      return false;
    }
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <FilterPanel filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-3xl font-bold text-primary mb-2 font-inter">
                Job Opportunities
              </h1>
              <p className="text-muted-foreground font-inter">
                {filteredJobs.length} jobs found
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 mb-8"
              >
                {currentJobs.map((job, index) => (
                  <JobListCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    salary={job.salary}
                    posted={job.posted}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="font-inter"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                <span className="text-muted-foreground font-inter">
                  Page {currentPage} of {totalPages}
                </span>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="font-inter"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;