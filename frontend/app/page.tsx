import React from "react"
import { LocationMap } from "@/components/ui/expand-map"
import { ArrowRight, Map, Database, Network, FileBarChart, Lock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-muted">
      
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-emerald-500" />
            <span className="font-semibold tracking-tight">Spatial Engine</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </button>
            {/* Mock Login / Access mechanism based on open-backend architecture */}
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-colors">
              <Lock className="w-3.5 h-3.5" />
              Agent Portal Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-500 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Multi-Agent Architecture v2.8 Live
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Autonomous Spatial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Network Optimization</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Evaluate quick-commerce catchment areas, identify healthcare deserts, and run multi-agent spatial simulations using live infrastructure data.
          </p>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-md text-base font-medium transition-colors">
              Initialize Workspace <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end items-center min-h-[400px]">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full" />
          
          {/* Integrated Required Component */}
          <LocationMap 
            location="Borivali Hub Analysis"
            coordinates="19.2288° N, 72.8541° W"
            className="w-full max-w-[360px]"
          />
        </div>
      </main>

      {/* Feature Capabilities based on Backend Insights */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Agent Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our open-architecture backend uses distributed agents to ingest datasets, parse real-time OpenStreetMap nodes, and compute optimal spatial coordinates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1: Data Ingestion */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tabular & Spatial Ingestion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Post CSV, Excel, or GeoJSON datasets to <code className="text-xs bg-muted px-1.5 py-0.5 rounded">/api/optimize</code>. The Perception Agent validates coordinates and parses demographics instantly.
              </p>
            </div>

            {/* Feature 2: Optimization Engine */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">K-Means Hub Optimization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizing Scikit-Learn clusters, the backend calculates optimal dark store placements and emergency dispatch hubs based on 2026 population density projections.
              </p>
            </div>

            {/* Feature 3: Policy Reports */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <FileBarChart className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Policy Synthesis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generates executive memorandums summarizing blinkit coverage percentage, healthcare vulnerability scores, and average transit radiuses.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
