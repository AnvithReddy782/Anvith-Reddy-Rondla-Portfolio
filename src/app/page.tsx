import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import MigrationStory from '@/components/MigrationStory';
import PMLayer from '@/components/PMLayer';
import AutomationsSection from '@/components/AutomationsSection';
import SystemsAtScale from '@/components/SystemsAtScale';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import { getGlobalData, getProjects } from '@/lib/content';

export default async function Home() {
    const status = getGlobalData('status') || { status: "System Active", available: true, lastUpdated: "Live" };
    const metrics = getGlobalData('metrics') || { employeesSaved: 152, automationHoursMonth: 450, infrastructureCost: 0 };
    const projects = await getProjects();

    return (
        <main className="relative">
            <HeroSection status={status} />
            <AboutSection status={status} metrics={metrics} />
            <ProjectsSection projects={projects} />
            <MigrationStory />
            <PMLayer />
            <AutomationsSection />
            <SystemsAtScale />
            <ContactSection />
            <Footer />
            <AIAssistant />
        </main>
    );
}