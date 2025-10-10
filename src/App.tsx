import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Learn from "./pages/Learn";
import Test from "./pages/Test";
import QueEsIPTV from "./pages/articles/QueEsIPTV";
import ComoInstalarFirestick from "./pages/articles/ComoInstalarFirestick";
import ConfigurarSmartTV from "./pages/articles/ConfigurarSmartTV";
import IPTVvsCableTV from "./pages/articles/IPTVvsCableTV";
import SolucionarBuffering from "./pages/articles/SolucionarBuffering";
import IPTVGratisTV from "./pages/articles/IPTVGratisTV";
import IPTVSmartPlayer from "./pages/articles/IPTVSmartPlayer";
import IPTVGratisAndroid from "./pages/articles/IPTVGratisAndroid";
import IPTVM3U from "./pages/articles/IPTVM3U";
import IPTVParaPC from "./pages/articles/IPTVParaPC";
import IPTVStreamApp from "./pages/articles/IPTVStreamApp";
import IPTVLegal from "./pages/articles/IPTVLegal";
import IPTVReddit from "./pages/articles/IPTVReddit";
import IPTVAppGratis from "./pages/articles/IPTVAppGratis";
import IPTVExtreme from "./pages/articles/IPTVExtreme";
import IPTVEspana2025 from "./pages/articles/IPTVEspana2025";
import MejorIPTVEspana from "./pages/articles/MejorIPTVEspana";
import IPTVLegalEspana from "./pages/articles/IPTVLegalEspana";
import SolucionarBufferingIPTV from "./pages/articles/SolucionarBufferingIPTV";
import MejorIPTVPlayerM3U from "./pages/articles/MejorIPTVPlayerM3U";
import GuiaM3UIPTV from "./pages/articles/GuiaM3UIPTV";
import IPTVGratisParaTV from "./pages/articles/IPTVGratisParaTV";
import ComparativaIPTVPlayers from "./pages/articles/ComparativaIPTVPlayers";
import IPTVParaPCMac from "./pages/articles/IPTVParaPCMac";
import SolucionarProblemasIPTV from "./pages/articles/SolucionarProblemasIPTV";
import IPTVRedditOpiniones from "./pages/articles/IPTVRedditOpiniones";
import IPTVGratisVsCalidad from "./pages/articles/IPTVGratisVsCalidad";
import InstalarIPTVSmartTV from "./pages/articles/InstalarIPTVSmartTV";
import IPTVSmartPlayerVsNativo from "./pages/articles/IPTVSmartPlayerVsNativo";
import IPTVExtremeVsTiviMate from "./pages/articles/IPTVExtremeVsTiviMate";
import FutbolIPTV2025 from "./pages/articles/FutbolIPTV2025";
import IPTVEspana2025Service from "./pages/articles/IPTVEspana2025Service";
import MejorIPTVEspanaReddit from "./pages/articles/MejorIPTVEspanaReddit";
import IPTVFireStickListasM3U from "./pages/articles/IPTVFireStickListasM3U";
import ListasM3UIPTVEspana from "./pages/articles/ListasM3UIPTVEspana";
import IPTVEspanaFireTV from "./pages/articles/IPTVEspanaFireTV";
import MejorIPTVFutbolEspana from "./pages/articles/MejorIPTVFutbolEspana";
import IPTVEspanaRedditOpiniones from "./pages/articles/IPTVEspanaRedditOpiniones";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/success" element={<Success />} />
            <Route path="/test" element={<Test />} />
            <Route path="/aprende" element={<Learn />} />
            <Route path="/aprende/que-es-iptv-como-funciona" element={<QueEsIPTV />} />
            <Route path="/aprende/como-instalar-iptv-firestick" element={<ComoInstalarFirestick />} />
            <Route path="/aprende/configurar-iptv-smart-tv" element={<ConfigurarSmartTV />} />
            <Route path="/aprende/iptv-vs-cable-tv" element={<IPTVvsCableTV />} />
            <Route path="/aprende/solucionar-buffering-iptv" element={<SolucionarBuffering />} />
            <Route path="/aprende/iptv-gratis-tv" element={<IPTVGratisTV />} />
            <Route path="/aprende/iptv-smart-player" element={<IPTVSmartPlayer />} />
            <Route path="/aprende/iptv-gratis-android" element={<IPTVGratisAndroid />} />
            <Route path="/aprende/iptv-m3u" element={<IPTVM3U />} />
            <Route path="/aprende/iptv-para-pc" element={<IPTVParaPC />} />
            <Route path="/aprende/iptv-stream-app" element={<IPTVStreamApp />} />
            <Route path="/aprende/iptv-legal" element={<IPTVLegal />} />
            <Route path="/aprende/iptv-reddit" element={<IPTVReddit />} />
            <Route path="/aprende/iptv-app-gratis" element={<IPTVAppGratis />} />
            <Route path="/aprende/iptv-extreme" element={<IPTVExtreme />} />
            <Route path="/aprende/iptv-espana-2025" element={<IPTVEspana2025 />} />
            <Route path="/aprende/mejor-iptv-espana" element={<MejorIPTVEspana />} />
            <Route path="/aprende/iptv-legal-espana" element={<IPTVLegalEspana />} />
            <Route path="/aprende/solucionar-buffering-iptv-stream" element={<SolucionarBufferingIPTV />} />
            <Route path="/aprende/mejor-iptv-player-m3u" element={<MejorIPTVPlayerM3U />} />
            <Route path="/aprende/guia-m3u-iptv" element={<GuiaM3UIPTV />} />
            <Route path="/aprende/iptv-gratis-para-tv-espana" element={<IPTVGratisParaTV />} />
            <Route path="/aprende/comparativa-iptv-players" element={<ComparativaIPTVPlayers />} />
            <Route path="/aprende/iptv-para-pc-mac" element={<IPTVParaPCMac />} />
            <Route path="/aprende/solucionar-problemas-iptv" element={<SolucionarProblemasIPTV />} />
            <Route path="/aprende/iptv-reddit-opiniones" element={<IPTVRedditOpiniones />} />
            <Route path="/aprende/iptv-gratis-vs-calidad" element={<IPTVGratisVsCalidad />} />
            <Route path="/aprende/instalar-iptv-smart-tv" element={<InstalarIPTVSmartTV />} />
            <Route path="/aprende/iptv-smart-player-vs-nativo" element={<IPTVSmartPlayerVsNativo />} />
            <Route path="/aprende/iptv-extreme-vs-tivimate" element={<IPTVExtremeVsTiviMate />} />
            <Route path="/aprende/futbol-iptv-2025-espana" element={<FutbolIPTV2025 />} />
            <Route path="/aprende/iptv-espana-servicio" element={<IPTVEspana2025Service />} />
            <Route path="/aprende/mejor-iptv-espana-reddit" element={<MejorIPTVEspanaReddit />} />
            <Route path="/aprende/iptv-fire-stick-listas-m3u" element={<IPTVFireStickListasM3U />} />
            <Route path="/aprende/listas-m3u-iptv-espana" element={<ListasM3UIPTVEspana />} />
            <Route path="/aprende/iptv-espana-fire-tv" element={<IPTVEspanaFireTV />} />
            <Route path="/aprende/mejor-iptv-futbol-espana" element={<MejorIPTVFutbolEspana />} />
            <Route path="/aprende/iptv-espana-reddit-opiniones" element={<IPTVEspanaRedditOpiniones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
