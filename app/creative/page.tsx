"use client";

export default function CreativePage() {
  
  // ডানে-বামে স্মুথ স্ক্রোল করার ফাংশন
  const scroll = (id: string, direction: 'left' | 'right') => {
    const container = document.getElementById(id);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pb-20">
      
      {/* ১. ইন্ট্রো ভিডিও সেকশন */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative p-6">
        <div className="w-full max-w-4xl h-[60vh] rounded-2xl overflow-hidden shadow-2xl border border-border">
          <video 
            src="/creative/intro-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-6 text-muted-foreground animate-bounce text-sm flex flex-col items-center gap-2">
          <span>↓ Scroll down to explore works by aspect ratio</span>
        </p>
      </section>

      {/* ২. হরিজন্টাল ল্যান্ডস্কেপ ভিডিও (16:9) */}
      <section className="py-12 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎬 Landscape Videos (16:9)</h2>
          {/* স্লাইডার কন্ট্রোল বাটন */}
          <div className="flex gap-2">
            <button onClick={() => scroll('landscape-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('landscape-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        <div id="landscape-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          {/* ল্যান্ডস্কেপ ভিডিও ১ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Launching Video</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/B9ove2Br1r0" title="Product Launching Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Directed a high-impact product launch video for the e-commerce brand TECH RAJJO, specifically designed to introduce and highlight the key features of the newly arrived T800 Ultra Smartwatch.
            </p>
          </div>

          {/* ল্যান্ডস্কেপ ভিডিও ২ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">YouTube Channel Intro</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/WHuPLT_vzuc" title="Youtube Channel Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Produced an engaging channel intro for 'How2 School,' visually encapsulating their diverse educational content, including origami, ambigram art, and photography.
            </p>
          </div>

          {/* ল্যান্ডস্কেপ ভিডিও ৩ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Review Feature</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/XD4YgkBl_I4" title="Product Review Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Edited a comprehensive product review video featuring an in-depth breakdown of electronics accessories, aimed at boosting consumer trust and conversion.
            </p>
          </div>
        </div>
      </section>

      {/* ৩. রিল ভিডিও (9:16 Vertical) */}
      <section className="py-12 px-6 border-t border-border bg-card/10">
        <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">📱 Reels & Shorts (9:16)</h2>
          {/* স্লাইডার কন্ট্রোল বাটন */}
          <div className="flex gap-2">
            <button onClick={() => scroll('reels-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('reels-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div id="reels-scroll" className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          
          {/* রিল ১ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Real Madrid Acrylic Lamp</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/uHc-LWb4lSk" title="Real Madrid Lamp Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Created a dynamic promotional short, capturing first impressions and highlighting the sleek design of the Real Madrid Acrylic Lamp.
             </p>
          </div>

          {/* রিল ২ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Vintage Earbud Promo</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/yTfyXsLBP9U" title="Vintage Earbud Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Designed a visually aesthetic promo reel utilizing vintage audio elements to complement the earbud's unique retro styling.
             </p>
          </div>

          {/* রিল ৩ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Kids Smartwatch Overview</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/XcFBiv-LLHM" title="Kids Smartwatch Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Produced an engaging facecam-style reel outlining the safety features and benefits of a kids' smartwatch, tailored to appeal directly to parents.
             </p>
          </div>

          {/* রিল ৪ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">FIFA Special Acrylic Models</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/qBv8tFrIuPU" title="FIFA Special Lamp Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Showcased a special FIFA-themed collection of acrylic lamps through a fast-paced, engaging short designed to capture football fans' attention.
             </p>
          </div>

          {/* রিল ৫ (এখানে আপনার দেওয়া নতুন লিংকটি ফিক্স করে দেওয়া হয়েছে) */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">3D Moon Lamp Aesthetic</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg flex items-center justify-center relative">
                <iframe 
                  className="w-full h-full absolute inset-0" 
                  src="https://www.youtube.com/embed/Kt6_0d201Z4" 
                  title="3D Moon Lamp Aesthetic"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Capitalized on social media trends to create an atmospheric reel highlighting the various color modes and aesthetic vibes of a 3D Moon Lamp.
             </p>
          </div>

        </div>
      </section>

      {/* ৪. এক্স ব্যানার ডিজাইন */}
      <section className="py-16 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎯 X-Banner Designs</h2>
          {/* স্লাইডার কন্ট্রোল বাটন */}
          <div className="flex gap-2">
            <button onClick={() => scroll('xbanner-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('xbanner-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div id="xbanner-scroll" className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[240px] md:min-w-[300px] h-[450px] bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">X-Banner Image</span>
          </div>
        </div>
      </section>

      {/* ৫. সোশ্যাল মিডিয়া পোস্ট */}
      <section className="py-16 px-6 border-t border-border bg-card/10">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎨 Social Media Posts</h2>
          {/* স্লাইডার কন্ট্রোল বাটন */}
          <div className="flex gap-2">
            <button onClick={() => scroll('social-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('social-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div id="social-scroll" className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[280px] md:min-w-[320px] aspect-square bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">Square Post Image</span>
          </div>
        </div>
      </section>

      {/* ৬. ইভেন্ট ব্যানার ডিজাইন */}
      <section className="py-16 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎪 Event Banners</h2>
          {/* স্লাইডার কন্ট্রোল বাটন */}
          <div className="flex gap-2">
            <button onClick={() => scroll('event-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('event-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div id="event-scroll" className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[320px] md:min-w-[500px] aspect-[16/9] bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">Event Banner Image</span>
          </div>
        </div>
      </section>

    </main>
  );
}