
# 🚗 Calculadora de Custo de Viagem

Este é um projeto web simples que permite calcular o custo estimado de uma viagem de carro entre duas cidades, com base em:

- **Distância entre as cidades** (via API do OpenRouteService)
- **Autonomia do veículo (km/L)**
- **Preço do combustível (R$)**

## 📦 Tecnologias Utilizadas

- HTML5 + CSS3 + JavaScript (Vanilla)
- [OpenRouteService API](https://openrouteservice.org/dev/#/signup) para:
  - **Geocodificação** (converter nomes de cidades em coordenadas)
  - **Cálculo de rota** (distância entre as coordenadas)

## 🚀 Como Usar

1. Faça o download do projeto:
   - [Clique aqui para baixar o ZIP](sandbox:/mnt/data/viagem-simples.zip)

2. Extraia os arquivos e abra o projeto no VSCode

3. **Abra o arquivo `index.html` com o Live Server**

4. No arquivo `script.js`, substitua `"SUA_API_KEY_OPENROUTESERVICE"` pela sua chave da OpenRouteService:
   ```js
   const apiKey = "SUA_CHAVE_AQUI";
   ```

5. Use o formulário para:
   - Inserir cidade de origem
   - Inserir cidade de destino
   - Informar a autonomia do carro (km por litro)
   - Informar o preço do combustível

6. Clique em **"Calcular Custo"**  
   O sistema irá mostrar:
   - A distância entre as cidades
   - O custo estimado da viagem

## 💡 Exemplo de Uso

```
Origem: Rio de Janeiro
Destino: São Paulo
Autonomia: 10
Preço: 5.50

Resultado: 🛣️ 430.21 km - 💸 R$ 236.62
```

## 📌 Observações

- É necessário ter uma chave válida da OpenRouteService:  
  👉 https://openrouteservice.org/dev/#/signup
- Essa versão não possui backend. Toda a lógica está no frontend.
- A geocodificação é dinâmica, então você pode usar **qualquer cidade do mundo**.

## ✅ Aprendizados Propostos

- Uso real de **API externa** com `fetch()`
- Integração com **dois endpoints** da mesma API (geocode + rotas)
- Manipulação de DOM com JavaScript puro
- Boas práticas de separação de código (HTML, CSS, JS)
