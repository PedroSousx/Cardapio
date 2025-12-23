import Instagram from '../assets/instagram.png';
import Whatsapp from '../assets/whatsapp.png';
import Location from '../assets/location.png';

function Footer() {
    return (
        <footer class="bg-black text-white py-10 font-opensans">
        <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div class="text-center md:text-left">
                <h2 class="text-2xl font-bold tracking-wide">Need Salagados</h2>
                <p class="text-sm text-gray-400">Salgados de qualidade</p>
            </div>

            <nav class="flex flex-wrap justify-center md:justify-end md:gap-6 gap-2 sm:text-sm text-xs font-medium">
                <a href="#sobre" class="hover:text-red-500 transition">Sobre</a>
                <a href="#cursos" class="hover:text-red-500 transition">Cardápio</a>
                <a href="#professores" class="hover:text-red-500 transition">Contato</a>
            </nav>
        </div>

        <div class="flex flex-col items-center gap-3 mt-6">
            <div class="flex gap-4 mb-2">
                <a href="https://www.instagram.com/need.alfer/" target="_blank" rel="noopener" aria-label="Instagram"
                   class="bg-red-700 hover:bg-red-800 rounded-full p-2 transition">
                    <img src={ Instagram } alt="Instagram" class="w-7 h-7" />
                </a>
                <a href="https://wa.me/+5516999973295" target="_blank" rel="noopener" aria-label="WhatsApp"
                   class="bg-green-600 hover:bg-green-700 rounded-full p-2 transition">
                    <img src={ Whatsapp } alt="WhatsApp" class="w-7 h-7" />
                </a>
                    <a href="https://maps.app.goo.gl/Bwp7ZCfygLacVuE17" target="_blank" rel="noopener" aria-label="Localização"
                   class="bg-cyan-600 hover:bg-cyan-700 rounded-full p-2 transition">
                    <img src={ Location } alt="Localização" class="w-7 h-7" />
                </a>

            </div>
        </div>

        <div class="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>&copy; 2025 Need Alfer. Todos os direitos reservados.</p>

            <p class="mt-1">Desenvolvido por <a class="font-semibold text-gray-300" href="https://wa.me/5516999733714" target="_blank">pedroh.scintra@gmail.com</a></p>
        </div>
        </footer>
    );
}

export default Footer;