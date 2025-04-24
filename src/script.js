const form = document.getElementById("formViagem");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const autonomia = parseFloat(document.getElementById("autonomia").value);
  const preco = parseFloat(document.getElementById("preco").value);
  const apiKey = "5b3ce3597851110001cf6248b783921a7b394aefa496769ccf9d6ba2";

  async function getCoordinates(city) {
    const res = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(
        city
      )}`
    );
    const data = await res.json();
    return data.features[0]?.geometry.coordinates;
  }

  const start = await getCoordinates(origem);
  const end = await getCoordinates(destino);

  if (!start || !end) {
    alert("Não foi possível localizar uma ou ambas as cidades.");
    return;
  }

  const response = await fetch(
    "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
    {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [start, end],
      }),
    }
  );

  const data = await response.json();
  const distancia = data.features[0].properties.summary.distance / 1000;
  const custo = ((distancia / autonomia) * preco).toFixed(2);

  document.getElementById("resultado").innerText = `🛣️ ${distancia.toFixed(
    2
  )} km - 💸 R$ ${custo}`;
});
