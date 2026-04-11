import React from "react";
import {
  Anchor,
  Boxes,
  Ship,
  Route,
  ChevronRight,
  Menu,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-800 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Anchor size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">PortFlow</h1>
              <p className="text-xs text-slate-500">Port Management System</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 transition hover:text-slate-900">
              Features
            </a>
            <a href="#overview" className="text-sm text-slate-600 transition hover:text-slate-900">
              Overview
            </a>
            <a href="#workflow" className="text-sm text-slate-600 transition hover:text-slate-900">
              Workflow
            </a>
            <a href="#contact" className="text-sm text-slate-600 transition hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
              Get Started
            </button>
          </div>

          <button className="md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            

            <h2 className="text-6xl font-bold leading-tight text-white">
             Everything is in one
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              PortFlow helps teams simplify port management with a modern platform
              for tracking operations, organizing cargo movement, and improving
              visibility across the full transport workflow.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Explore Platform
                <ChevronRight className="ml-2" size={18} />
              </button>

            
            </div>
          </div>

          <div className="mt-14 lg:mt-0 lg:w-[42%]">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Active Ports</p>
                  <h3 className="mt-2 text-3xl font-semibold">12</h3>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Trips Managed</p>
                  <h3 className="mt-2 text-3xl font-semibold">248</h3>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Containers</p>
                  <h3 className="mt-2 text-3xl font-semibold">1,420</h3>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Fleet Status</p>
                  <h3 className="mt-2 text-3xl font-semibold">Stable</h3>
                </div>
              </div>

              <div className="mt-4 rounded-3xl bg-slate-900 p-6 text-white">
                <p className="text-sm text-slate-300">System insight</p>
                <h4 className="mt-2 text-xl font-medium">
                  A unified dashboard for smoother coordination and better control.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Features
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything needed for efficient port operations.
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={<Anchor size={22} />}
              title="Port Management"
              description="Create, organize, and monitor ports with a clear and structured management interface."
            />
            <FeatureCard
              icon={<Ship size={22} />}
              title="Vehicle Tracking"
              description="Track ships and trucks across routes and monitor movement between ports in real time."
            />
            <FeatureCard
              icon={<Boxes size={22} />}
              title="Container Control"
              description="Manage container operations, loading status, and cargo details with better visibility."
            />
            <FeatureCard
              icon={<Route size={22} />}
              title="Trip Monitoring"
              description="Plan and supervise trips with clearer timelines, route flow, and operational updates."
            />
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Overview
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Built for clarity, speed, and modern logistics workflows.
              </h3>
              <p className="mt-5 text-slate-600 leading-8">
                PortFlow is designed to remove complexity from day-to-day port
                operations. With a minimal interface and focused structure, teams
                can quickly manage assets, review transport data, and coordinate
                logistics without unnecessary friction.
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-8 text-white">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Why PortFlow
              </p>
              <div className="mt-6 space-y-5">
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-medium">Minimal dashboard</h4>
                  <p className="mt-2 text-slate-300">
                    A clean design that helps users focus on actions and information.
                  </p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-medium">Better coordination</h4>
                  <p className="mt-2 text-slate-300">
                    Centralize ports, vehicles, containers, and routes in one place.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Scalable foundation</h4>
                  <p className="mt-2 text-slate-300">
                    Suitable for extending into a full logistics or port operation platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Workflow
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A simple flow from planning to monitoring.
            </h3>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <WorkflowCard
                step="01"
                title="Register operations"
                description="Set up ports, vehicles, and core logistics data in the system."
              />
              <WorkflowCard
                step="02"
                title="Manage movement"
                description="Assign trips, track routes, and monitor transport activities."
              />
              <WorkflowCard
                step="03"
                title="Review performance"
                description="See operational status and improve decisions with clearer visibility."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[36px] bg-slate-950 px-8 py-14 text-center text-white sm:px-12">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Start with PortFlow
            </p>
            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A minimal port management experience designed for real operational value.
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-slate-300 leading-8">
              Build a smarter logistics workflow with a system that keeps everything
              simple, structured, and easy to manage.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Launch Demo
              </button>
              <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-white transition hover:border-slate-500">
                Contact Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 PortFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
        {icon}
      </div>
      <h4 className="mt-5 text-xl font-semibold">{title}</h4>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function WorkflowCard({ step, title, description }) {
  return (
    <div className="rounded-[28px] bg-slate-50 p-6">
      <p className="text-sm font-medium text-slate-400">{step}</p>
      <h4 className="mt-3 text-xl font-semibold text-slate-900">{title}</h4>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}