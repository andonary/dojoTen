function crypto(motdepasse, hash) {
  const tabMDP = [...motdepasse],
    tabHASH = [...hash];
  const rep = new Array(tabMDP.length);
  rep.fill(false);
  tabHASH.some(element => {
    tabMDP.forEach((mdp, index) => {
      if (mdp === element.toLowerCase()) {
        rep[index] = true;
      }
    });
  });
  return rep.includes(false) ? false : true;
}

console.log(
  crypto(
    "mdp",
    "AZR4T4J8K64È-È4d4**6PTYR56z4J6fUM-YT4Èh6#84U@JGFHg6K6ÇÇHDG&468g9JF46GJH"
  )
);

console.log(
  crypto(
    "pass",
    "G65Fd465aFSPG4FD6G4DFSG6cFDHG-D4SH64FDv64GEH64g3DF5freAG44FGF6-zDHG4FmDg4HGD"
  )
);

console.log(crypto("no", "a4Z566ER4_n5T154Y"));
