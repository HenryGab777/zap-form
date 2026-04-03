        async function buscaCEP() {
            const cep = document.getElementById('cep').value.replace(/\D/g, '');
            if (cep.length !== 8) return;
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                }
            } catch (error) { console.error("Erro ao buscar CEP"); }
        }

        function pegarLocalizacao() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    document.getElementById('latlong').value = `${lat},${lon}`;
                    alert("📍 Localização capturada com sucesso!");
                }, () => {
                    alert("⚠️ Por favor, ative o GPS para usarmos sua localização.");
                });
            }
        }

        function enviarWhatsApp() {
            const nome = document.getElementById('nome').value;
            const rua = document.getElementById('rua').value;
            const bairro = document.getElementById('bairro').value;
            const ref = document.getElementById('ref').value;
            const latlong = document.getElementById('latlong').value;

            if(!nome || !rua || !bairro) {
                alert("Por favor, preencha os campos obrigatórios (Nome, Rua e Setor).");
                return;
            }

            const SEU_NUMERO = "5562996398761"; 
            let wazeLink = latlong 
                ? `https://waze.com/ul?ll=${latlong.split(',')[0]},${latlong.split(',')[1]}&navigate=yes`
                : `https://waze.com/ul?q=${encodeURIComponent(rua + ', ' + bairro)}&navigate=yes`;

            const mensagem = `*🍔 ENDEREÇO - MONTEIRO BURGER*%0A%0A` +
                             `👤 *CLIENTE:* ${nome}%0A` +
                             `🏠 *RUA/Nº:* ${rua}%0A` +
                             `🏘️ *SETOR:* ${bairro}%0A` +
                             `🏢 *REF:* ${ref || 'Não informado'}%0A%0A` +
                             `🚙 *ABRIR LOCALIZAÇÃO:*%0A${wazeLink}`;

            window.open(`https://wa.me/${SEU_NUMERO}?text=${mensagem}`, '_blank');
        }