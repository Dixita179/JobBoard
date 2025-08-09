import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Bookmark, Briefcase, Upload, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ApplicationModal from '@/components/ApplicationModal';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const profileCompletionScore = 85;

  const appliedJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechFlow Solutions",
      appliedDate: "2024-01-15",
      status: "In Review"
    },
    {
      id: "2",
      title: "Product Manager",
      company: "InnovateCorp",
      appliedDate: "2024-01-12",
      status: "Interview Scheduled"
    }
  ];

  const savedJobs = [
    {
      id: "3",
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract"
    },
    {
      id: "4",
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Seattle, WA",
      type: "Full-time"
    }
  ];

  const sidebarItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'applied', label: 'Applied Jobs', icon: Briefcase },
    { id: 'saved', label: 'Saved Jobs', icon: Bookmark },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Interview Scheduled':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-inter">
            Dashboard
          </h1>
          <Button
            onClick={() => setShowApplicationModal(true)}
            className="bg-accent hover:bg-accent/90 font-inter"
          >
            <Plus className="w-4 h-4 mr-2" />
            Quick Apply
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-card border-border shadow-card sticky top-4">
                <div className="space-y-4">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors font-inter ${
                        activeTab === item.id
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-card-foreground'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Profile Completion */}
                <Card className="p-6 bg-card border-border shadow-card">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-card-foreground font-inter">
                      Profile Completion
                    </h2>
                    <span className="text-sm text-muted-foreground font-inter">
                      {profileCompletionScore}%
                    </span>
                  </div>
                  <Progress value={profileCompletionScore} className="mb-4" />
                  <p className="text-sm text-muted-foreground font-inter">
                    Complete your profile to increase your visibility to employers.
                  </p>
                </Card>

                {/* Resume Upload */}
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4 font-inter">
                    Resume
                  </h3>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4 font-inter">
                      Upload your resume to get started
                    </p>
                    <Button variant="outline" className="font-inter">
                      Choose File
                    </Button>
                  </div>
                </Card>

                {/* Profile Information */}
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4 font-inter">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-card-foreground font-inter">
                        Full Name
                      </label>
                      <p className="text-muted-foreground font-inter">John Doe</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground font-inter">
                        Email
                      </label>
                      <p className="text-muted-foreground font-inter">john.doe@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground font-inter">
                        Location
                      </label>
                      <p className="text-muted-foreground font-inter">San Francisco, CA</p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 font-inter">
                    Edit Profile
                  </Button>
                </Card>
              </motion.div>
            )}

            {activeTab === 'applied' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-primary mb-6 font-inter">
                  Applied Jobs ({appliedJobs.length})
                </h2>
                {appliedJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-card border-border shadow-card">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-card-foreground mb-2 font-inter">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground mb-2 font-inter">
                            {job.company}
                          </p>
                          <p className="text-sm text-muted-foreground font-inter">
                            Applied on {new Date(job.appliedDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge className={`${getStatusColor(job.status)} font-inter`}>
                          {job.status}
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'saved' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-primary mb-6 font-inter">
                  Saved Jobs ({savedJobs.length})
                </h2>
                {savedJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-card border-border shadow-card">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-card-foreground mb-2 font-inter">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground mb-2 font-inter">
                            {job.company}
                          </p>
                          <p className="text-sm text-muted-foreground font-inter">
                            {job.location} • {job.type}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="font-inter">
                            Remove
                          </Button>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 font-inter">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        jobTitle="Sample Job Position"
      />
    </div>
  );
};

export default Dashboard;