"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Heart, BookOpen, LifeBuoy, FileText, Flower, MessageSquare, Archive, Users, BookMarked } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  // Mock steps data - replace with your actual content
  const steps: Step[] = [
    { id: 1, title: 'ข้อมูลส่วนตัว', icon: User, status: 'completed' },
    { id: 2, title: 'ค่านิยมและความเชื่อ', icon: Heart, status: 'current' },
    { id: 3, title: 'ความรู้การดูแล', icon: BookOpen, status: 'pending' },
    { id: 4, title: 'การยื้อชีวิต', icon: LifeBuoy, status: 'pending' },
    { id: 5, title: 'หนังสือแสดงเจตนา', icon: FileText, status: 'pending' },
    { id: 6, title: 'การดูแลด้านร่างกาย', icon: Flower, status: 'pending' },
    { id: 7, title: 'การสื่อสารข่าวร้าย', icon: MessageSquare, status: 'pending' },
    { id: 8, title: 'การจัดการร่างกาย', icon: Archive, status: 'pending' },
    { id: 9, title: 'ผู้ตัดสินใจแทน', icon: Users, status: 'pending' },
    { id: 10, title: 'บทส่งท้าย', icon: BookMarked, status: 'pending' }
  ];

  // Handle scroll to update current step
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-step]');
      let current = 1;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) {
          current = parseInt(section.getAttribute('data-step') || '1');
        }
      });
      
      setCurrentStep(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

interface Step {
    id: number;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    status: 'completed' | 'current' | 'pending';
}

interface StepContentProps {
    step: Step;
}

const handleStepClick = (stepId: number) => {
    const element = document.querySelector(`[data-step="${stepId}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

  const StepContent = ({ step }: { step: Step }) => {
    switch(step.id) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">ข้อมูลส่วนตัว</h2>
            <p className="text-gray-600">กรุณากรอกข้อมูลส่วนตัวของคุณให้ครบถ้วน</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">ข้อมูลทั่วไป</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="ชื่อ-นามสกุล" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="ชื่อเล่น" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="date" 
                    placeholder="วันเกิด" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">ข้อมูลสุขภาพ</h3>
                <div className="space-y-4">
                  <textarea 
                    placeholder="โรคประจำตัว" 
                    rows={3}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="โรงพยาบาลที่ใช้ประจำ" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">ค่านิยมและความเชื่อ</h2>
            <p className="text-gray-600">แบ่งปันค่านิยมและความเชื่อที่สำคัญต่อคุณ</p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">คุณค่าที่สำคัญที่สุด 3 อันดับ</h3>
              <div className="space-y-3">
                {['อยู่กับคนรัก', 'ไม่เป็นภาระคนอื่น', 'จากไปอย่างมีสติ', 'ไม่เจ็บปวด', 'ทำสิ่งที่ยังค้างคา'].map((value, index) => (
                  <label key={index} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <textarea 
                placeholder="สิ่งสำคัญที่อยากทำก่อนตาย" 
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea 
                placeholder="มุมมองต่อความตาย" 
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">ความรู้เกี่ยวกับการดูแล</h2>
            <p className="text-gray-600">ความเข้าใจเกี่ยวกับการดูแลแบบประคับประคอง</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <div className="h-24 bg-gray-100 rounded mb-3"></div>
                <p className="text-center text-gray-600">คำอธิบาย</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <div className="h-24 bg-gray-100 rounded mb-3"></div>
                <p className="text-center text-gray-600">คำอธิบาย</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <div className="h-24 bg-gray-100 rounded mb-3"></div>
                <p className="text-center text-gray-600">คำอธิบาย</p>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">การยื้อชีวิต / การกู้ชีพ</h2>
            <p className="text-gray-600">แสดงความเห็นต่อการยื้อชีวิตและการกู้ชีพ</p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">คำเตือน</h4>
                <p className="text-yellow-700">การยื้อชีวิตอาจทำให้เจ็บปวดเพิ่มขึ้นและไม่สามารถรักษาให้หายได้</p>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="resuscitation" className="w-4 h-4 text-blue-600" />
                  <span>ต้องการให้ยื้อชีวิตเต็มที่</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="resuscitation" className="w-4 h-4 text-blue-600" />
                  <span>ไม่ต้องการการยื้อชีวิต</span>
                </label>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">เนื้อหาสำหรับขั้นตอนนี้จะถูกเพิ่มเติมในภายหลัง</p>
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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">การแสดงเจตนาในวาระสุดท้าย</h2>
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
                          ? 'bg-[#00A4BD] text-white shadow-md' 
                          : isCompleted 
                            ? 'bg-teal-50 text-[#00A4BD] hover:bg-[#ABE6EF]' 
                            : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isActive 
                          ? 'bg-white bg-opacity-20' 
                          : isCompleted 
                            ? 'bg-teal-100' 
                            : 'bg-gray-200'
                      }`}>
                        {isCompleted ? (
                          <div className="w-2 h-2 bg-[#00A4BD] rounded-full"></div>
                        ) : (
                          <span className={`text-sm font-medium ${
                            isActive ? 'text-white' : 'text-gray-600'
                          }`}>
                            {step.id}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium truncate">{step.title}</span>
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
                <button className="px-8 py-3 bg-[#00A4BD] text-white rounded-lg hover:bg-teal-600 font-medium transition-colors">
                    บันทึกข้อมูล
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;