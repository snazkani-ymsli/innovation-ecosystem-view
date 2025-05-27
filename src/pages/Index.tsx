
import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Mail, Globe, Users, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Startup {
  id: number;
  name: string;
  domain: string;
  description: string;
  shortDescription: string;
  founded: string;
  teamSize: string;
  location: string;
  email: string;
  website: string;
  tags: string[];
  logo: string;
  fundingStage: string;
}

const startups: Startup[] = [
  {
    id: 1,
    name: "FinFlow",
    domain: "FinTech",
    description: "Revolutionary digital banking platform that provides seamless financial services for small businesses and freelancers.",
    shortDescription: "Digital banking for SMEs",
    founded: "2022",
    teamSize: "15-30",
    location: "San Francisco, CA",
    email: "contact@finflow.com",
    website: "https://finflow.com",
    tags: ["Banking", "B2B", "SaaS", "Mobile"],
    logo: "💳",
    fundingStage: "Series A"
  },
  {
    id: 2,
    name: "HealthSync",
    domain: "HealthTech",
    description: "AI-powered telemedicine platform connecting patients with healthcare providers through advanced diagnostic tools and real-time monitoring.",
    shortDescription: "AI telemedicine platform",
    founded: "2021",
    teamSize: "30-50",
    location: "Boston, MA",
    email: "hello@healthsync.io",
    website: "https://healthsync.io",
    tags: ["AI", "Telemedicine", "Healthcare", "Diagnostics"],
    logo: "🏥",
    fundingStage: "Series B"
  },
  {
    id: 3,
    name: "EduMentor",
    domain: "EdTech",
    description: "Personalized learning platform using machine learning to adapt educational content to individual student needs and learning patterns.",
    shortDescription: "Personalized learning with ML",
    founded: "2023",
    teamSize: "5-15",
    location: "Austin, TX",
    email: "team@edumentor.co",
    website: "https://edumentor.co",
    tags: ["Education", "Machine Learning", "Personalization", "Students"],
    logo: "📚",
    fundingStage: "Seed"
  },
  {
    id: 4,
    name: "GreenLogistics",
    domain: "CleanTech",
    description: "Sustainable supply chain management platform that optimizes delivery routes and reduces carbon footprint for e-commerce businesses.",
    shortDescription: "Sustainable supply chain optimization",
    founded: "2022",
    teamSize: "20-35",
    location: "Seattle, WA",
    email: "info@greenlogistics.com",
    website: "https://greenlogistics.com",
    tags: ["Sustainability", "Logistics", "E-commerce", "Carbon Reduction"],
    logo: "🌱",
    fundingStage: "Series A"
  },
  {
    id: 5,
    name: "VRStudio",
    domain: "Gaming",
    description: "Immersive virtual reality gaming platform creating next-generation entertainment experiences with social interaction capabilities.",
    shortDescription: "Next-gen VR gaming platform",
    founded: "2021",
    teamSize: "40-60",
    location: "Los Angeles, CA",
    email: "contact@vrstudio.game",
    website: "https://vrstudio.game",
    tags: ["VR", "Gaming", "Entertainment", "Social"],
    logo: "🎮",
    fundingStage: "Series B"
  },
  {
    id: 6,
    name: "DataVault",
    domain: "CyberSecurity",
    description: "Enterprise-grade cybersecurity solution providing advanced threat detection and data protection for cloud-based infrastructures.",
    shortDescription: "Enterprise cybersecurity platform",
    founded: "2020",
    teamSize: "50-100",
    location: "New York, NY",
    email: "security@datavault.net",
    website: "https://datavault.net",
    tags: ["Security", "Enterprise", "Cloud", "Threat Detection"],
    logo: "🔒",
    fundingStage: "Series C"
  },
  {
    id: 7,
    name: "FoodieConnect",
    domain: "FoodTech",
    description: "Farm-to-table marketplace connecting local farmers directly with restaurants and consumers, promoting sustainable food sourcing.",
    shortDescription: "Farm-to-table marketplace",
    founded: "2023",
    teamSize: "10-20",
    location: "Portland, OR",
    email: "hello@foodieconnect.com",
    website: "https://foodieconnect.com",
    tags: ["Marketplace", "Sustainability", "Food", "Local"],
    logo: "🥬",
    fundingStage: "Pre-Seed"
  },
  {
    id: 8,
    name: "PropTechAI",
    domain: "PropTech",
    description: "AI-driven real estate platform that predicts property values and market trends to help investors make informed decisions.",
    shortDescription: "AI real estate analytics",
    founded: "2022",
    teamSize: "25-40",
    location: "Miami, FL",
    email: "invest@proptechai.com",
    website: "https://proptechai.com",
    tags: ["Real Estate", "AI", "Analytics", "Investment"],
    logo: "🏠",
    fundingStage: "Series A"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedFunding, setSelectedFunding] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');

  // Get unique domains and tags
  const domains = [...new Set(startups.map(startup => startup.domain))];
  const fundingStages = [...new Set(startups.map(startup => startup.fundingStage))];
  const allTags = [...new Set(startups.flatMap(startup => startup.tags))];

  // Filter startups based on search and filters
  const filteredStartups = useMemo(() => {
    return startups.filter(startup => {
      const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDomain = selectedDomain === 'all' || startup.domain === selectedDomain;
      const matchesFunding = selectedFunding === 'all' || startup.fundingStage === selectedFunding;
      const matchesTag = selectedTag === '' || startup.tags.includes(selectedTag);

      return matchesSearch && matchesDomain && matchesFunding && matchesTag;
    });
  }, [searchTerm, selectedDomain, selectedFunding, selectedTag]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDomain('all');
    setSelectedFunding('all');
    setSelectedTag('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Startup Repository
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative startups across various domains. Connect with entrepreneurs, 
              explore cutting-edge technologies, and find your next investment opportunity.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search startups, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Domain Filter */}
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="All Domains" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Funding Stage Filter */}
              <Select value={selectedFunding} onValueChange={setSelectedFunding}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="All Funding Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  {fundingStages.map(stage => (
                    <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="h-12"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 py-2">Filter by tags:</span>
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-blue-100 transition-colors"
                  onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-gray-600">
            Showing {filteredStartups.length} of {startups.length} startups
          </div>
        </div>
      </div>

      {/* Startups Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map(startup => (
            <Card key={startup.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{startup.logo}</div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {startup.name}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {startup.domain}
                      </Badge>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {startup.fundingStage}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 line-clamp-3">
                  {startup.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {startup.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {startup.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{startup.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Company Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{startup.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{startup.teamSize} employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Founded {startup.founded}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex space-x-2 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(`mailto:${startup.email}`)}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(startup.website, '_blank')}
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredStartups.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No startups found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
