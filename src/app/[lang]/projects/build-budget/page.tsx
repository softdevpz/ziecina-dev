import { caseStudyRoute } from "@/components/case-study/caseStudyPage";

const route = caseStudyRoute("buildBudget");

export const generateMetadata = route.generateMetadata;
export default route.Page;
