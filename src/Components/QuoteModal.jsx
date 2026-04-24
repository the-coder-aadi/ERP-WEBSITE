import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaTimes, FaLayerGroup, FaPaperPlane, FaSyncAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const QuoteModal = ({ isOpen, onClose, productsList, initialProduct,onSuccess }) => {
    // 1. States
    const [formData, setFormData] = useState({
        fullName: "", email: "", phone: "", institute: "",
        selectedProducts: [], captcha: ""
    });
    const [errors, setErrors] = useState({});
    const [generatedCaptcha, setGeneratedCaptcha] = useState("RP23KF");
    const [isGenerating, setIsGenerating] = useState(false);
      const [loading, setLoading] = useState(false);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Initial product selection & Reset
    useEffect(() => {
        if (isOpen) {
            setFormData({
                fullName: "", email: "", phone: "", institute: "",
                selectedProducts: initialProduct ? [initialProduct] : [],
                captcha: ""
            });
            setErrors({});
            handleRefreshCaptcha();
        }
    }, [isOpen, initialProduct]);

    // 2. Validation Logic
    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = true;

if (!formData.email) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
  newErrors.email = "Enter valid Gmail (example@gmail.com)";
}

         if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

        if (!formData.institute.trim()) newErrors.institute = true;

        if (formData.selectedProducts.length === 0) newErrors.products = true;

        if (formData.captcha.toUpperCase() !== generatedCaptcha.toUpperCase()) newErrors.captcha = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 3. Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
    };

    const toggleProduct = (name) => {
        setFormData(prev => {
            const isSelected = prev.selectedProducts.includes(name);
            const updated = isSelected
                ? prev.selectedProducts.filter(p => p !== name)
                : [...prev.selectedProducts, name];
            return { ...prev, selectedProducts: updated };
        });
        if (errors.products) setErrors(prev => ({ ...prev, products: false }));
    };

    const handleRefreshCaptcha = () => {
        setIsGenerating(true);
        setTimeout(() => {
            const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
            let code = "";
            for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
            setGeneratedCaptcha(code);
            setIsGenerating(false);
            setFormData(prev => ({ ...prev, captcha: "" }));
            if (errors.captcha) setErrors(prev => ({ ...prev, captcha: false }));
        }, 800);
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

if (!validate()) return;

  try {
    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycby4Qa7jLNEk4z8c8lH7wInzbGyGBXFvHmCG4U8CsBlKbvN-UWae5JXTsUYI8hGq4U7D-w/exec",
      {
        method: "POST",
        body: JSON.stringify({
          type: "Pricing Quote Request",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          instituteName: formData.institute,
          select: formData.selectedProducts,
          date: new Date().toLocaleString()
        })
      }
    );

    // ✅ Parent ko notify (toast show hoga)
    if (onSuccess) {
      onSuccess();
    }

    // ✅ Form reset
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      institute: "",
      selectedProducts: [],
      captcha: ""
    });

    setErrors({});
    handleRefreshCaptcha();

  } catch (error) {
    console.log(error);
    alert("❌ Error submitting form. Please try again.");
  } finally {
    setLoading(false);
  }
};
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white w-full max-w-[1200px] max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">

                    {/* Header */}
                    <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100 shrink-0">
                        <div className="flex items-center gap-3 text-[#6702bff3]">
                            <FaEnvelope className="text-xl" />
                            <h2 className="text-xl font-black uppercase tracking-tight">Request a Quote</h2>
                        </div>
                        <button onClick={onClose} className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
                            <FaTimes size={20} className="text-gray-400" />
                        </button>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="overflow-y-auto">
                        <div className="p-6 space-y-8">
                            {/* Inputs Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label className={`text-[13px] font-black uppercase ${errors.fullName ? 'text-red-500' : 'text-[#6702bf]'}`}>Full Name *</label>
                                    <div className="relative">
                                        <FaUser className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${errors.fullName ? 'text-red-400' : 'text-gray-400'}`} />
                                        <input
                                            name="fullName" value={formData.fullName} onChange={handleInputChange}
                                            type="text" placeholder="John Doe"
                                            className={`w-full bg-white border rounded-xl pl-9 pr-4 py-2.5 text-md font-medium outline-none transition-all ${errors.fullName ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200 focus:border-[#6702bf5d]'}`}
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label className={`text-[13px] font-black uppercase ${errors.email ? 'text-red-500' : 'text-[#6702bf]'}`}>Email *</label>
                                    <div className="relative">
                                        <FaEnvelope className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
                                        <input
                                            name="email" value={formData.email} onChange={handleInputChange}
                                            type="email" placeholder="you@example.com"
                                            className={`w-full bg-white border rounded-xl pl-9 pr-4 py-2.5 text-sm font-medium outline-none transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200 focus:border-[#6702bf5d]'}`}
                                        />
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="space-y-1.5">
                                    <label className={`text-[13px] font-black uppercase ${errors.phone ? 'text-red-500' : 'text-[#6702bf]'}`}>Phone *</label>
                                    <div className="relative">
                                        <FaPhoneAlt className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
                                        <input
                                            name="phone" value={formData.phone} onChange={handleInputChange}
                                            type="tel" placeholder="+91..."
                                            maxLength={10}
                                            className={`w-full bg-white border rounded-xl pl-9 pr-4 py-2.5 text-md font-medium outline-none transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200 focus:border-[#6702bf5d]'}`}
                                        />
                                    </div>
                                </div>
                                {/* Institute */}
                                <div className="space-y-1.5">
                                    <label className={`text-[13px] font-black uppercase ${errors.institute ? 'text-red-500' : 'text-[#6702bf]'}`}>Institute *</label>
                                    <div className="relative">
                                        <FaBuilding className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${errors.institute ? 'text-red-400' : 'text-gray-400'}`} />
                                        <input
                                            name="institute" value={formData.institute} onChange={handleInputChange}
                                            type="text" placeholder="e.g. Pune University"
                                            className={`w-full bg-white border rounded-xl pl-9 pr-4 py-2.5 text-sm font-medium outline-none transition-all ${errors.institute ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200 focus:border-[#6702bf5d]'}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Products Selection */}
                            <div className={`border rounded-2xl overflow-hidden shadow-sm transition-all ${errors.products ? 'border-red-500 ring-1 ring-red-50' : 'border-blue-100'}`}>
                                <div className={`px-4 py-3 flex items-center gap-3 border-b ${errors.products ? 'bg-red-50 border-red-200' : 'bg-blue-50/50 border-blue-100'}`}>
                                    <FaLayerGroup className={errors.products ? 'text-red-500' : 'text-[#6702bf]'} />
                                    <h3 className="text-md font-bold text-gray-800">Select Products {errors.products && <span className="text-red-500 text-xs ml-2">(At least one required)</span>}</h3>
                                </div>
                                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                    {productsList.map((product) => (
                                        <label key={product} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${formData.selectedProducts.includes(product) ? 'border-[#6702bf5d] bg-purple-50/20' : 'border-gray-200 hover:bg-gray-50'}`}>
                                            <input
                                                type="checkbox"
                                                checked={formData.selectedProducts.includes(product)}
                                                onChange={() => toggleProduct(product)}
                                                className="accent-[#6702bf] w-4 h-4 cursor-pointer"
                                            />
                                            <span className="text-sm text-gray-700 font-semibold">{product}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Footer / Captcha */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-50">
                                <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 rounded-2xl border transition-all ${errors.captcha ? 'border-red-500 bg-red-50' : 'bg-gray-50 border-gray-100'}`}>
                                    <div className="relative bg-white px-4 py-3 border-2 border-gray-200 rounded-xl overflow-hidden select-none shadow-inner flex items-center justify-center w-full sm:w-[160px] h-[52px] shrink-0">
                                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]"></div>
                                        <div className="absolute inset-0 pointer-events-none opacity-10">
                                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black -rotate-6"></div>
                                        </div>
                                        <span className={`relative z-10 font-mono font-black text-lg sm:text-xl italic tracking-[6px] text-gray-800 transition-all ${isGenerating ? "blur-md opacity-50" : "blur-[1px]"}`}>
                                            {isGenerating ? "..." : generatedCaptcha}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 w-full">
                                        <button type="button" onClick={handleRefreshCaptcha} className="p-3 text-[#6702bf] bg-white border border-gray-100 rounded-xl shadow-sm active:scale-95">
                                            <FaSyncAlt className={isGenerating ? "animate-spin" : ""} />
                                        </button>
                                        <input
                                            name="captcha" value={formData.captcha} onChange={handleInputChange}
                                            type="text" placeholder="CAPTCHA"
                                            className={`bg-white border-2 outline-none rounded-xl px-3 py-3 w-full sm:w-[130px] text-center font-black tracking-widest text-sm transition-all ${errors.captcha ? 'border-red-500 placeholder:text-red-300' : 'border-gray-100 focus:border-[#6702bf42]'}`}
                                        />
                                    </div>
                                </div>

                                <button disabled={loading}  type="submit" className="bg-[#cfb703] hover:bg-[#b09c02] text-white font-black px-10 py-4 rounded-xl shadow-lg flex items-center cursor-pointer gap-3 uppercase tracking-wider text-md transition-all active:scale-95">
                                   {loading ? "Submitting..." : "Submit Request"} <FaPaperPlane />
                                </button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default QuoteModal;