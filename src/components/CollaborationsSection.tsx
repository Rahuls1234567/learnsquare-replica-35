"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, ChevronLeft, ChevronRight, Plus, Trash2, Edit3, Camera, Save, X } from "lucide-react";
import { EditableContent } from "./EditableContent";
import { useAdmin } from "@/src/context/AdminContext";
import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { toast } from "sonner";

const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
  { image: "/images/client-3.png", title: "MoU with SHADAN for MySkillForge Program" },
  { image: "/images/client-4.png", title: "MoU with GPREC for Training" },
];

interface CollaborationsSectionProps {
  id?: string;
}

const CollaborationsSection = ({ id }: CollaborationsSectionProps) => {
  const { isAdmin, editMode } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const [collabList, setCollabList] = useState<any[]>(collaborations);
  
  // Review Modal State
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [editingReview, setEditingReview] = useState<any>(null);
  const [reviewForm, setReviewForm] = useState({ name: "", role: "", text: "", rating: 5, page: "home", image: "" });

  // Collab Image Modal State
  const [showCollabModal, setShowCollabModal] = useState(false);
  const [collabForm, setCollabForm] = useState({ image: "", title: "" });
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [reviewDragActive, setReviewDragActive] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews?page=home");
      if (res.ok) {
        const data = await res.json();
        setReviews(data || []);
      }
    } catch (error) {
      console.warn("Failed to fetch reviews:", error);
    }
  };

  const fetchCollabs = async () => {
    try {
      const res = await fetch("/api/content/client_collaborations_json");
      if (res.ok) {
        const data = await res.json();
        if (data.htmlContent) {
          try {
            const list = JSON.parse(data.htmlContent);
            if (Array.isArray(list) && list.length > 0) setCollabList(list);
          } catch (e) {}
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchReviews();
    fetchCollabs();
  }, []);

  const handleSaveReview = async () => {
    const url = editingReview ? `/api/admin/reviews/${editingReview.id}` : "/api/admin/reviews";
    const method = editingReview ? "PUT" : "POST";
    
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewForm),
      });
      if (res.ok) {
        toast.success(editingReview ? "Review updated!" : "Review added!");
        setShowReviewModal(false);
        fetchReviews();
      }
    } catch (error) {
      toast.error("Failed to save review");
    }
  };

  const handleDeleteReview = async (id: number) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Review deleted");
        fetchReviews();
      }
    } catch (error) {
      toast.error("Failed to delete review");
    }
  };

  const handleSaveCollabs = async (newList: any[]) => {
    try {
      setUploading(true);
      await fetch("/api/admin/content/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content_key: "client_collaborations_json",
          html_content: JSON.stringify(newList),
        }),
      });
      setCollabList(newList);
      setCollabForm({ image: "", title: "" });
      toast.success("Collaborations updated and saved to public!");
    } catch (error) {
      toast.error("Failed to save collaborations");
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent, type: 'collab' | 'review') => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      if (type === 'collab') setDragActive(true);
      else setReviewDragActive(true);
    } else if (e.type === "dragleave") {
      if (type === 'collab') setDragActive(false);
      else setReviewDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent, type: 'collab' | 'review') => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'collab') {
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageUpload(e, 'collab');
      }
    } else {
      setReviewDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageUpload(e, 'review');
      }
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent, uploadType: 'collab' | 'review') => {
    let file: File | undefined;
    
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      file = e.dataTransfer.files[0];
    }

    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("subfolder", uploadType === 'collab' ? "collabs" : "reviews");
    
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        if (uploadType === 'collab') {
          setCollabForm(prev => ({ ...prev, image: data.url }));
        } else {
          setReviewForm(prev => ({ ...prev, image: data.url }));
        }
        toast.success("Image uploaded!");
      }
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % collabList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + collabList.length) % collabList.length);
  };

  return (
    <section id={id} className="py-24 md:py-32 relative overflow-hidden bg-[#ffffff] font-sans">
      {/* Background System */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[1400px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-indigo-50/50 backdrop-blur-xl border border-indigo-100 shadow-[0_10px_30px_rgba(99,102,241,0.05)]"
          >
            <Handshake className="w-4 h-4 text-indigo-600" />
            <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em]">Institutional Trust</span>
          </motion.div>

          <div className="space-y-6 max-w-4xl text-center">
            <EditableContent 
              contentKey="home_collab_heading"
              description="Collaborations Heading"
              defaultContent={
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-[-0.05em] leading-[1.1]"
                >
                  Client <span className="text-indigo-600 italic">Collaborations</span>
                </motion.h2>
              }
            />
          </div>
          {isAdmin && editMode && (
            <div className="flex gap-4">
               <Button 
                onClick={() => {
                  setCollabForm({ image: "", title: "" });
                  setShowCollabModal(true);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
               >
                 <Plus className="w-4 h-4 mr-2" /> Add Collab Image
               </Button>
               <Button 
                onClick={() => {
                  setEditingReview(null);
                  setReviewForm({ name: "", role: "", text: "", rating: 5, page: "home", image: "" });
                  setShowReviewModal(true);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
               >
                 <Plus className="w-4 h-4 mr-2" /> Add Review
               </Button>
            </div>
          )}
        </div>

        {/* Dual Photo Display Grid */}
        <div className="max-w-4xl mx-auto px-4 md:px-0 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 min-h-[300px]">
            <AnimatePresence>
              {[0, 1].map((offset) => {
                const item = collabList[(currentIndex + offset) % collabList.length];
                if (!item) return null;
                const itemIndex = (currentIndex + offset) % collabList.length;
                return (
                  <motion.div
                    key={`${currentIndex}-${offset}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="flex flex-col gap-4 relative"
                  >
                    {isAdmin && editMode && (
                      <button 
                        onClick={() => {
                          const newList = collabList.filter((_, i) => i !== itemIndex);
                          handleSaveCollabs(newList);
                        }}
                        className="absolute -top-4 -right-4 z-50 p-2 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                        title="Delete this image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                    <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[3px] border-white bg-slate-100 group mx-auto w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-2 text-center">
                      <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-16 h-12 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all duration-300 shadow-sm border border-slate-200"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={nextSlide}
              className="w-16 h-12 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all duration-300 shadow-sm border border-slate-200"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Positive Student Reviews */}
        <div className="max-w-6xl mx-auto mt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(reviews.length > 0 ? reviews : [
              {
                name: "Rahul Sharma",
                role: "Final Year Student, SVIT",
                text: "The AICAS platform significantly reduced my manual work for semester exam registration. Everything is so streamlined now!",
                rating: 5
              },
              {
                name: "Priya Varma",
                role: "Placed at TCS, GPREC",
                text: "MySkillForge's training was the turning point for my career. The industry-focused curriculum helped me crack my dream company's interview.",
                rating: 5
              },
              {
                name: "Sandeep Kumar",
                role: "B.Tech Student, Malla Reddy University",
                text: "SemesterPrep's resources are exactly what a student needs. The content is so precise and directly helps in scoring better in exams.",
                rating: 5
              }
            ]).map((review, i) => (
              <motion.div
                key={review.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-indigo-50 shadow-[0_15px_40px_rgba(99,102,241,0.05)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.1)] transition-all duration-500 hover:-translate-y-2"
              >
                {isAdmin && editMode && review.id && (
                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    <button 
                      onClick={() => {
                        setEditingReview(review);
                        setReviewForm({ ...review });
                        setShowReviewModal(true);
                      }}
                      className="p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => handleDeleteReview(review.id)}
                      className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating || 5)].map((_, star) => (
                    <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md overflow-hidden">
                    {review.image ? <img src={review.image} className="w-full h-full object-cover" /> : review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-0.5">{review.name}</h5>
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{review.role || review.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
        <DialogContent className="bg-white text-slate-950 max-w-lg rounded-[2rem] border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">{editingReview ? "Edit Review" : "Add New Review"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-500 uppercase">Student Image</label>
                <div 
                  className={`relative group w-full ${reviewDragActive ? 'scale-102' : ''} transition-transform duration-200`}
                  onDragEnter={(e) => handleDrag(e, 'review')}
                  onDragLeave={(e) => handleDrag(e, 'review')}
                  onDragOver={(e) => handleDrag(e, 'review')}
                  onDrop={(e) => handleDrop(e, 'review')}
                >
                  <div className={`w-full h-32 rounded-2xl bg-slate-50 border-2 border-dashed ${reviewDragActive ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-200'} flex flex-col items-center justify-center overflow-hidden transition-colors`}>
                    {reviewForm.image ? (
                      <div className="relative w-full h-full group">
                        <img src={reviewForm.image} className="w-full h-full object-contain p-2" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <Camera className="w-6 h-6 text-white" />
                          <span className="ml-2 text-white font-bold text-xs">Change</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Camera className={`w-6 h-6 ${reviewDragActive ? 'text-indigo-600' : 'text-slate-400'} mb-2`} />
                        <p className="text-[10px] font-bold text-slate-500 uppercase">
                          {reviewDragActive ? "Drop Image" : "Click or Drag to Upload"}
                        </p>
                      </>
                    )}
                  </div>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleImageUpload(e, 'review')} 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                  />
                </div>
                <Input 
                  value={reviewForm.image || ""} 
                  onChange={e => setReviewForm({...reviewForm, image: e.target.value})} 
                  placeholder="Or paste Image URL here..." 
                  className="text-xs"
                />
             </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">Student Name</label>
                <Input value={reviewForm.name || ""} onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })} placeholder="e.g. Rahul Sharma" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">Role / College</label>
                <Input value={reviewForm.role || ""} onChange={e => setReviewForm({ ...reviewForm, role: e.target.value })} placeholder="e.g. Final Year, SVIT" className="rounded-xl" />
              </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase">Review Text</label>
              <Textarea value={reviewForm.text || ""} onChange={e => setReviewForm({ ...reviewForm, text: e.target.value })} placeholder="What did the student say?" className="min-h-[100px] rounded-xl" />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => setShowReviewModal(false)} className="rounded-xl">Cancel</Button>
            <Button onClick={handleSaveReview} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-xl font-bold shadow-lg shadow-indigo-500/20">
              {editingReview ? "Update Review" : "Save Review"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Collab Modal */}
      <Dialog open={showCollabModal} onOpenChange={setShowCollabModal}>
        <DialogContent className="bg-white text-slate-950 max-w-md rounded-[2rem] border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">Add Collaboration Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
             <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">Upload Logo</label>
                <div className="flex items-center gap-4">
                  <div 
                    className={`relative group w-full ${dragActive ? 'scale-105' : ''} transition-transform duration-200`}
                    onDragEnter={(e) => handleDrag(e, 'collab')}
                    onDragLeave={(e) => handleDrag(e, 'collab')}
                    onDragOver={(e) => handleDrag(e, 'collab')}
                    onDrop={(e) => handleDrop(e, 'collab')}
                  >
                    <div className={`w-full h-40 rounded-2xl bg-slate-50 border-2 border-dashed ${dragActive ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-200'} flex flex-col items-center justify-center overflow-hidden transition-colors`}>
                      {collabForm.image ? (
                        <div className="relative w-full h-full group">
                          <img src={collabForm.image} className="w-full h-full object-contain p-4" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Camera className="w-8 h-8 text-white" />
                            <span className="ml-2 text-white font-bold text-xs">Change Image</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className={`p-4 rounded-full ${dragActive ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'} mb-2 transition-colors`}>
                            <Camera className="w-8 h-8" />
                          </div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            {dragActive ? "Drop to Upload" : "Click or Drag to Upload"}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-1">JPG, PNG or SVG. Max 2MB.</p>
                        </>
                      )}
                    </div>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(e, 'collab')} 
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    />
                  </div>
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">Image Title / MoU Info</label>
                <Input value={collabForm.title || ""} onChange={e => setCollabForm({ ...collabForm, title: e.target.value })} placeholder="e.g. MoU with GPREC" className="rounded-xl" />
             </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => setShowCollabModal(false)} className="rounded-xl">Cancel</Button>
            <Button 
              onClick={() => {
                const newList = [...collabList, collabForm];
                handleSaveCollabs(newList);
                setShowCollabModal(false);
              }}
              disabled={!collabForm.image || !collabForm.title || uploading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
            >
              {uploading ? "Saving..." : "Add Collaboration"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CollaborationsSection;
