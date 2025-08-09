import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const JobDetail = () => {
  const { id } = useParams();
  
  // Mock job data - in real app, fetch based on id
  const jobData = {
    title: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    description: "We are looking for a passionate Senior Frontend Developer to join our growing team. You will be responsible for building the 'client-side' of our web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong understanding of TypeScript",
      "Experience with state management (Redux, Zustand)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Knowledge of modern CSS frameworks (Tailwind CSS)"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work from home policy",
      "Professional development budget",
      "Unlimited PTO"
    ],
    companyInfo: {
      name: "TechFlow Solutions",
      size: "50-100 employees",
      industry: "Technology",
      founded: "2018",
      description: "TechFlow Solutions is a rapidly growing technology company focused on building innovative software solutions for modern businesses."
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Job Header */}
          <Card className="p-8 bg-card border-border shadow-card mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-card-foreground mb-3 font-inter">
                  {jobData.title}
                </h1>
                <p className="text-xl text-muted-foreground font-medium mb-4 font-inter">
                  {jobData.company}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-inter">{jobData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span className="font-inter">{jobData.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-inter">{jobData.posted}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="font-inter">
                  {jobData.type}
                </Badge>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="mt-6 lg:mt-0 bg-accent hover:bg-accent/90 text-accent-foreground font-medium font-inter px-8 py-3 text-lg animate-pulse hover:animate-none"
                >
                  Apply Now
                </Button>
              </motion.div>
            </div>
          </Card>

          {/* Job Details Tabs */}
          <Tabs defaultValue="description" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="description" className="font-inter">Description</TabsTrigger>
              <TabsTrigger value="company" className="font-inter">Company</TabsTrigger>
              <TabsTrigger value="related" className="font-inter">Related</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 font-inter">
                    Job Description
                  </h3>
                  <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
                    {jobData.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-card-foreground mb-3 font-inter">
                    Requirements
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {jobData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground font-inter">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-card-foreground mb-3 font-inter">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {jobData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground font-inter">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="company">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 font-inter">
                    About {jobData.companyInfo.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
                    {jobData.companyInfo.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">Company Size</p>
                        <p className="font-medium text-card-foreground font-inter">{jobData.companyInfo.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">Founded</p>
                        <p className="font-medium text-card-foreground font-inter">{jobData.companyInfo.founded}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="related">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 font-inter">
                    Related Jobs
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    No related jobs found at the moment. Check back later for similar opportunities.
                  </p>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetail;