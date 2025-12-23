import Foto from '../assets/Foto1.png';

function About(){
    return (
        <section id="sobre" className="pt-20 bg-amber-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={Foto} alt="Nossa pastelaria" className="rounded-lg shadow-lg w-auto pr-20" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Tradição e Qualidade</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Há mais de 20 anos, preparamos os melhores salgados artesanais da região. Cada pastéis, bolo de chuva e
                coxinha é feito na hora com ingredientes selecionados e receitas que passam de geração em geração.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Acreditamos que qualidade não é só sobre o produto final, mas sobre o cuidado em cada etapa do processo.
                Desde a escolha dos ingredientes até o atendimento personalizado.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">20+</div>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <p className="text-gray-600">Artesanal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}

export default About;