import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Litinity",
  url: "https://litinity.com",
  description: "Next-generation WebOS platform for seamless cloud computing",
  links: {
    twitter: "https://twitter.com/litinity",
    github: "https://github.com/litinity",
  },
  nav: {
    links: [
      { id: 1, name: "Features", href: "#features" },
      { id: 2, name: "Platform", href: "#platform" },
      { id: 3, name: "Solutions", href: "#solutions" },
      { id: 4, name: "Pricing", href: "#pricing" },
      { id: 5, name: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    badge: "Now in Public Beta",
    badgeIcon: <Icons.sparkles className="size-4" />,
    title: "Experience the Future of Cloud Computing with Litinity WebOS",
    description: "A revolutionary cloud-native operating system that transforms how you work, collaborate, and build in the cloud. Seamless, secure, and infinitely scalable.",
    cta: {
      primary: {
        text: "Get Started",
        href: "#",
      },
      secondary: {
        text: "Live Demo",
        href: "#",
      },
    },
  },
  companyShowcase: {
    title: "Trusted by innovative companies worldwide",
    companyLogos: [
      { id: 1, logo: <Icons.microsoft className="h-6 w-auto text-muted-foreground/60" /> },
      { id: 2, logo: <Icons.aws className="h-6 w-auto text-muted-foreground/60" /> },
      { id: 3, logo: <Icons.google className="h-6 w-auto text-muted-foreground/60" /> },
      { id: 4, logo: <Icons.intel className="h-6 w-auto text-muted-foreground/60" /> },
    ],
  },
  bentoSection: {
    title: "Cloud Computing Reimagined",
    description: "Experience the power of a true cloud-native operating system",
    items: [
      {
        id: 1,
        title: "Intelligent Workspace",
        description: "AI-powered workspace that adapts to your workflow",
        content: <FirstBentoAnimation />,
      },
      {
        id: 2,
        title: "Seamless Integration",
        description: "Connect with your favorite tools and services",
        content: <SecondBentoAnimation />,
      },
      {
        id: 3,
        title: "Real-time Analytics",
        description: "Monitor and optimize your cloud resources",
        content: <ThirdBentoAnimation data={[10, 45, 30, 60, 25, 70, 40]} toolTipValues={[1234, 2345, 3456, 4567]} />,
      },
      {
        id: 4,
        title: "Smart Scheduling",
        description: "Automated resource management and optimization",
        content: <FourthBentoAnimation />,
      },
    ],
  },
  quoteSection: {
    quote: "Litinity has transformed how our team works in the cloud. The seamless integration and intelligent workspace features have significantly improved our productivity.",
    author: {
      name: "Sarah Chen",
      role: "CTO at CloudTech Solutions",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    },
  },
  featureSection: {
    title: "Built for Modern Cloud Computing",
    description: "Powerful features that make cloud computing effortless",
    items: [
      {
        id: 1,
        title: "Cloud-Native Architecture",
        description: "Built from the ground up for cloud environments",
        image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg",
      },
      {
        id: 2,
        title: "Intelligent Resource Management",
        description: "AI-powered optimization of cloud resources",
        image: "https://images.pexels.com/photos/8439097/pexels-photo-8439097.jpeg",
      },
      {
        id: 3,
        title: "Enterprise Security",
        description: "Military-grade security and compliance features",
        image: "https://images.pexels.com/photos/8439098/pexels-photo-8439098.jpeg",
      },
    ],
  },
  growthSection: {
    title: "Scale with Confidence",
    description: "Built to grow with your business",
    items: [
      {
        id: 1,
        title: "Elastic Scaling",
        description: "Automatically scale resources based on demand",
        content: <ThirdBentoAnimation data={[20, 35, 50, 65, 45, 80, 60]} toolTipValues={[2345, 3456, 4567, 5678]} />,
      },
      {
        id: 2,
        title: "Global Distribution",
        description: "Deploy anywhere with edge computing support",
        content: <FourthBentoAnimation />,
      },
    ],
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that works best for you",
    pricingItems: [
      {
        name: "Starter",
        price: "$49",
        yearlyPrice: "$470",
        description: "Perfect for small teams and startups",
        buttonText: "Get Started",
        buttonColor: "bg-secondary text-secondary-foreground",
        features: [
          "Up to 5 users",
          "10GB cloud storage",
          "Basic analytics",
          "24/7 support",
        ],
      },
      {
        name: "Pro",
        price: "$99",
        yearlyPrice: "$950",
        description: "For growing businesses",
        buttonText: "Get Started",
        buttonColor: "bg-primary text-primary-foreground",
        features: [
          "Up to 20 users",
          "50GB cloud storage",
          "Advanced analytics",
          "Priority support",
          "Custom integrations",
        ],
        isPopular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        yearlyPrice: "Custom",
        description: "For large organizations",
        buttonText: "Contact Sales",
        buttonColor: "bg-secondary text-secondary-foreground",
        features: [
          "Unlimited users",
          "Unlimited storage",
          "Custom features",
          "Dedicated support",
          "SLA guarantee",
          "On-premise option",
        ],
      },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Litinity",
    faQitems: [
      {
        question: "What is Litinity WebOS?",
        answer: "Litinity WebOS is a cloud-native operating system that provides a complete platform for running applications and services in the cloud. It includes features like intelligent workspaces, resource management, and seamless integration with existing tools.",
      },
      {
        question: "How does pricing work?",
        answer: "Our pricing is based on your usage and team size. We offer flexible plans starting from $49/month for small teams. Enterprise customers can contact us for custom pricing.",
      },
      {
        question: "Is Litinity secure?",
        answer: "Yes, security is our top priority. We use military-grade encryption, regular security audits, and comply with major security standards including SOC 2, ISO 27001, and GDPR.",
      },
      {
        question: "Can I migrate my existing applications?",
        answer: "Yes, Litinity provides tools and support for migrating existing applications. Our team can help you plan and execute the migration process smoothly.",
      },
    ],
  },
  ctaSection: {
    title: "Start Your Cloud Journey Today",
    button: {
      text: "Get Started Free",
      href: "#",
    },
    subtext: "No credit card required",
    backgroundImage: "https://images.pexels.com/photos/8439099/pexels-photo-8439099.jpeg",
  },
  testimonials: [
    {
      id: "1",
      name: "Michael Roberts",
      role: "DevOps Lead at TechCorp",
      img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
      description: "Litinity has revolutionized our cloud infrastructure management. The automated scaling and intelligent resource allocation have reduced our costs by 40%.",
    },
    {
      id: "2",
      name: "Emily Johnson",
      role: "CTO at StartupX",
      img: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      description: "The seamless integration capabilities and intuitive interface make Litinity a game-changer for cloud computing.",
    },
    {
      id: "3",
      name: "David Chen",
      role: "Cloud Architect",
      img: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg",
      description: "As a cloud architect, I appreciate the robust security features and flexibility Litinity offers. It's truly enterprise-ready.",
    },
  ],
  footerLinks: [
    {
      title: "Product",
      links: [
        { id: 1, title: "Features", url: "#" },
        { id: 2, title: "Security", url: "#" },
        { id: 3, title: "Enterprise", url: "#" },
        { id: 4, title: "Pricing", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 1, title: "Documentation", url: "#" },
        { id: 2, title: "API Reference", url: "#" },
        { id: 3, title: "Status", url: "#" },
        { id: 4, title: "Blog", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Careers", url: "#" },
        { id: 3, title: "Contact", url: "#" },
        { id: 4, title: "Partners", url: "#" },
      ],
    },
  ],
};