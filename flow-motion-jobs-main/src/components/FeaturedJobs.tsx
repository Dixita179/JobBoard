import { motion } from 'framer-motion';
import JobCard from './JobCard';

const jobsData = [
  {
    title: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago"
  },
  {
    title: "Product Manager",
    company: "InnovateCorp",
    location: "New York, NY",
    type: "Full-time",
    posted: "1 week ago"
  },
  {
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    posted: "3 days ago"
  },
  {
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "5 days ago"
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    posted: "1 day ago"
  },
  {
    title: "Marketing Director",
    company: "GrowthLabs",
    location: "Los Angeles, CA",
    type: "Full-time",
    posted: "4 days ago"
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-inter">
            Featured Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Discover hand-picked positions from top companies looking for exceptional talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsData.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              posted={job.posted}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;