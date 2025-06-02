"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Heart, BookOpen, LifeBuoy, FileText, Flower, MessageSquare, Archive, Users, BookMarked } from 'lucide-react';
import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  status: 'completed' | 'current' | 'pending';
}

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

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
          <div className="space-y-6" data-step={step.id}>
            <h2 className="text-2xl font-bold text-gray-800">ข้อมูลส่วนตัว</h2>
            <p className="text-gray-600">กรุณากรอกข้อมูลส่วนตัวของคุณให้ครบถ้วน</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">ข้อมูลทั่วไป</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="ชื่อ-นามสกุล" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <input type="text" placeholder="ชื่อเล่น" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <input type="date" placeholder="วันเกิด" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">ข้อมูลสุขภาพ</h3>
                <div className="space-y-4">
                  <textarea placeholder="โรคประจำตัว" rows={3} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <input type="text" placeholder="โรงพยาบาลที่ใช้ประจำ" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6" data-step={step.id}>
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
              <textarea placeholder="สิ่งสำคัญที่อยากทำก่อนตาย" rows={4} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <textarea placeholder="มุมมองต่อความตาย" rows={4} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6" data-step={step.id}>
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
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">การแสดงเจตนาในวาระสุดท้าย</h2>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="space-y-1">
                {steps.map((step) => {
                  const isActive = step.id === currentStep;
                  return (
                    <div key={step.id} className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-blue-100' : 'hover:bg-gray-100'}`} onClick={() => handleStepClick(step.id)}>
                      <step.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                      <span className={`text-sm font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>{step.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-16">
            {steps.map((step) => (
              <StepContent key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
