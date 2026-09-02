export default function CreativePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pb-20">
      
      {/* ১. ইন্ট্রো ভিডিও সেকশন */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative p-6">
        <div className="w-full max-w-4xl h-[60vh] rounded-2xl overflow-hidden shadow-2xl border border-border">
          {/* আপনার আসল ইন্ট্রো ভিডিওটি public ফোল্ডারে রাখলে এখানে লিংক আপডেট করে দেবেন */}
          <video 
            src="/creative/intro-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-6 text-muted-foreground animate-bounce text-sm">
          ↓ Scroll down to explore works by aspect ratio
        </p>
      </section>

      {/* ২. হরিজন্টাল ল্যান্ডস্কেপ ভিডিও (16:9) */}
      <section className="py-16 px-6 border-t border-border">
        <h2 className="text-2xl font-bold mb-8 max-w-6xl mx-auto">🎬 Landscape Videos (16:9)</h2>
        <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          
          {/* ল্যান্ডস্কেপ ভিডিও ১ */}
          <div className="min-w-[320px] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Launching Video</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/B9ove2Br1r0" 
                title="Product Launching Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This video was made for the electronics ecommerce brand TECH RAJJO to announce their newly arrived smartwatch T800 ultra.
            </p>
          </div>

          {/* ল্যান্ডস্কেপ ভিডিও ২ */}
          <div className="min-w-[320px] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Youtube Channel Intro</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/WHuPLT_vzuc" 
                title="Youtube Channel Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This intro video was made for the creative youtube channel HOw2 School. The video shows all the categories that the channel teaches. This channel mainly teaches origami, ambigram, photography etc.
            </p>
          </div>

          {/* ল্যান্ডস্কেপ ভিডিও ৩ */}
          <div className="min-w-[320px] md:min-w-[500px] snap-center flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-primary">Product Review Video</h3>
            <div className="aspect-video w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/XD4YgkBl_I4" 
                title="Product Review Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This video shows the product review where a guy reviews electronics products brought from an ecommerce brand.
            </p>
          </div>

        </div>
      </section>

      {/* ৩. রিল ভিডিও (9:16 Vertical) */}
      <section className="py-16 px-6 border-t border-border bg-card/10">
        <h2 className="text-2xl font-bold mb-8 max-w-6xl mx-auto">📱 Reels & Shorts (Vertical Videos)</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          {/* রিল ভিডিওর প্লেসহোল্ডার (পরে লিংক দিলে এখানে অ্যাড করে দেব) */}
          <div className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col gap-3">
             <h3 className="font-semibold text-lg text-primary">Reel Title Here</h3>
             <div className="aspect-[9/16] w-full bg-card rounded-xl border border-border overflow-hidden shadow-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Add Reel Link</span>
             </div>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Reel description will go here.
             </p>
          </div>
        </div>
      </section>

      {/* ৪. এক্স ব্যানার ডিজাইন */}
      <section className="py-16 px-6 border-t border-border">
        <h2 className="text-2xl font-bold mb-6 max-w-6xl mx-auto">🎯 X-Banner Designs</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[240px] md:min-w-[300px] h-[450px] bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">X-Banner Image</span>
          </div>
        </div>
      </section>

      {/* ৫. সোশ্যাল মিডিয়া পোস্ট */}
      <section className="py-16 px-6 border-t border-border bg-card/10">
        <h2 className="text-2xl font-bold mb-6 max-w-6xl mx-auto">🎨 Social Media Posts</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[280px] md:min-w-[320px] aspect-square bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">Square Post Image</span>
          </div>
        </div>
      </section>

      {/* ৬. ইভেন্ট ব্যানার ডিজাইন */}
      <section className="py-16 px-6 border-t border-border">
        <h2 className="text-2xl font-bold mb-6 max-w-6xl mx-auto">🎪 Event Banners</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto">
          <div className="min-w-[320px] md:min-w-[500px] aspect-[16/9] bg-card rounded-xl border border-border snap-center overflow-hidden flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground">Event Banner Image</span>
          </div>
        </div>
      </section>

    </main>
  )
}