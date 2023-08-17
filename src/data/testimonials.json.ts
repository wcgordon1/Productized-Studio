export interface Template {

  avatar: string;
  course: string;
  grade: string;
  student: string;
  feedback: string;
};
const one: Template = {

  avatar: "/avatars/head4.svg",
  grade: "Digital Marketing",
  course: "Digital Marketing",
  student: "Roberto Johnson",
  feedback: "I'm amazed by the quality of courses offered on this platform. The instructors are experts in their fields, and the interactive learning approach keeps me engaged. I've gained skills I can immediately apply to my career",
}
const two: Template = {

  avatar: "/avatars/head9.svg",
  grade: "Digital Marketing",
  course: "Data Science",
  student: "Emilia Pirelli",
  feedback: "As a full-time professional, I needed flexible learning options. This platform exceeded my expectations. The self-paced courses and diverse subjects let me customize my learning journey. I've gained new skills that helped me stand out in my industry.",
}
const three: Template = {

  avatar: "/avatars/head6.svg",
  grade: "Digital Marketing",
  course: "Creative Writing",
  student: "Fino Como",
  feedback: "The community here is incredible. From insightful discussions to peer feedback, I feel supported every step of the way. The certifications I earned have boosted my resume, and I've found a platform that truly values my growth.",
}
export const byName = {
    one,
    two,
    three,
};
export const testimonials = Object.values(byName);
