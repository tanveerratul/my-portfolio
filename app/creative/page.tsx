"use client";

export default function CreativePage() {
  
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
          <video src="/creative/intro-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
        <p className="mt-6 text-muted-foreground animate-bounce text-sm flex flex-col items-center gap-2">
          <span>↓ Scroll down to explore works by aspect ratio</span>
        </p>
      </section>

      {/* ২. হরিজন্টাল ল্যান্ডস্কেপ ভিডিও (16:9) */}
      <section className="py-12 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎬 Landscape Videos (16:9)</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('landscape-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('landscape-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="landscape-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          {/* ল্যান্ডস্কেপ ভিডিও ১ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Launching Video</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/B9ove2Br1r0" title="Product Launching Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Directed a high-impact product launch video for the e-commerce brand TECH RAJJO, specifically designed to introduce and highlight the key features of the newly arrived T800 Ultra Smartwatch.</p>
          </div>
          {/* ল্যান্ডস্কেপ ভিডিও ২ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">YouTube Channel Intro</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/WHuPLT_vzuc" title="Youtube Channel Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Produced an engaging channel intro for 'How2 School,' visually encapsulating their diverse educational content, including origami, ambigram art, and photography.</p>
          </div>
          {/* ল্যান্ডস্কেপ ভিডিও ৩ */}
          <div className="min-w-[320px] w-[85vw] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Review Feature</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/XD4YgkBl_I4" title="Product Review Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Edited a comprehensive product review video featuring an in-depth breakdown of electronics accessories, aimed at boosting consumer trust and conversion.</p>
          </div>
        </div>
      </section>

      {/* ৩. রিল ভিডিও (9:16 Vertical) */}
      <section className="py-12 px-6 border-t border-border bg-card/10">
        <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">📱 Reels & Shorts (9:16)</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('reels-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('reels-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="reels-scroll" className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          {/* রিল ১ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Real Madrid Acrylic Lamp</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/uHc-LWb4lSk" title="Real Madrid Lamp Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Created a dynamic promotional short, capturing first impressions and highlighting the sleek design of the Real Madrid Acrylic Lamp.</p>
          </div>
          {/* রিল ২ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Vintage Earbud Promo</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/yTfyXsLBP9U" title="Vintage Earbud Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a visually aesthetic promo reel utilizing vintage audio elements to complement the earbud's unique retro styling.</p>
          </div>
          {/* রিল ৩ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Kids Smartwatch Overview</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/XcFBiv-LLHM" title="Kids Smartwatch Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Produced an engaging facecam-style reel outlining the safety features and benefits of a kids' smartwatch, tailored to appeal directly to parents.</p>
          </div>
          {/* রিল ৪ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">FIFA Special Acrylic Models</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/qBv8tFrIuPU" title="FIFA Special Lamp Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Showcased a special FIFA-themed collection of acrylic lamps through a fast-paced, engaging short designed to capture football fans' attention.</p>
          </div>
          {/* রিল ৫ */}
          <div className="min-w-[280px] w-[75vw] md:min-w-[320px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">3D Moon Lamp Aesthetic</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/Kt6_0d201Z4" title="3D Moon Lamp Aesthetic" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Capitalized on social media trends to create an atmospheric reel highlighting the various color modes and aesthetic vibes of a 3D Moon Lamp.</p>
          </div>
        </div>
      </section>

      {/* ৪. এক্স ব্যানার ডিজাইন (X-Banner) */}
      <section className="py-16 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎯 X-Banner Designs</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('xbanner-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('xbanner-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="xbanner-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col gap-3">
             <div className="h-[450px] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/xbanner-1.jpg" alt="CSE Fest 2026 X-Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a striking X-banner for "CSE Fest 2026," a major national festival co-organized by the Notre Dame University Bangladesh (NDUB) Computer Club and the Department of Computer Science and Engineering, highlighting the event's top segments.</p>
          </div>
          <div className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col gap-3">
             <div className="h-[450px] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/xbanner-2.jpg" alt="Debate Seminar X-Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Produced a professional X-banner for an insightful seminar held by the Notre Dame University Bangladesh (NDUB) Debating Club, visualizing the intersection of debate skills with personal and professional success.</p>
          </div>
          <div className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col gap-3">
             <div className="h-[450px] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/xbanner-3.jpg" alt="MUN Debate X-Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Crafted an elegant vertical display banner for the MUN debate workshop, a collaborative initiative by the Notre Dame University Bangladesh (NDUB) Debating Club and English Club.</p>
          </div>
          <div className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col gap-3">
             <div className="h-[450px] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/xbanner-4.jpg" alt="Booth X-Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Developed a minimalist and persuasive X-banner for the Notre Dame University Bangladesh (NDUB) Debating Club booth. Centered around the copy "Be the next leader" to drive audience curiosity and membership.</p>
          </div>
        </div>
      </section>

      {/* ৫. সোশ্যাল মিডিয়া পোস্ট */}
      <section className="py-16 px-6 border-t border-border bg-card/10">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎨 Social Media Posts</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('social-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('social-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="social-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-square bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/social-1.jpg" alt="Smartwatch Social Post" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a highly engaging social media campaign for TECH RAJJO's winter sale, integrating a sleek winter-themed aesthetic to promote their latest smartwatch model.</p>
          </div>
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-square bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/social-2.jpg" alt="July Mass Uprising Post" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Created a respectful and powerful digital artwork for the Notre Dame University Bangladesh (NDUB) Debating Club to commemorate the Historical July Mass Uprising across their social media platforms.</p>
          </div>
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-square bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/social-3.jpg" alt="Fathers Day Post" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a heartfelt Father's Day tribute post for the official social media channels of the Notre Dame University Bangladesh (NDUB) Debating Club, maintaining brand harmony.</p>
          </div>
        </div>
      </section>

      {/* ৬. পোস্টার ডিজাইন (Poster Designs) */}
      {/* ৬. পোস্টার ডিজাইন (Poster Designs) */}
      <section className="py-16 px-6 border-t border-border">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">📜 Poster Designs</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('poster-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('poster-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="poster-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/poster-1.jpg" alt="Tech Rajjo Fan Poster" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a promotional poster for a viral portable fan by TECH RAJJO. The artwork utilizes a cool blue color palette to visually translate the product's refreshing airflow and modern aesthetic.</p>
          </div>
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/poster-2.jpg" alt="MUN Debate Poster" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Created an informative poster for a joint Model United Nations (MUN) training seminar organized by the Notre Dame University Bangladesh (NDUB) Debating Club and English Club, focusing on clear typography.</p>
          </div>
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/poster-3.jpg" alt="Echoes of Reason Poster" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Developed the official poster for "Echoes of Reason: NDUB Debate Assembly." The design reflects the prestige of the Notre Dame University Bangladesh (NDUB) Debating Club's largest annual fest.</p>
          </div>
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/poster-4.jpg" alt="Debate Seminar Poster" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Formulated an impactful poster design for a specialized seminar by the Notre Dame University Bangladesh (NDUB) Debating Club, emphasizing the profound impact of debate on personal and professional development.</p>
          </div>
          
          {/* নতুন যোগ করা ৫ নম্বর পোস্টার */}
          <div className="min-w-[280px] md:min-w-[360px] snap-center flex flex-col gap-3">
             <div className="aspect-[3/4] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/poster-5.jpg" alt="Earthquake Awareness Poster" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Conceptualized a high-impact, topical poster for TECH RAJJO addressing the consecutive two-day earthquake events of 2025. The artwork visually maps the epicenter's progression towards Dhaka, paired with the gripping headline "Are We NEXT?" to drive urgent audience engagement and awareness.</p>
          </div>
          
        </div>
      </section>

      {/* ৭. স্টেজ ব্যানার (Stage Banners) */}
      <section className="py-16 px-6 border-t border-border bg-card/10">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold">🎪 Stage Banners</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('stage-scroll', 'left')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
            <button onClick={() => scroll('stage-scroll', 'right')} className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
        <div id="stage-scroll" className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[320px] md:min-w-[550px] snap-center flex flex-col gap-3">
             <div className="aspect-[21/9] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/stage-1.jpg" alt="MUN Debate Stage Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Designed a visually engaging stage banner for a collaborative seminar hosted by the Notre Dame University Bangladesh (NDUB) Debating Club and English Club, effectively communicating the core theme of the Model United Nations (MUN) workshop.</p>
          </div>
          <div className="min-w-[320px] md:min-w-[550px] snap-center flex flex-col gap-3">
             <div className="aspect-[21/9] bg-card rounded-xl border border-border overflow-hidden shadow-lg relative">
               <img className="w-full h-full object-cover" src="/creative/stage-2.jpg" alt="Echoes of Reason Stage Banner" />
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">Crafted the primary stage banner for "Echoes of Reason: NDUB Debate Assembly," the flagship annual festival of the Notre Dame University Bangladesh (NDUB) Debating Club, capturing the grandeur of the diverse debate segments.</p>
          </div>
        </div>
      </section>

    </main>
  );
}