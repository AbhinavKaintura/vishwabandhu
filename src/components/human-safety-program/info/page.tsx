// components/HumanSafetyInfo/page.tsx

interface InfoPoint {
    text: string;
  }
  
  const HumanSafetyInfo = () => {
    const infoPoints: InfoPoint[] = [
      {
        text: "• A program designed to provide financial support to families during times of loss.",
      },
      {
        text: "• Members join by paying a one-time fee of ₹500, and in the event of a member's death, all other members contribute a small amount.",
      },
      {
        text: "• Helps families manage sudden financial burdens due to unexpected tragedies.",
      },
      {
        text: "• A self-sustaining system where each member's small contribution makes a big difference collectively.",
      },
      {
        text: "• Open to all who wish to contribute to the well-being of others and their community.",
      },
    ];
  
    return (
      <section className="max-w-full place-items-center  px-4 py-16 bg-[#FDF6F0]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 uppercase tracking-wide font-serif">
            What is Human Safety Program
          </h2>
          <div className="mt-2 w-48 h-1 bg-orange-500 mx-auto"></div>
        </div>
  
        <div className="space-y-6">
          {infoPoints.map((point, index) => (
            <p 
              key={index} 
              className="text-gray-700 text-xl leading-relaxed font-sans"
            >
              {point.text}
            </p>
          ))}
        </div>
      </section>
    );
  };
  
  export default HumanSafetyInfo;