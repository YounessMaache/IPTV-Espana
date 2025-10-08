import blackAdam from "@/assets/movies/black-adam.webp";
import aquaman from "@/assets/movies/aquaman.webp";
import movie65 from "@/assets/movies/65.webp";
import movie1917 from "@/assets/movies/1917.webp";
import barbie from "@/assets/movies/barbie.webp";
import batman from "@/assets/movies/batman.webp";

const movies = [
  { name: "Black Adam", image: blackAdam },
  { name: "Aquaman", image: aquaman },
  { name: "65", image: movie65 },
  { name: "1917", image: movie1917 },
  { name: "Barbie", image: barbie },
  { name: "Batman", image: batman },
];

const MoviesShowcase = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Películas y Series con <span className="text-gradient-primary">IPTV España</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Disfruta de más de 80,000 películas y series en alta definición. Desde los últimos estrenos hasta los clásicos que nunca pasan de moda.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-movies">
            {[...movies, ...movies, ...movies].map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative overflow-hidden rounded-lg shadow-card hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
                style={{ width: '320px', height: '180px' }}
              >
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-sm font-semibold">{movie.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-movies {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          
          .animate-scroll-movies {
            animation: scroll-movies 45s linear infinite;
            display: flex;
            width: fit-content;
          }
          
          .animate-scroll-movies:hover {
            animation-play-state: paused;
          }
        ` }} />
      </div>
    </section>
  );
};

export default MoviesShowcase;
