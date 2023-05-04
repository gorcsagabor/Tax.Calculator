function adokalkulator() {
  const brutto = parseInt(document.getElementById("brutto").value);
  const AFA_KULCS = 0.27;
  const NYUGDIJ_KULCS = 0.1;
  const SZOC_HOZZ_KULCS = 0.18;

  const netto = brutto / (1 + AFA_KULCS);
  const afa = brutto - netto;
  const nyugdij = brutto * NYUGDIJ_KULCS;
  const szoc_hozz = brutto * SZOC_HOZZ_KULCS;

  const eredmenyDiv = document.getElementById("eredmeny");
  eredmenyDiv.innerHTML = `<p>Nettó összeg: ${netto} Ft</p>
                           <p>Áfa: ${afa} Ft</p>
                           <p>Nyugdíjjárulék: ${nyugdij} Ft</p>
                           <p>Szociális hozzájárulási adó: ${szoc_hozz} Ft</p>`;

}
