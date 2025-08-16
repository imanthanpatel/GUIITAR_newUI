import { useEffect, Fragment } from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { CalendarDays, FileText, Wallet } from "lucide-react";

function DashboardBreadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.replace(/^\/+|\/+$/g, "").split("/").slice(1); // remove 'dashboard'

  const labelize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const paths = segments.map((seg, idx) => ({
    name: labelize(seg),
    href: "/dashboard/" + segments.slice(0, idx + 1).join("/"),
  }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((p, i) => (
          <Fragment key={p.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {i === paths.length - 1 ? (
                <BreadcrumbPage>{p.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={p.href}>{p.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function Home() {
  const cards = [
    {
      title: "Applications",
      desc: "View your applications and create a new one",
      icon: FileText,
      to: "/dashboard/applications",
    },
    { title: "Events", desc: "Upcoming and past events", icon: CalendarDays, to: "/dashboard/events" },
    { title: "Refund", desc: "Request a refund", icon: Wallet, to: "/dashboard/refund" },
  ];
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
      {cards.map((c) => (
        <Link key={c.title} to={c.to} className="hover-scale">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <c.icon className="h-5 w-5 text-primary" /> {c.title}
              </CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </section>
  );
}

function Applications() {
  const apps = [
    { id: "GNT-2025-001", name: "AI Research Grant", status: "Under Review", updatedAt: "2025-08-01" },
    { id: "GNT-2025-014", name: "Sustainability Micro-Grant", status: "Approved", updatedAt: "2025-07-21" },
    { id: "GNT-2025-018", name: "Community Impact Fund", status: "Draft", updatedAt: "2025-08-10" },
  ];

  const statusVariant = (s: string) => {
    switch (s) {
      case "Approved":
        return "default" as const;
      case "Under Review":
        return "secondary" as const;
      case "Draft":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  return (
    <section className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Applications</h1>
        <Button>Create New Application</Button>
      </div>

      <div className="grid gap-4">
        {apps.map((a) => (
          <Card key={a.id} className="">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">{a.name}</CardTitle>
                <CardDescription>#{a.id} • Updated {a.updatedAt}</CardDescription>
              </div>
              <Badge variant={statusVariant(a.status)}>{a.status}</Badge>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const current = [
    { id: 1, title: "Grant Writing Workshop", date: "Aug 20, 2025" },
    { id: 2, title: "Innovation Demo Day", date: "Sep 02, 2025" },
  ];
  const past = [
    { id: 3, title: "Research Symposium", date: "May 11, 2025", attended: true },
    { id: 4, title: "Founders Fireside", date: "Apr 29, 2025", attended: false },
  ];

  return (
    <section className="space-y-8 animate-fade-in">
      <h1 className="text-2xl font-semibold tracking-tight">Events</h1>

      <div>
        <h2 className="text-base font-medium mb-3">Current</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {current.map((e) => (
            <Card key={e.id} className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" /> {e.title}
                </CardTitle>
                <CardDescription>{e.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" variant="secondary">View details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-base font-medium mb-3">Past</h2>
        <div className="space-y-3">
          {past.map((e) => (
            <Card key={e.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base">{e.title}</CardTitle>
                  <CardDescription>{e.date}</CardDescription>
                </div>
                {e.attended ? (
                  <Badge variant="default">You attended</Badge>
                ) : (
                  <Badge variant="outline">Not registered</Badge>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Refund() {
  return (
    <section className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-semibold tracking-tight">Refund</h1>
      <form className="max-w-2xl space-y-5">
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for refund</Label>
          <Select>
            <SelectTrigger id="reason">
              <SelectValue placeholder="Select a reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duplicate">Duplicate payment</SelectItem>
              <SelectItem value="cancelled">Event cancelled</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="details">Further details</Label>
          <Textarea id="details" placeholder="Please provide more information..." rows={6} />
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="secondary">Save draft</Button>
          <Button type="button">Submit</Button>
        </div>
      </form>
    </section>
  );
}

function Settings() {
  return (
    <section className="space-y-2 animate-fade-in">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">Manage your profile and preferences.</p>
    </section>
  );
}

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | GUIITAR Council";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Applicant dashboard: applications, events, refunds, settings.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Applicant dashboard: applications, events, refunds, settings.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center gap-3 border-b px-4">
            <SidebarTrigger className="" />
            <DashboardBreadcrumbs />
          </header>

          <main className="p-6">
            <Routes>
              <Route index element={<Home />} />
              <Route path="applications" element={<Applications />} />
              <Route path="events" element={<Events />} />
              <Route path="refund" element={<Refund />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="." />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
