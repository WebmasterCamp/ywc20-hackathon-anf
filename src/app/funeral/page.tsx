"use client";

import { motion } from "framer-motion";
import {
    Archive,
    BookOpen,
    MapPin,
    Shirt
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FuneralForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState<string>("");

  // Mock steps data - replace with your actual content
  const steps: Step[] = [
    { id: 1, title: "รูปแบบพิธีกรรม", icon: BookOpen, status: "completed" },
    { id: 2, title: "สถานที่จัดงาน", icon: MapPin, status: "current" },
    { id: 3, title: "หีบศพ", icon: Archive, status: "pending" },
    { id: 4, title: "ธีมการแต่งกาย", icon: Shirt, status: "pending" },
  ];

  // Handle scroll to update current step
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step]");
      let current = 1;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) {
          current = parseInt(section.getAttribute("data-step") || "1");
        }
      });

      setCurrentStep(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface Step {
    id: number;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    status: "completed" | "current" | "pending";
  }

  interface StepContentProps {
    step: Step;
  }

  const handleStepClick = (stepId: number) => {
    const element = document.querySelector(`[data-step="${stepId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const StepContent = ({ step }: { step: Step }) => {
    switch (step.id) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">รูปแบบพิธีกรรม</h2>
            <p className="text-gray-600">เลือกรูปแบบพิธีที่ต้องการ</p>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="resuscitation"
                  className="w-4 h-4 text-blue-600"
                />
                <span>อิงตามศาสนา</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="resuscitation"
                  className="w-4 h-4 text-blue-600"
                />
                <span>ไม่อิงตามศาสนา</span>
              </label>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">สถานที่จัดงาน</h2>
            <p className="text-gray-600">เลือกสถานที่ที่คุณต้องการให้จัดงาน</p>

            <div>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">กรุณาเลือกสถานที่</option>
                <option>วัดศรีสำโรง</option>
                <option>วัดพระแก้ว</option>
                <option>ศาลาเอนกประสงค์</option>
                <option>บ้านของครอบครัว</option>
                <option>สุสานสาธารณะ</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">หีบศพ</h2>
            <p className="text-gray-600">เลือกรูปแบบหีบศพที่ต้องการ</p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Box 1 */}
              <div
                onClick={() => setSelected("A")}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 
                  ${
                    selected === "A"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }
                  hover:border-blue-400 hover:bg-blue-50
                `}
              >
                <img
                  src="https://obittree.frontrunnerpro.com/runtime/311039/ims/ProductGen/inc/cache/images/352775.png"
                  className="w-full h-24 fit-cover rounded mb-3"
                />
                <p className="text-center text-gray-600">หีบไม้พื้นฐาน</p>
              </div>

              {/* Box 2 */}
              <div
                onClick={() => setSelected("B")}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 
                  ${
                    selected === "B"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }
                  hover:border-blue-400 hover:bg-blue-50
                `}
              >
                <img
                  src="/image/gold.png"
                  className="w-full h-24 object-cover rounded mb-3"
                />
                <p className="text-center text-gray-600">หีบโลหะหรู</p>
              </div>

              {/* Box 3 */}
              <div
                onClick={() => setSelected("C")}
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 
                  ${
                    selected === "C"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }
                  hover:border-blue-400 hover:bg-blue-50
                `}
              >
                <img
                  src="/image/lego.png"
                  className="w-full h-24 object-cover rounded mb-3"
                />
                <p className="text-center text-gray-600">หีบเลโก้</p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">ธีมการแต่งกาย</h2>
            <p className="text-gray-600">
              กำหนดธีมการแต่งกายสำหรับผู้เข้าร่วมภายในงาน
            </p>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="dress-theme"
                  className="w-4 h-4 text-blue-600"
                />
                <span>ขาว-ดำ</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="dress-theme"
                  className="w-4 h-4 text-blue-600"
                />
                <span>ดำล้วน</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="dress-theme"
                  className="w-4 h-4 text-blue-600"
                />
                <span>ขาวล้วน</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="dress-theme"
                  className="w-4 h-4 text-blue-600"
                />
                <span>ชุดสุภาพ</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="dress-theme"
                  className="w-4 h-4 text-blue-600"
                />
                <span>อื่นๆ</span>
              </label>
              <textarea
                placeholder="รายละเอียดธีมอื่นๆ (ถ้ามี)..."
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">
              เนื้อหาสำหรับขั้นตอนนี้จะถูกเพิ่มเติมในภายหลัง
            </p>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <step.icon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">เนื้อหาอยู่ระหว่างการพัฒนา</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          ออกแบบพิธีศพในแบบของคุณ
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Progress Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="space-y-1">
                {steps.map((step, index) => {
                  const isActive = currentStep === step.id;
                  const isCompleted = step.id < currentStep;
                  const StepIcon = step.icon;

                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? "bg-[#00A4BD] text-white shadow-md"
                          : isCompleted
                          ? "bg-teal-50 text-[#00A4BD] hover:bg-[#ABE6EF]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isActive
                            ? "bg-white bg-opacity-20"
                            : isCompleted
                            ? "bg-teal-100"
                            : "bg-gray-200"
                        }`}
                      >
                        {isCompleted ? (
                          <div className="w-2 h-2 bg-[#00A4BD] rounded-full"></div>
                        ) : (
                          <span
                            className={`text-sm font-medium ${
                              isActive ? "text-white" : "text-gray-600"
                            }`}
                          >
                            {step.id}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium truncate">
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              {steps.map((step) => (
                <section
                  key={step.id}
                  data-step={step.id}
                  className="bg-white/70 rounded-xl shadow-sm p-8 "
                >
                  <StepContent step={step} />
                </section>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center mt-8 p-6 rounded-xl">
              <button
                className="px-8 py-3 bg-[#00A4BD] text-white rounded-lg hover:bg-teal-600 font-medium transition-colors"
                onClick={() => router.push("/summary")}
              >
                ดูผลสรุป
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralForm;
