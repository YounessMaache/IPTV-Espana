import { Sparkles } from "lucide-react";
import telemadrid from "@/assets/channels/telemadrid.jpg";
import nova from "@/assets/channels/nova.jpg";
import cuatro from "@/assets/channels/cuatro.jpg";
import ceuta from "@/assets/channels/ceuta.jpg";
import neox from "@/assets/channels/neox.jpg";
import dazn2 from "@/assets/channels/dazn2.jpg";

const channels = [
  { name: "TeleMadrid", logo: telemadrid },
  { name: "Nova", logo: nova },
  { name: "Cuatro", logo: cuatro },
  { name: "RTV Ceuta", logo: ceuta },
  { name: "Neox", logo: neox },
  { name: "DAZN", logo: dazn2 },
];

const ChannelShowcase = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contenido Premium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Más de <span className="text-gradient-primary">20,000</span> Canales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mira todos tus canales favoritos de España y del mundo
          </p>
        </div>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...channels, ...channels, ...channels].map((channel, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-card overflow-hidden group"
              >
                <img 
                  src={channel.logo} 
                  alt={channel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-sm font-semibold">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          
          .animate-scroll {
            animation: scroll 40s linear infinite;
            display: flex;
            width: fit-content;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        ` }} />
      </div>
    </section>
  );
};

export default ChannelShowcase;
