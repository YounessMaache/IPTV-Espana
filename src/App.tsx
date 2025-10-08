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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
