import React, { useState } from 'react';
import { X, MessageCircle, Send, Mail, Phone, User, FileText, ChevronRight, ArrowLeft } from 'lucide-react';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<'options' | 'form'>('options');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });

    const handleSendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Inquiry from ${formData.name} - ${formData.service}`;
        const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.open(`mailto:teraramarketing@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-white rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-brand-red p-6 text-white text-center relative">
                    {view === 'form' && (
                        <button
                            onClick={() => setView('options')}
                            className="absolute top-4 left-4 p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <h3 className="text-2xl font-black uppercase tracking-wide mb-1">Get a Quote</h3>
                    <p className="text-white/80 text-sm">
                        {view === 'options' ? 'Choose your preferred contact method' : 'Tell us about your project'}
                    </p>
                </div>

                {/* Content */}
                <div className="p-6">
                    {view === 'options' ? (
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://wa.me/251988559355"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                                    <p className="text-xs text-gray-500">Fastest response time</p>
                                </div>
                            </a>

                            <a
                                href="https://t.me/teraramarketing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                    <Send size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Telegram</h4>
                                    <p className="text-xs text-gray-500">Chat with our team</p>
                                </div>
                            </a>

                            <button
                                onClick={() => setView('form')}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all group w-full text-left"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800">Email Form</h4>
                                    <p className="text-xs text-gray-500">Fill out a quick form</p>
                                </div>
                                <ChevronRight className="text-gray-400" />
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSendEmail} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Service</label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                    <select
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none appearance-none"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Offset Printing</option>
                                        <option>Digital Printing</option>
                                        <option>Large Format</option>
                                        <option>Branding</option>
                                        <option>Packaging</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Message</label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none resize-none"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-red text-white font-bold uppercase py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Mail size={18} />
                                Compose Email
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
