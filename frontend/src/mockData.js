// Mock data for VeriHub landing page

export const features = [
  {
    id: 1,
    title: "AI-Based Media Verification",
    description: "Advanced DeepFake detection and image forensics using cutting-edge AI algorithms.",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Dynamic Verification Badges",
    description: "Generate unique, tamper-proof verification badges for authenticated media.",
    icon: "BadgeCheck"
  },
  {
    id: 3,
    title: "Quick HTML/PDF Reports",
    description: "Download comprehensive verification reports in multiple formats instantly.",
    icon: "FileText"
  },
  {
    id: 4,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption and data protection.",
    icon: "Lock"
  },
  {
    id: 5,
    title: "Real-time Status Updates",
    description: "Track verification progress with live updates and instant notifications.",
    icon: "Activity"
  },
  {
    id: 6,
    title: "Batch Processing",
    description: "Verify multiple media files simultaneously with our powerful batch engine.",
    icon: "Layers"
  }
];

export const steps = [
  {
    id: 1,
    title: "Upload Media",
    description: "Drag and drop or select your image, video, or audio files for verification.",
    icon: "Upload"
  },
  {
    id: 2,
    title: "AI Verification Runs",
    description: "Our AI algorithms analyze the media for manipulation, deepfakes, and authenticity markers.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Badge + Report Generated",
    description: "Receive your verification badge and comprehensive report in seconds.",
    icon: "CheckCircle"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Investigative Journalist",
    company: "Global News Network",
    content: "VeriHub has become an essential tool in our newsroom. The AI verification is incredibly accurate and saves us hours of fact-checking.",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Digital Forensics Expert",
    company: "CyberSec Solutions",
    content: "The deepfake detection capabilities are outstanding. We've integrated VeriHub into our forensic workflow with excellent results.",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Content Manager",
    company: "MediaVerify Inc",
    content: "Easy to use, fast results, and the PDF reports are perfect for our clients. VeriHub has streamlined our entire verification process.",
    avatar: "PP"
  }
];

export const demoData = {
  recentVerifications: [
    {
      id: "VH-2024-001",
      filename: "press_conference_video.mp4",
      status: "Verified",
      confidence: 98.5,
      timestamp: "2 minutes ago",
      type: "video"
    },
    {
      id: "VH-2024-002",
      filename: "profile_image.jpg",
      status: "Manipulated",
      confidence: 87.3,
      timestamp: "15 minutes ago",
      type: "image"
    },
    {
      id: "VH-2024-003",
      filename: "audio_interview.mp3",
      status: "Verified",
      confidence: 95.2,
      timestamp: "1 hour ago",
      type: "audio"
    },
    {
      id: "VH-2024-004",
      filename: "document_scan.pdf",
      status: "Under Review",
      confidence: null,
      timestamp: "Processing...",
      type: "document"
    }
  ],
  stats: {
    totalVerifications: 127543,
    accuracy: 99.2,
    avgProcessTime: "3.2s",
    deepfakesDetected: 8721
  }
};