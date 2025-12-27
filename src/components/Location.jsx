function Location(){
    return (
        <section id="localizacao" className="py-20 bg-amber-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Onde Nos Encontrar</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                {/* <MapPin className="text-amber-400 flex-shrink-0" size={32} /> */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-amber-100">
                    Rua Joaquim Gonçalves Ledo, 580
                    <br />
                    Franca - SP
                    <br />
                    CEP: 14405-432
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {/* <Clock className="text-amber-400 flex-shrink-0" size={32} /> */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                  <p className="text-amber-100">
                    Seg - Sex: 17:00 - 22:00
                    <br />
                    Sábado: 7:00 - 20:00
                    <br />
                    Domingo: 7:00 - 20:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {/* <Phone className="text-amber-400 flex-shrink-0" size={32} /> */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefone</h3>
                  <p className="text-amber-100">
                    <a href="tel:+55 16 99997-3295" className="hover:text-amber-300">
                      +55 16 99997-3295
                    </a>
                  </p>
                  <p className="text-sm text-amber-200 mt-1">Aceita pedidos por WhatsApp</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src=""
                // src="/bakery-storefront-outdoor-location-nice-neighborho.jpg"
                alt="Fachada da Pastelaria"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Location;