// components/EventStats.tsx
import { FC, JSX } from 'react';
import girl_img from '../../../../public/home-img/little-girl-hugging-green-overlay.jpg'


interface EventStatProps {
  icon: JSX.Element;
  count: number;
  label: string;
}

const EventStat: FC<EventStatProps> = ({ icon, count, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-white mb-2">
      {icon}
    </div>
    <div className="text-white text-2xl font-bold mb-1">{count}</div>
    <div className="text-white text-sm">{label}</div>
  </div>
);

const EventStats: FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full min-h-3xl p-6 relative">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
            backgroundImage: `url(${girl_img.src})`,
            backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <EventStat
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
            }
            count={62}
            label="Finished Event"
          />
          
          <EventStat
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            }
            count={62}
            label="Finished Event"
          />
          
          <EventStat
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              </svg>
            }
            count={62}
            label="Finished Event"
          />
          
          <EventStat
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            }
            count={62}
            label="Finished Event"
          />
        </div>
      </div>
    </div>
  );
};

export default EventStats;