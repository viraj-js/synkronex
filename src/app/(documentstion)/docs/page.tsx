"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Removed unused useState to fix lint error

import {
    Github,
    ArrowRight,
    Users,
    Star,
    GitBranch,
    ExternalLink,
    Heart,
    Bug
} from "lucide-react";

import { content } from './content/content.en'


export default function TaskManagerDocs() {

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 px-2 sm:px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-4">
                        <Heart className="w-3 h-3 mr-1 text-red-500" />
                        {content.hero.badge}
                    </Badge>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {content.hero.title}
                    </h1>
                    <p className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                        {content.hero.subtitle}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        {content.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
                        <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                            <GitBranch className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            {content.hero.buttons.getStarted}
                        </Button>
                        <Button variant="outline" size="lg" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            {content.hero.buttons.github}
                        </Button>
                        <Button variant="ghost" size="lg" className="group">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            {content.hero.buttons.demo}
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{content.hero.stats.contributors}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>{content.hero.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Bug className="w-4 h-4" />
                            <span>{content.hero.stats.issues}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section className="max-w-6xl mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{content.quickStart.title}</h2>
                    <p className="text-muted-foreground text-lg">{content.quickStart.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                    {content.quickStart.steps.map((step, index) => (
                        <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-lg">{step.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">{step.description}</p>
                                <div className="bg-gray-900 rounded-lg p-2 sm:p-4 overflow-x-auto max-w-full">
                                    <pre className="text-sm text-green-400">
                                        <code>{step.code}</code>
                                    </pre>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-muted/30 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">{content.techStack.title}</h2>
                        <p className="text-muted-foreground text-lg">{content.techStack.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.techStack.technologies.map((tech, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-lg">{tech.name}</h3>
                                        <Badge variant="outline" className={`text-${tech.color}-600 border-${tech.color}-200`}>
                                            {tech.category}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">{tech.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{content.features.title}</h2>
                    <p className="text-muted-foreground text-lg">{content.features.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {content.features.items.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 bg-${feature.color}-100 rounded-lg group-hover:bg-${feature.color}-200 transition-colors`}>
                                            <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                                        </div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Contribute Section */}
            <section className="bg-gradient-to-r from-black to-gray-950 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">{content.contribute.title}</h2>
                        <p className="text-muted-foreground text-lg">{content.contribute.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                        {content.contribute.ways.map((way, index) => {
                            const Icon = way.icon;
                            return (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 bg-${way.color}-100 rounded-lg group-hover:bg-${way.color}-200 transition-colors`}>
                                                <Icon className={`w-6 h-6 text-${way.color}-600`} />
                                            </div>
                                            <h3 className="font-semibold text-lg">{way.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{way.description}</p>
                                        <div className="flex gap-2">
                                            {way.actions.map((action, actionIndex) => (
                                                <Button key={actionIndex} variant="outline" size="sm" className="group">
                                                    {action}
                                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="max-w-6xl mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{content.resources.title}</h2>
                    <p className="text-muted-foreground text-lg">{content.resources.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.resources.items.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                            <Icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="font-semibold">{resource.title}</h3>
                                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Community Section */}
            <section className="bg-muted/30 py-16">
                <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">{content.community.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{content.community.subtitle}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {content.community.platforms.map((platform, index) => {
                            const Icon = platform.icon;
                            return (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6 text-center">
                                        <div className="flex justify-center mb-4">
                                            <div className={`p-4 bg-${platform.color}-100 rounded-full group-hover:bg-${platform.color}-200 transition-colors`}>
                                                <Icon className={`w-6 h-6 text-${platform.color}-600`} />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                                        <Button variant="outline" size="sm" className="group">
                                            Join Now
                                            <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}