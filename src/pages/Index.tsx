
import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Mail, Globe, Users, Calendar, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Startup Repository
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover innovative startups across various domains. Connect with entrepreneurs, 
              explore cutting-edge technologies, and find your next investment opportunity.
            </p>
          </div>

          {/* Enhanced Search and Filters */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  placeholder="Search startups, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 shadow-sm"
                />
              </div>

              {/* Domain Filter */}
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full lg:w-56 h-14 border-2 border-gray-200 rounded-xl shadow-sm">
                  <SelectValue placeholder="All Domains" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl">
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Funding Stage Filter */}
              <Select value={selectedFunding} onValueChange={setSelectedFunding}>
                <SelectTrigger className="w-full lg:w-56 h-14 border-2 border-gray-200 rounded-xl shadow-sm">
                  <SelectValue placeholder="All Funding Stages" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl">
                  <SelectItem value="all">All Stages</SelectItem>
                  {fundingStages.map(stage => (
                    <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="h-14 px-6 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-200"
              >
                <Filter className="h-5 w-5 mr-2" />
                Clear
              </Button>
            </div>

            {/* Enhanced Tag Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">Filter by tags:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className={`cursor-pointer transition-all duration-200 px-4 py-2 text-sm font-medium rounded-full ${
                      selectedTag === tag 
                        ? "bg-blue-600 text-white shadow-lg scale-105" 
                        : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:scale-105"
                    }`}
                    onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Results Count */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium border border-white/50">
              Showing {filteredStartups.length} of {startups.length} startups
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Startups Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map(startup => (
            <Card key={startup.id} className="group hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="pb-6 bg-gradient-to-br from-white to-gray-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                      {startup.logo}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {startup.name}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 border-gray-300 text-gray-600">
                        {startup.domain}
                      </Badge>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-md">
                    {startup.fundingStage}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                  {startup.description}
                </CardDescription>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2">
                  {startup.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                  {startup.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{startup.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Enhanced Company Info */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{startup.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Users className="h-4 w-4 text-green-500" />
                    <span>{startup.teamSize} employees</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span>Founded {startup.founded}</span>
                  </div>
                </div>

                {/* Enhanced Contact Info */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-blue-200 transition-all duration-200"
                    onClick={() => window.open(`mailto:${startup.email}`)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-purple-200 transition-all duration-200"
                    onClick={() => window.open(startup.website, '_blank')}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced No Results */}
        {filteredStartups.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No startups found</h3>
            <p className="text-gray-600 mb-8 text-lg">Try adjusting your search criteria or filters</p>
            <Button 
              onClick={clearFilters}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
