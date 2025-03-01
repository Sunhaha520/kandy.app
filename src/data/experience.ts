import type { ExperienceProps } from "../types/experience.props";

export const EXPERIENCE: ExperienceProps[] = [
  {
    dates: "2024.12 — 2025.02 ",
    title: "RATE@UM学术网站",
    company: "",
    companyUrl: "https://www.rategroup.cn",
    description:
    "主导开发了基于Next.js框架的静态学术网站，通过服务端渲染(SSR)和静态生成(SSG)技术实现快速页面加载，首屏加载时间控制在1秒以内。采用响应式设计和现代UI组件，确保在移动端和桌面端均能提供一致的用户体验。使用TypeScript增强代码可维护性，结合Tailwind CSS实现高效样式开发。通过Vite构建工具优化开发体验，显著提升构建速度。成功交付了具有完善功能和优雅界面的学术平台。",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    logo: "/images/R.png",
  },
  {
    dates: "2024.08 — 2025.02",
    title: "High-Fidelity Texture Completion for Architectural Point Clouds",
    company: "",
    companyUrl: "",
    description:
      "基于室内建筑场景的点云数据，运用深度学习与几何优化算法，精准补全缺失区域，确保空间结构的完整性与连续性。通过语义分割技术，识别并分类墙体、门窗等建筑元素，增强场景的语义理解能力。最终生成高精度、高保真的室内建筑点云模型，为空间规划、改造设计，历史遗迹保护等应用提供可靠的数据支撑。",
    technologies: [
      "Python",
      "NumPy",
      "RANSAC",
      "PCL",
      "Open3D",
      "YOLOv8",
      "BIM",
      "OpenCV"
    ],
    logo: "/images/3D.png",
  },
  {
    dates: "2024.10 — 2024.11",
    title: "AI 二次元小助理网页应用",
    company: "",
    companyUrl: " https://aibot1.kelejun.cn/",
    description:
      "独立完成了 AI 二次元小助理网页应用的产品需求文档（PRD）撰写与核心功能开发，从需求分析到功能实现全程主导，确保项目高效推进与高质量交付。撰写了清晰、详尽的 PRD 文档，涵盖产品功能定义、交互逻辑设计及技术实现方案。完成了人物模型选择系统的开发，支持用户自定义二次元角色形象，并实现了语音交互引擎，集成语音识别与合成技术，提供自然流畅的对话交互。采用敏捷开发模式，为后续功能扩展与产品迭代奠定了坚实的技术基础。",
    technologies: [
      "Tailwind CSS",
      "React.js",
      "JavaScript",
      "HTML",
      "Live2D",
      "OpenAI",
      "​Axure RP​",
    ],
    logo: "/images/2.png",
  },
  {
    dates: "2024.11 — 2024.12",
    title: "施工安全检测与报告生成系统",
    company: "",
    companyUrl: "https://photos.onedrive.com/share/FF33F5E9BB5EC4DA!1528?cid=FF33F5E9BB5EC4DA&resId=FF33F5E9BB5EC4DA!1528&ithint=video&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy9mZjMzZjVlOWJiNWVjNGRhL0lRTGF4RjY3NmZVeklJRF8tQVVBQUFBQUFJT2sxcXY5U2VZdXFKY0FBQUFBQUFB",
    description:
      "结合 YOLO 目标检测算法与 AI 技术，成功开发了一套自动化工地图像分析系统，能够智能识别安全隐患并生成详细的安全报告，显著提升工地安全管理效率。负责从需求分析、技术选型到功能开发与测试的全流程工作，深入分析工地安全管理需求，确定以 YOLO 为核心的目标检测方案，并集成 OpenCV 和 TensorFlow 实现图像处理与模型训练。设计并开发了简洁直观的用户界面，支持图像上传、分析结果展示与报告生成功能，同时优化模型性能，提升处理速度与识别精度，确保系统满足实时分析需求。最终交付了一套高效、可靠的解决方案，为工地安全管理提供了强有力的技术支持。",
    technologies: ["Python", "YOLOv11", "OpenAI", "OpenCV","​Axure RP"],
    logo: "/images/sg.png",
  },
];
