import HeroSection from "@/components/HeroSection";
import FundingPrograms from "@/components/FundingPrograms";
import ApplicationProcess from "@/components/ApplicationProcess";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import ScheduleConsultation from "@/components/ScheduleConsultation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FundingPrograms />
      <ApplicationProcess />
      <SuccessStories />
      <FAQ />
      <Resources />
      <FinalCTA />
      <Footer />

      <Modal id="assessment-modal">
        <AssessmentQuiz />
      </Modal>
      <Modal id="consultation-modal">
        <ScheduleConsultation />
      </Modal>
    </main>
  );
};

export default Index;
