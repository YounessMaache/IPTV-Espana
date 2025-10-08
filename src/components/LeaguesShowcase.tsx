import { Trophy } from "lucide-react";
import europaLeague from "@/assets/leagues/europa-league.webp";
import premierLeague from "@/assets/leagues/premier-league.webp";
import laliga from "@/assets/leagues/laliga.webp";
import motogp from "@/assets/leagues/motogp.webp";
import ligue1 from "@/assets/leagues/ligue1.webp";
import championsLeague from "@/assets/leagues/champions-league.webp";
import bundesliga from "@/assets/leagues/bundesliga.webp";
import conferenceLeague from "@/assets/leagues/conference-league.webp";
import ufc from "@/assets/leagues/ufc.webp";

const leagues = [
  { name: "Champions League", logo: championsLeague },
  { name: "La Liga", logo: laliga },
  { name: "Premier League", logo: premierLeague },
  { name: "Europa League", logo: europaLeague },
  { name: "Bundesliga", logo: bundesliga },
  { name: "Ligue 1", logo: ligue1 },
  { name: "Conference League", logo: conferenceLeague },
  { name: "MotoGP", logo: motogp },
  { name: "UFC", logo: ufc },
];

const LeaguesShowcase = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Deportes en Vivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Las Mejores <span className="text-gradient-primary">Ligas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transmisión ilimitada de tus deportes favoritos. Mira fútbol, baloncesto, tenis, ciclismo, pádel y más, todo con una sola suscripción.
          </p>
        </div>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...leagues, ...leagues, ...leagues].map((league, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-card overflow-hidden group"
              >
                <img 
                  src={league.logo} 
                  alt={league.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-sm font-semibold">{league.name}</span>
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
            animation: scroll 35s linear infinite;
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

export default LeaguesShowcase;
