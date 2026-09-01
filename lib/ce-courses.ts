export type CeCourseStatus = "upcoming" | "past";

export type CeCourse = {
  id: string;
  status: CeCourseStatus;
  format: string;
  title: string;
  dateTime?: string;
  presenter?: string;
  host?: string;
  description?: string;
  ceuCredits?: string;
  registerUrl?: string;
  isPlaceholder?: boolean;
};

export const ceCourses: CeCourse[] = [
  {
    id: "psychological-safety-disability-management",
    status: "upcoming",
    format: "Upcoming · Virtual Webinar",
    title: "Psychological Safety as a Disability Management Strategy",
    dateTime: "Oct 6, 2026 | 9 AM PT / 12 PM ET",
    presenter: "Dr. Kristin Tugman — Atlanta Life",
    host: "Hosted by DMEC",
    description:
      "How psychological safety impacts disability management outcomes — examining how trust, disclosure, and workplace culture shape return-to-work success.",
    ceuCredits: "1 ADMS · 1 CDMS · 1 CLMS · 1 PHR · 1 CPDM · 1 SHRM",
    registerUrl: "#",
  },
  {
    id: "upcoming-placeholder-1",
    status: "upcoming",
    format: "Upcoming · Placeholder",
    title: "Course title",
    isPlaceholder: true,
  },
  {
    id: "upcoming-placeholder-2",
    status: "upcoming",
    format: "Upcoming · Placeholder",
    title: "Course title",
    isPlaceholder: true,
  },
];

export function getCoursesByStatus(status: CeCourseStatus): CeCourse[] {
  return ceCourses.filter((course) => course.status === status);
}
